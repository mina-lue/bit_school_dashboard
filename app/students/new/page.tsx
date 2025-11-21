"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerStudent } from "@/service/api.service";
import BackButton from "@/components/backButton";
import { CreateStudentDto } from "@/lib/domains/student.model";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

// 🧠 Schema definition with Zod
const studentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
  grade: z
    .number({
      error: "Grade must be a number",
    })
    .min(1)
    .max(12),
  section: z.string().min(1, "Class is required"),
  phone: z
    .string()
    .regex(/^0\d{9}$/, "Phone must be 10 digits and start with 0"),
  email: z.string().email("Invalid email address"),
  rollNumber: z.number().min(0, "Roll number is required"),
});

type StudentFormData = z.infer<typeof studentSchema>;

export default function NewStudentPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
  });

  // 📨 Submit handler
  const onSubmit = async (data: StudentFormData) => {
    setLoading(true);
    console.log("Final data:", data);
    try {
      if (!user?.schoolAsPrincipal) throw Error("User not Admin!");
      const response = await registerStudent({
        ...data,
        schoolId: user?.schoolAsPrincipal.id,
      } as CreateStudentDto);
      if (response.success) {
        router.back();
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
        <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
          <BackButton />
          <div className="flex items-center justify-center">
            <p>loading ...</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
      <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
        <BackButton />
        <div className="w-1/3 mx-auto mt-10 p-6 border rounded-xl shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Register New Student</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium">First Name</label>
              <input
                {...register("firstName")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Middle Name</label>
              <input
                {...register("middleName")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.middleName && (
                <p className="text-red-500 text-sm">
                  {errors.middleName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Last Name</label>
              <input
                {...register("lastName")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Grade</label>
              <input
                type="number"
                {...register("grade", { valueAsNumber: true })}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.grade && (
                <p className="text-red-500 text-sm">{errors.grade.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Section</label>
              <input
                {...register("section")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.section && (
                <p className="text-red-500 text-sm">{errors.section.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Roll Number</label>
              <input
                type="number"
                {...register("rollNumber", { valueAsNumber: true })}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.rollNumber && (
                <p className="text-red-500 text-sm">
                  {errors.rollNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Phone</label>
              <input
                {...register("phone")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                {...register("email")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
