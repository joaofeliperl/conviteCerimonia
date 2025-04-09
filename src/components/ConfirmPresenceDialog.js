import React, { useState } from 'react';
import './ConfirmPresenceDialog.css';

function ConfirmPresenceDialog({ onClose }) {
    const [attendance, setAttendance] = useState("vou");
    const [nameInput, setNameInput] = useState("");
    const [namesList, setNamesList] = useState([]);


    const handleAttendanceChange = (value) => {
        setAttendance(value);
        if (value === "não vou") {
            setNamesList([]);
            setNameInput("");
        }
    };

    const handleAddName = () => {
        if (nameInput.trim() !== "") {
            setNamesList([...namesList, nameInput.trim()]);
            setNameInput("");
        }
    };

    const handleRemoveName = (index) => {
        const newList = namesList.filter((_, i) => i !== index);
        setNamesList(newList);
    };

    const handleSend = () => {
        const message = `Olá, gostaria de informar que ${attendance === "vou" ? "vou" : "não vou"} para o casamento🎉🎉\n\nLista de nomes:\n${namesList.join(", ")}`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/92995167293?text=${encodedMessage}`;
        window.open(url, "_blank");
        onClose();
        window.location.href = "/conviteCasamento#home";
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Confirmação de Presença</h2>
                <div className="attendance-options">
                    <label>
                        <input
                            type="radio"
                            value="vou"
                            checked={attendance === "vou"}
                            onChange={() => handleAttendanceChange("vou")}
                        />
                        Vou
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="não vou"
                            checked={attendance === "não vou"}
                            onChange={() => handleAttendanceChange("não vou")}
                        />
                        Não vou
                    </label>
                </div>
                {/* Renderiza a área de adicionar nomes apenas se "vou" estiver selecionado */}
                {attendance === "vou" && (
                    <div className="names-list">
                        <h3>Adicionar Nomes</h3>
                        <div className="add-name">
                            <input
                                type="text"
                                placeholder="Digite um nome"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                            <button onClick={handleAddName}>Adicionar</button>
                        </div>
                        {namesList.length > 0 && (
                            <ul>
                                {namesList.map((name, index) => (
                                    <li key={index}>
                                        {name} <button onClick={() => handleRemoveName(index)}>Remover</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                <div className="modal-actions">
                    <button onClick={onClose} className="close-button">Fechar</button>
                    <button
                        onClick={handleSend}
                        className="send-button"
                        disabled={attendance === "vou" && namesList.length === 0}
                    >
                        Confirmar Presença
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPresenceDialog;
