"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchSchools, registerStaff } from "@/service/api.service";
import { School } from "@/lib/domains/school.dto";
import BackButton from "@/components/backButton";
import { CreateStaffDto } from "@/lib/domains/user.model";


const staffSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .regex(/^0\d{9}$/, "Phone must be 10 digits and start with 0"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "password is required"),
  schoolId: z.string().optional(),
});

type StaffFormData = z.infer<typeof staffSchema>;

export default function NewStudentPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StaffFormData>({
    resolver: zodResolver(staffSchema),
  });


  useEffect(() => {
    const loadSchools = async () => {
      try {
        const res = await fetchSchools({ top: 1, size: 1000 });
        setSchools(res.data ?? []);
      } catch (err) {
        console.error("Failed to load schools", err);
      } finally {
        setLoading(false);
      }
    };
    loadSchools();
  }, []);


  const onSubmit = async (data: StaffFormData) => {
    console.log("Final data:", data);
    await registerStaff(data as CreateStaffDto);
  };

  return (
    <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
    <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
        <BackButton />
      <div className="w-1/3 mx-auto mt-10 p-6 border rounded-xl shadow-md ">
        <h1 className="text-2xl font-semibold mb-4">Register New Staff Member</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              {...register("firstName")}
              className="border w-full px-3 py-2 rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
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
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
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

          <div>
            <label className="block font-medium">Password</label>
            <input
              {...register("password")}
              className="border w-full px-3 py-2 rounded"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">School (Optional)</label>
            <select
              {...register("schoolId")}
              disabled={loading}
              className="border w-full px-3 py-2 rounded"
            >
              <option value="">Select school</option>
              {schools.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
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
