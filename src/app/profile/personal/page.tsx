import React from "react";

export default function Personal({ user }: { user: any }) {

  // let user ={}
  console.log(user);

  return (
    <div>
      <table className="font-light w-full ">
        <tbody className="border-b">
          <tr className="flex justify-between">
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              First Name
              <span className="text-slate-800 text-base block">{user.first_name}</span>
            </td>
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Last Name
              {/* <span className="text-slate-800 text-base block">{user.last_name}</span> */}
            </td>
          </tr>
          <tr className="flex justify-between">
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Mobile Number
              {/* <span className="text-slate-800 text-base block">{user.phone}</span> */}
            </td>
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Email Address
              {/* <span className="text-slate-800 text-base block">{user.email}</span> */}
            </td>
          </tr>
          <tr className="flex justify-between">
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Date of Birth
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Marital Status
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
          </tr>
          <tr className="flex justify-between">
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Gender
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Nationality
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
          </tr>
          <tr className="flex justify-between">
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              Address
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
            <td className="w-[48%]  py-2 text-slate-400 text-sm border-b ">
              {/* City<span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
          </tr>
          <tr className="flex justify-between">
            <td className="w-[48%]  py-2 text-slate-400 text-sm ">
              State
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
            <td className="w-[48%]  py-2 text-slate-400 text-sm ">
              Zip Code
              {/* <span className="text-slate-800 text-base block">{user.bio}</span> */}
            </td>
          </tr>
        </tbody>

        <tfoot >
          <tr className="flex justify-between my-4">

          <td className="grow-[3] py-2 text-slate-500 text-sm ">
            Work’s hours
            <span className="text-slate-800 text-base block">180 hour</span>
          </td>
          <td className="grow py-2 text-slate-500 text-sm ">
            Salary/hour
            <span className="text-slate-800 text-base block">300 EGP</span>
          </td>
          <td className="grow py-2 text-[#EC232B] text-sm ">
            Total Salary
            <span className="text-slate-800 text-base block">54000 EGP</span>
          </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
