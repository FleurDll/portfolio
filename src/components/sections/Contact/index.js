import React, { useState } from 'react';
import { init } from 'emailjs-com';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import { ContactContainer, ContactTitle, ContactButton, ContactInput, ContactNameMail, ContactInputMessage, ContactPresentation, ContactForm } from "./ContactElements";

const override = css`
  display: block;
  margin: 10px auto;
  border-color: "#fffa64";
`;

const Contact = ({ emailJSKey, language }) => {
    init(emailJSKey.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let [loading, setLoading] = useState(false);

    const changeClass = (classToAdd) => {
        document.getElementById("form").classList.add(classToAdd);

        setTimeout(() => {
            document.getElementById("form").classList.remove(classToAdd);
        }, 3000);
    };

    const isEmail = () => {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //verify email

        if (email.match(regex)) {
            return true;
        } else {
            return false;
        }
    };

    const hangleSubmit = (e) => {
        e.preventDefault();

        if (name && isEmail() && message) {
            sendFeedback(emailJSKey.template, {
                name,
                email,
                message,
            });
            setLoading(true);
        } else {
            setLoading(false);
            changeClass("error");
        }
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send(emailJSKey.service, templateId, variables)
            .then((res) => {
                setLoading(false);
                changeClass("success");
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) => {
                    setLoading(false);
                    changeClass("error");
                }
            );
    };

    return (
        <ContactContainer id="contact">
            <ContactPresentation>Contact</ContactPresentation>
            <ContactTitle>{language ? "Let's get in touch!" : "Contactez moi !"}</ContactTitle>
            <ContactForm>
                <div id="form" className="ui form big">
                    <ContactNameMail>
                        <div className="fields">
                            <div className="field" >
                                <ContactInput
                                    type="text"
                                    placeholder={language ? "Name" : "Nom"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <ContactInput
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </ContactNameMail>
                    <ContactInputMessage>
                        <div className="field ">
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </ContactInputMessage>
                    {!loading ?
                        <ContactButton onClick={hangleSubmit}>
                            {language ? "Send" : "Envoyer"}
                        </ContactButton>
                        :
                        <BounceLoader color="#fffa64" loading={loading} css={override} size={50} />
                    }
                    <div className="ui success message small">
                        <div className="header">{language ? "Message send!" : "Message envoyé !"}</div>
                        <p>{language ? "You'll soon receive a response." : "Je vous repondrai au plus vite."}</p>
                    </div>

                    <div className="ui error message small">
                        <div className="header">{language ? "Please fill in all the fields" : "Merci de remplir tous les champs"}</div>
                    </div>
                </div>
            </ContactForm>
        </ContactContainer>
    );
};

export default Contact;
