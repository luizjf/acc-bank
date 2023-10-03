

export const formFields = [
    { label: "Name", type: "text", name: "name" },
    { label: "Lastname", type: "text", name: "lastname" },
    { label: "E-mail", type: "email", name: "email" },
    {label: "Address", type: "text", name: "address"},
    { 
        label: "Country",
        type: "select",
        name: "country",
        options: [
            { label: "Select a country", value: "" },
            { label: "United States", value: "usa" },
            { label: "Canada", value: "canada" },
            { label: "Brazil", value: "br" }
        ]
    },
    {label: "ZIP Code", type: "text",name: "zipCode"},
    {label: "Phone Number", type: "text", name: "phoneNumber"},
    {label: "Total gross annual income", type: "text", name: "income"},
    { 
        label: "Primary source of income",
        type: "select",
        name: "sourceOfIncome",
        options: [
            { label: "Select", value: "" },
            { label: "Job", value: "job" },
            { label: "Heritage", value: "heritage" },
            { label: "Investments", value: "investments" },
            { label: "Retirement", value: "retirement" },
            { label: "Social Security", value: "socialSecurity" },
            { label: "Other investments", value: "others" },
        ]
    },
    { 
        label: "Account Type",
        type: "select",
        name: "account",
        options: [
            { label: "Select", value: "" },
            { label: "Credit", value: "credit" },
            { label: "For investments", value: "investments" },
            { label: "For points", value: "points" },
            { label: "Others", value: "others" },
        ]
    },

];