import { useState } from "react";
import Select from "react-select";
import styles from '../admin/createBlog/Form.module.css';

const Categories = ({ setSelectedIndustry }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [customOption, setCustomOption] = useState("");

    const industryOptions = [
        { value: "Agriculture Industry", label: "Agriculture Industry" },
        { value: "Apparel Industry", label: "Apparel Industry" },
        { value: "Automotive Industry", label: "Automotive Industry" },
        { value: "Beverage Industry", label: "Beverage Industry" },
        { value: "Chemical Industry", label: "Chemical Industry" },
        { value: "Educational Institutes", label: "Educational Institutes" },
        { value: "Electrical Solar Industry", label: "Electrical Solar Industry" },
        { value: "Electronics Industry", label: "Electronics Industry" },
        { value: "FMCG Industry", label: "FMCG Industry" },
        { value: "Finance Industry", label: "Finance Industry" },
        { value: "Other", label: "Other" }
    ];

    const handleChange = (selected) => {
        setSelectedOption(selected);

        if (selected?.value === "Other") {
            setCustomOption("");
        } else {
            setSelectedIndustry(selected.value); // Pass selected value to parent
            setCustomOption("");
        }
    };

    return (
        <div className={styles.section}>
            <label className={styles.label}>Select Category:</label>
            <Select
                options={industryOptions}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Select Category..."
            />

            {selectedOption?.value === "Other" && (
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter custom industry"
                    value={customOption}
                    onChange={(e) => {
                        setCustomOption(e.target.value);
                        setSelectedIndustry(e.target.value);
                    }}
                />
            )}
        </div>
    );
};

export default Categories;