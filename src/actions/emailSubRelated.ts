type FormType = {
    firstName: string;
    lastName?: string;
    email: string;
    message: string;
  };

export async function saySomething(data: FormType) {
    // const response = await fetch("https://api.example.com", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });

        alert("we will get back to you soon");
    }
