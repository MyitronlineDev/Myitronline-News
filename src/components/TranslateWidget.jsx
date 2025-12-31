import { useEffect, useState } from "react";
import { getTranslatedText } from "./utility/translationHelper";

const LANGUAGES = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिन्दी" },
];

const TranslateWidget = () => {
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");
    const [selectedLang, setSelectedLang] = useState("en");
    const [loading, setLoading] = useState(false);


    const translatePage = async () => {
        if (selectedLang === currentLang) return;

        setLoading(true);

        const elements = Array.from(
            document.querySelectorAll("[data-translate]")
        );

        const originalTexts = elements.map((el) => {
            if (!el.dataset.original) {
                el.dataset.original = el.innerText;
            }
            return el.dataset.original;
        });

        const translatedTexts = await Promise.all(
            originalTexts.map((text) =>
                getTranslatedText(text, selectedLang)
            )
        );

        elements.forEach((el, i) => {
            el.innerText = translatedTexts[i];
        });

        setCurrentLang(selectedLang);
        localStorage.setItem("lang", selectedLang);
        setLoading(false);
        setOpen(false);
    };

    useEffect(() => {
        if (currentLang === "en") {
            document
                .querySelectorAll("[data-original]")
                .forEach((el) => {
                    el.innerText = el.dataset.original;
                });
        }
    }, [currentLang]);

    return (
        <>
            <button style={styles.button} onClick={() => setOpen(true)}>
                🌐 {currentLang.toUpperCase()}
            </button>

            {open && (
                <div style={styles.overlay} onClick={() => setOpen(false)}>
                    <div
                        style={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Translate Content</h3>

                        {LANGUAGES.map((lang) => (
                            <div
                                key={lang.code}
                                style={{
                                    padding: 10,
                                    cursor: "pointer",
                                    background:
                                        selectedLang === lang.code
                                            ? "#e3f2fd"
                                            : "#fff",
                                }}
                                onClick={() => setSelectedLang(lang.code)}
                            >
                                {lang.name} ({lang.native})
                            </div>
                        ))}

                        <button
                            onClick={translatePage}
                            disabled={loading}
                            style={styles.action}
                        >
                            {loading ? "Translating..." : "Apply"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
const styles = {
    button: {
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: "12px 18px",
        borderRadius: 30,
        background: "#2563eb",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        zIndex: 9999,
        fontSize: 14,
    },
    overlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
    },
    modal: {
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        width: 300,
        boxShadow: "0 10px 25px rgba(0,0,0,.15)",
    },
    action: {
        marginTop: 15,
        width: "100%",
        padding: 10,
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
    },
};


export default TranslateWidget;
