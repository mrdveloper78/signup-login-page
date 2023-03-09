

const TextInput = ({title ,holder, err, validation }) => {
    return (
        <div>
            <label className='text-[23px] font-semibold text-lableColor'>
                {title}
            </label>
            <br />
            <input
                type={"text"}
                className={`normal-inp ${err ? 'error-inp' : ''}`}
                placeholder={holder}
                {...validation} />

        </div>
    )
};

const EmailInput = ({title ,holder, err, validation }) => {
    return (
        <div>
            <label className='text-[23px] font-semibold text-lableColor'>
                {title}
            </label>
            <br />
            <input
                type={"email"}
                className={`normal-inp ${err ? 'error-inp' : ''}`}
                placeholder={holder}
                {...validation} />

        </div>
    )
};


const PasswordInput = ({title ,holder, err, validation }) => {
    return (
        <div>
            <label className='text-[23px] font-semibold text-lableColor'>
                {title}
            </label>
            <br />
            <input
                type={"password"}
                className={`normal-inp ${err ? 'error-inp' : ''}`}
                placeholder={holder}
                {...validation} />

        </div>
    )
};


export { TextInput, EmailInput, PasswordInput };