"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function B2BForm() {
  const [isSubmittingState, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceRequired: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        serviceRequired: data.serviceRequired,
        message: data.message
      };

      const res = await fetch("https://hitzone-backend-psi.vercel.app/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || "Failed to submit request.");
      }

      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-[#21262d] rounded-xl p-8 md:p-10 border border-white/5 shadow-2xl text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-[#AED500]/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#AED500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Submission Received!</h3>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
          Thank you for reaching out to Hit-Zone. Our technical engineers are reviewing your details and will get in touch with you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitSuccess(false);
            reset();
          }}
          className="bg-transparent hover:bg-white/5 text-white border border-white/10 font-bold tracking-widest uppercase py-3 px-8 rounded-sm transition-colors text-xs cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#21262d] rounded-xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
        {submitError && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-md p-4 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{submitError}</span>
          </div>
        )}

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full bg-[#0b0f15] border rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors shadow-inner ${errors.name ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#AED500]"
                }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full bg-[#0b0f15] border rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors shadow-inner ${errors.email ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#AED500]"
                }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone Number */}
        <div>
          <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className={`w-full bg-[#0b0f15] border rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors shadow-inner ${errors.phone ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#AED500]"
              }`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9\s\-()]{10,15}$/,
                message: "Invalid phone number"
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Row 3: Service Required */}
        <div>
          <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-2">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            className={`w-full bg-[#0b0f15] border rounded-md px-4 py-3 text-sm text-white focus:outline-none transition-colors shadow-inner appearance-none cursor-pointer ${errors.serviceRequired ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#AED500]"
              }`}
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
              colorScheme: 'dark'
            }}
            {...register("serviceRequired", { required: "Please select a service" })}
          >
            <option value="" className="text-gray-600 bg-[#0b0f15]">Select a service</option>
            <option value="Indoor Cricket Nets" className="text-white bg-[#0b0f15]">Indoor Cricket Nets</option>
            <option value="Outdoor Cricket Nets" className="text-white bg-[#0b0f15]">Outdoor Cricket Nets</option>
            <option value="Batting Cage Installation" className="text-white bg-[#0b0f15]">Batting Cage Installation</option>
            <option value="Box Type Cricket Nets" className="text-white bg-[#0b0f15]">Box Type Cricket Nets</option>
            <option value="Professional Turf Nets" className="text-white bg-[#0b0f15]">Professional Turf Nets</option>
            <option value="Custom Net Solutions" className="text-white bg-[#0b0f15]">Custom Net Solutions</option>
          </select>
          {errors.serviceRequired && (
            <p className="mt-1 text-xs text-red-500">{errors.serviceRequired.message}</p>
          )}
        </div>

        {/* Row 4: Message */}
        <div>
          <label className="block text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="5"
            placeholder="Tell us more about your vision..."
            className={`w-full bg-[#0b0f15] border rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none shadow-inner ${errors.message ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-[#AED500]"
              }`}
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmittingState}
            className={`w-full bg-[#AED500] hover:bg-[#c2eb0d] text-[#020B1A] font-bold tracking-widest uppercase py-3.5 rounded-sm flex items-center justify-center transition-colors shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmittingState ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#020B1A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Inquiry...
              </span>
            ) : (
              <>
                Request a Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
