import React, {useState} from 'react';
import {IoMdClipboard} from "react-icons/io";
import {useForm} from "../customHook/useForm";
import {getRandomChar, getRandomSymbol} from "../utils/Utils";
import toast from "react-hot-toast";
import {icons} from "react-icons";

function Form(props) {

    const [values, setValues] = useForm({
        length: 7,
        capital: true,
        small: true,
        number: false,
        symbol: false,
    })

    const [result, setResult] = useState("");

    const fieldsArray = [
        {
            field: values.capital,
            getChar: () => getRandomChar(65, 90)
        },
        {
            field: values.small,
            getChar: () => getRandomChar(97, 122)
        },
        {
            field: values.number,
            getChar: () => getRandomChar(48, 57)
        },
        {
            field: values.symbol,
            getChar: () => getRandomSymbol()
        },
    ];

    // console.table(fieldsArray);

    //Handling submit event:

    const handleSubmit = (e) => {
        e.preventDefault();

        let generatedPassword = "";

        //filtering only the checked fields:
        const checkedFields = fieldsArray.filter(({field}) => field)

        for (let i = 0; i < values.length; i++) {
            let index = Math.floor(Math.random() * checkedFields.length);
            //we add '?' char to prevent the case of none checkedFields.
            let letter = checkedFields[index]?.getChar();

            //building the random password
            if(letter)
            {
                generatedPassword += letter;
            }
        }
        if (generatedPassword)
        {
            setResult(generatedPassword);
        }
        else {
            toast.error("Select al least one option to generate a password")
        }

    }

    //Handling the click on clip-board icon

    //the .writeText is returning a promise. so we need to make the function async.

    const handleClipBoard = async () => {
        console.log("clicked")
        if(result)
        {
            await navigator.clipboard.writeText(result);
            //using react-hot-toast
            toast.success("Copied to your clipboard.", {
                icon: "🔥"
            })
        }
        else {
            toast.error("Nothing here to copy")
        }
    }

    return (
        <form id="pg-form" className="form" onSubmit={handleSubmit}>

            <div className="result">
                <input
                    className="input"
                    type="text"
                    placeholder="Minimum length of password is 7 characters"
                    value={result}
                    readOnly={true}/>
                <div className="ic-clip-board" onClick={handleClipBoard}>
                    <IoMdClipboard size={35}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Length of password</label>
                <input
                    className="input-number"
                    type="number"
                    name="length"
                    value={values.length}
                    onChange={setValues}
                       min={7} max={17}/>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Capital</label>
                <input
                    className="input-checkbox"
                    type="checkbox"
                    name="capital"
                    onChange={setValues}
                    checked={values.capital}
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Small</label>
                <input
                    className="input-checkbox"
                    type="checkbox"
                    name="small"
                    onChange={setValues}
                    checked={values.small}
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Number</label>
                <input
                    className="input-checkbox"
                    type="checkbox"
                    name="number"
                    onChange={setValues}
                    checked={values.number}
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Symbol</label>
                <input
                    className="input-checkbox"
                    type="checkbox"
                    name="symbol"
                    onChange={setValues}
                    checked={values.symbol}
                />
            </div>

            <button className="btn" type="submit">Generate</button>

        </form>
    );
}

export default Form;