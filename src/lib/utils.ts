export const formatDate = (dateString: string): string => {
   const date = new Date(dateString);

   return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   }).format(date);
};

// Formate input to have MM/YY
export const formatExpiry = (input: string) => {
   // On ne garde que les chiffres
   const digits = input.replace(/\D/g, "");

   if (digits.length === 0) return "";

   if (digits.length === 1) {
      // Si le 1er chiffre > 1, on préfixe 0 (ex: 3 => 03)
      if (parseInt(digits[0], 10) > 1) {
         return "0" + digits[0];
      }
      return digits;
   }

   if (digits.length === 2) {
      const month = parseInt(digits.slice(0, 2), 10);
      if (month === 0) return "01";
      if (month > 12) return "12";
      return digits.slice(0, 2) + "/";
   }

   // Pour plus de 2 chiffres, on formate MM/YY
   const month = parseInt(digits.slice(0, 2), 10);
   if (month === 0) return "01";
   if (month > 12) return "12";
   return digits.slice(0, 2) + "/" + digits.slice(2, 4);
};
