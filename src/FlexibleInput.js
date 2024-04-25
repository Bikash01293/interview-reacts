import React from 'react'

const FlexibleInput = ({
    inputType,
    inputStyle,
    inputTitle,
    required,
    disable,
    customChangeFuntion,
    holder,
    labelStyle,
    errorMessage,
    error,
    maxLength,
    minLength,
    options,
    value,
    currency,
    pattern,
}) => {
    const handleChange = (e) => {
        // if(customChangeFunction) {
            customChangeFuntion(e.target.value);
        // }
    }


const renderInput = () => {
    switch (inputType) {
        case 'select':
            return(
                <select
                    style={inputStyle}
                    required={required}
                    disabled={disable}
                    onChange={handleChange}
                    value={value}
                >
                    {options.map((option) => (
                        <option 
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        case 'currency':
            return(
                <input 
                    type='text'
                    style={inputStyle}
                    title={inputTitle}
                    required={required}
                    disabled={disable}
                    onChange={handleChange}
                    placeholder={holder}
                    value={currency ? formatCurrency(value) : value}
                    pattern={pattern}
                />
            );
        default:
            return (
                <input 
                    type={inputType}
                    style={inputStyle}
                    title={inputTitle}
                    required={required}
                    disabled={disable}
                    onChange={handleChange}
                    placeholder={holder}
                    value={value}
                    pattern={pattern}
                    maxLength={maxLength}
                    minLength={minLength}
                />

            );
    }
};
const formatCurrency = (value) => {
    return `$${parseFloat(value).toFixed(2)}`;
};

return (
    <div>
        <label 
            style={labelStyle} 
        >
            {renderInput()}
            {error && 
                <span style={{color: 'red'}}>{errorMessage}</span>
            }
        </label>
    </div>
)
};
export default FlexibleInput;