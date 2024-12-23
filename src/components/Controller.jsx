import { useState } from "react";

const Controller = ({ videoLink, onDropDownSelect, onSave, setLang, selectedLang, isChecked, onToggle }) => {

    const [selectedEditor, setSelectedEditor] = useState('Choose Editor');

    const handleDropdownClick = (value) => {
        setSelectedEditor(value);
        onDropDownSelect(value);
    };

    // List of languages Monaco supports
    const languages = [
        'javascript', 'typescript', 'html', 'css', 'json', 'python', 'go', 'java',
        'csharp', 'cpp', 'ruby', 'php', 'sql', 'markdown', 'yaml', 'dockerfile',
        'bash', 'swift', 'objective-c', 'rust', 'kotlin', 'lua', 'haskell'
    ];

    return (
        <div className="container-md my-2" style={{ display: "flex", justifyContent: "space-between" }}>
            <a type="button" className="btn btn-primary btn-sm" href="https://www.youtube.com/" target="_blank" >Open Youtube</a>
            <a type="button" className="btn btn-secondary btn-sm" href={videoLink} target="_blank" >View Video in Youtube</a>

            <button type="button" className="btn btn-success btn-sm" onClick={onSave}>Save Note</button>

            <div className="btn-group">
                <button className="btn btn-info btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedEditor}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button"
                        onClick={() => handleDropdownClick('Normal')}>Normal</button></li>
                    <li><button className="dropdown-item" type="button"
                        onClick={() => handleDropdownClick('Code')}>Code</button></li>
                </ul>
            </div>

            {selectedEditor.toLowerCase() === "code" &&
                <div className="btn-group">
                    <button className="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedLang}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{
                        maxHeight: '200px',   // Set maximum height
                        overflowY: 'auto',    // Make it scrollable
                    }}>
                        {languages.map((lang) => (
                            <li><button className="dropdown-item" type="button"
                                key={lang} value={lang}
                                onClick={() => setLang(lang)}>
                                {lang.charAt(0).toUpperCase() + lang.slice(1)}
                            </button></li>
                        ))}
                    </ul>
                </div>
            }

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                    checked={isChecked} onChange={onToggle} />
                <label className="form-check-label" for="flexSwitchCheckDefault">{isChecked ? "Dark Mode" : "Light Mode"}</label>
            </div>

        </div>
    )
}

export default Controller;