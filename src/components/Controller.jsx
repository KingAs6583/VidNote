import { useState } from "react";

const Controller = ({ videoLink, onDropDownSelect, onSave, setLang, selectedLang, isChecked, onToggle }) => {

    const [selectedEditor, setSelectedEditor] = useState('Choose Editor');

    const handleDropdownClick = (value) => {
        setSelectedEditor(value);
        onDropDownSelect(value);
    };
    const cleanUrl = (url) => {
        const newUrl = url.replace(url.includes("videolink") ? new RegExp("\?videolink" + ".*") : "", "");
        return newUrl;
    }
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: "Web Site Link", text: "Your share onlu video not notes",
                url: cleanUrl(window.location.href).concat("?videolink=" + videoLink),
            })
                .then(() => console.log('Share successful'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert("Web Share API not supported");
        }
    }
    // List of languages Monaco supports
    const languages = [
        'javascript', 'typescript', 'html', 'css', 'json', 'python', 'go', 'java',
        'csharp', 'cpp', 'ruby', 'php', 'sql', 'markdown', 'yaml', 'dockerfile',
        'bash', 'swift', 'objective-c', 'rust', 'kotlin', 'lua', 'haskell'
    ];

    return (
        <div className="container-md my-2 controller">
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
            <button style={{ border: "1px solid black", borderRadius: "5px" }} onClick={handleShare}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16" style={{ margin: "5px" }}>
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg> share
            </button>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                    checked={isChecked} onChange={onToggle} />
                <label className="form-check-label" for="flexSwitchCheckDefault">{isChecked ? "Dark Mode" : "Light Mode"}</label>
            </div>

        </div>
    )
}

export default Controller;