"use client";

import { useState } from "react";

import { InputField } from "@/components/atoms/InputField";
import { Button } from "@/components/atoms/Button";
import { ExpiryDateInput } from "@/components/atoms/ExpiryDateInput";
import { SecurityCodeInput } from "@/components/atoms/SecurityCodeInput";
import { CardNumberInput } from "@/components/atoms/CardNumberInput";
import { PaymentMethodCard } from "@/components/atoms/PaymentMethodCard";
import { Checkbox } from "@/components/atoms/Checkbox";

export const PaymentForm = () => {
   const cost: number = 524.0;

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [emailAddress, setEmailAddress] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [address, setAddress] = useState("");
   const [city, setCity] = useState("");
   const [region, setRegion] = useState("");
   const [postalCode, setPostalCode] = useState("");

   const [expiryDate, setExpiryDate] = useState("");
   const [securityCode, setSecurityCode] = useState("");
   const [cardNumber, setCardNumber] = useState("");
   const [selectedPaymentMethod, setSelectedPaymentMethod] =
      useState("credit-card");
   const [isChecked, setIsChecked] = useState(false);

   const paymentMethods = [
      {
         icon: "/icons/card.svg",
         iconAlt: "Credit card",
         key: "credit-card",
         label: "Debit / Credit Card",
      },
      {
         icon: "/icons/bank.svg",
         iconAlt: "Virtual account",
         key: "virtual-account",
         label: "Virtual account",
      },
   ];

   return (
      <div className="w-full flex flex-col items-start gap-4">
         <div className="w-full flex flex-col items-start gap-1">
            <h3 className="font-archivo font-semibold text-b-black text-sm md:text-base xl:text-lg">
               Payment Details
            </h3>
            <p className="font-archivo font-medium text-b-dark-gray text-xs md:text-sm">
               Complete your purchase by providing your payment details.
            </p>
         </div>
         <div className="w-full flex flex-col gap-4">
            <h3 className="font-archivo font-semibold text-b-black text-sm md:text-base xl:text-lg">
               Shipping address
            </h3>
            <form
               action=""
               className="w-full flex-col items-start gap-4 lg:gap-10"
            >
               <div className="mb-6 grid grid-cols-1 py-2 gap-10 md:grid-cols-2 md:gap-12">
                  <InputField
                     type="text"
                     name="firstName"
                     label="First name"
                     color="black"
                     value={firstName}
                     placeholder="Enter your first name"
                     showLabel={true}
                     onChange={(e) => setFirstName(e.target.value)}
                  />
                  <InputField
                     type="text"
                     name="lastName"
                     label="Last name"
                     color="black"
                     value={lastName}
                     placeholder="Enter your last name"
                     showLabel={true}
                     onChange={(e) => setLastName(e.target.value)}
                  />
                  <InputField
                     type="email"
                     name="emailAdress"
                     label="Email address"
                     color="black"
                     value={emailAddress}
                     placeholder="Enter your email address"
                     showLabel={true}
                     onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  <InputField
                     type="tel"
                     name="phoneNumber"
                     label="Phone number"
                     color="black"
                     value={phoneNumber}
                     placeholder="Enter your phone number"
                     showLabel={true}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <InputField
                     type="text"
                     name="address"
                     label="Address"
                     color="black"
                     value={address}
                     placeholder="Enter your address"
                     showLabel={true}
                     onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputField
                     type="text"
                     name="city"
                     label="City"
                     color="black"
                     value={city}
                     placeholder="City"
                     showLabel={true}
                     onChange={(e) => setCity(e.target.value)}
                  />
                  <InputField
                     type="text"
                     name="region"
                     label="Region"
                     color="black"
                     value={region}
                     placeholder="Select region"
                     showLabel={true}
                     onChange={(e) => setRegion(e.target.value)}
                  />
                  <InputField
                     type="text"
                     name="postalCode"
                     label="Post code"
                     color="black"
                     value={postalCode}
                     placeholder="Enter your postal code"
                     showLabel={true}
                     onChange={(e) => setPostalCode(e.target.value)}
                  />
               </div>
               <div className="w-full flex flex-col items-start gap-2 py-4">
                  <section className="w-full flex flex-col items-start gap-3">
                     <h3 className="font-archivo font-semibold text-b-black text-sm md:text-base xl:text-lg">
                        Select payment method
                     </h3>
                     <div className="w-full flex flex-col items-center gap-2 md:flex-row">
                        {paymentMethods.map((method) => (
                           <PaymentMethodCard
                              key={method.key}
                              icon={method.icon}
                              iconAlt={method.icon}
                              label={method.label}
                              selected={method.key === selectedPaymentMethod}
                              onSelect={() =>
                                 setSelectedPaymentMethod(method.key)
                              }
                           />
                        ))}
                     </div>
                  </section>
                  <div className="w-full flex flex-col items-start gap-2 my-4 lg:gap-4">
                     <CardNumberInput
                        value={cardNumber}
                        onChange={setCardNumber}
                     />
                     <div className="w-full flex flex-col items-start gap-2 lg:flex-row lg:items-center">
                        <ExpiryDateInput
                           value={expiryDate}
                           placeholder="Expiration date (MM/YY)"
                           onChange={setExpiryDate}
                        />
                        <SecurityCodeInput
                           value={securityCode}
                           onChange={setSecurityCode}
                        />
                     </div>
                  </div>
                  <div className="flex items-center gap-1">
                     <Checkbox
                        checked={isChecked}
                        onClick={(e) => {
                           e.preventDefault();
                           setIsChecked(!isChecked);
                        }}
                     />
                     <p className="font-archivo text-b-black text-xs md:text-sm lg:text-base">
                        Use shipping address as billing address
                     </p>
                  </div>
               </div>
            </form>
            <Button
               variant="filled"
               size="small"
               label={`Pay $${cost.toFixed(2)}`}
               color="black"
               layout="reverse"
               icon="/icons/arrow-right-light.svg"
               iconAlt="Arrow right"
               className="w-full py-7"
            />
         </div>
      </div>
   );
};
