import {useState} from "react";

export function useForm(initials) {

    const [values, setValues] = useState(initials);

    return [
        values,
        (event) => {
            setValues({
                ...values,
                [event.target.name]: event.target.type === "checkbox"
                                     ? event.target.checked : event.target.value,
            })
        }
    ]

}