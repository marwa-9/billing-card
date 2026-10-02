import React from "react";

const users = [

  {

    name: "Oliver Liam",

    company: "Viking Burrito",

    email: "oliver@burrito.com",

    vat: "FRB1235476",

  },

  {

    name: "Lucas Harper",

    company: "Stone Tech Zone",

    email: "lucas@stone-tech.com",

    vat: "FRB1235476",

  },

  {

    name: "Ethan James",

    company: "Fiber Nation",

    email: "ethan@fiber.com",

    vat: "FRB1235476",

  },

];

// Card Component

function BillingCard({ user }) {

  return (

    <div className="bg-[#F5F7F9] rounded-xl p-5">

      <div className="flex justify-between mb-5">

        <h3 className="text-xs font-bold text-[#344563]">

          {user.name}

        </h3>

        
        <div className="flex gap-4 text-[10px] font-bold">

          <button className="text-red-400">

            ▣ DELETE

          </button>

          <button className="text-[#344563]">
            ✎ EDIT

          </button>

        </div>

      </div>
      <div className="space-y-2 text-[11px] text-gray-500">

        <p>

          Company Name:

          <span className="ml-2 text-[#344563] font-semibold">

            {user.company}

          </span>

        </p>

        <p>

          Email Address:

          <span className="ml-2 text-[#344563] font-semibold">

            {user.email}

          </span>

        </p>

        <p>

          VAT Number:

          <span className="ml-2 text-[#344563] font-semibold">

            {user.vat}

          </span>

        </p>

      </div>

    </div>

  );

}

// Main Component

function BillingInformation() {

  return (

    <div className="min-h-screen bg-[#F1F3F5] p-6">

      <div className="max-w-5xl mx-auto bg-white

      rounded-xl p-6 shadow-sm">

        <h2 className="text-sm font-semibold

        text-[#344563] mb-5">

          Billing Information

        </h2>

        <div className="space-y-4">

          {users.map((user, index) => (

            <BillingCard key={index} user={user} />

          ))}

        </div>

      </div>

    </div>

  );

}

export default BillingInformation;