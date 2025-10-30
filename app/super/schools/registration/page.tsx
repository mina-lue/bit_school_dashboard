"use client";
import BackButton from "@/components/backButton";
import { CreateSchoolWithPrincipal } from "@/lib/domains/school.dto";
import { registerSchool } from "@/service/api.service";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const RegisterSchoolPage = () => {
  const SchoolSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().min(1, "Middle name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z
      .string()
      .regex(/^0\d{9}$/, "Phone must be 10 digits and start with 0"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(4, "password is required"),
    schoolName: z.string().min(4, "school name is required"),
    schoolEmail: z.string().email("Invalid email address"),
    schoolMerchantCode: z.string().min(8, "Enter Correct Merchant Code."),
  });

  type SchoolFormData = z.infer<typeof SchoolSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchoolFormData>({
    resolver: zodResolver(SchoolSchema),
  });

  const onSubmit = async (data: SchoolFormData) => {
    console.log("Final data:", data);

    const schoolData: CreateSchoolWithPrincipal = {
      school: {
        name: data.schoolName,
        email: data.schoolEmail,
      },
      principal: {
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        password: data.password,
      },
    };

    await registerSchool(schoolData);
  };

  return (
    <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
      <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center ">
        <BackButton />
      </div>
      <div className="w-full ">
        <h1 className="text-2xl font-semibold text-center mb-2">Register School</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] sm:h-[75vh] ml-4 mt-4 sm:border-1 rounded-lg sm:p-4"
        >
            <div className="sm:flex justify-between">
          <div className="sm:w-[48%] rounded-lg h-full sm:p-4 sm:space-y-4 space-y-1">
            <h3 className="text-center text-xl">School Information</h3>

            <div>
              <label className="block font-medium">School Name</label>
              <input
                {...register("schoolName")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.schoolName && (
                <p className="text-red-500 text-sm">
                  {errors.schoolName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">School Email</label>
              <input
                {...register("schoolEmail")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.schoolEmail && (
                <p className="text-red-500 text-sm">
                  {errors.schoolEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">School Merchant Code</label>
              <input
                {...register("schoolEmail")}
                className="border w-full px-3 py-2 rounded"
              />
              {errors.schoolMerchantCode && (
                <p className="text-red-500 text-sm">
                  {errors.schoolMerchantCode.message}
                </p>
              )}
            </div>
          </div>
          <div className="sm:w-[48%]  rounded-lg h-full sm:p-4 sm:space-y-4 space-y-1">

            <h3 className="text-center text-xl my-2">School Principal Information</h3>
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
              type="password"
              className="border w-full px-3 py-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          </div>
          </div>
          <div className="w-full flex items-center justify-end mt-8">
            <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterSchoolPage;
