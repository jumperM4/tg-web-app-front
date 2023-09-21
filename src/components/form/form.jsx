import { useEffect, useState } from "react";
import "./form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState();
  const [street, setStreet] = useState();
  const [subject, setSubject] = useState();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить даннные",
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
    // eslint-disable-next-line
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите Ваши данные:</h3>
      <input
        type="text"
        placeholder={"country"}
        className={"input"}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type="text"
        placeholder={"street"}
        className={"input"}
        value={street}
        onChange={onChangeStreet}
      />
      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"physical"}>Физ. лицо</option>
        <option value={"legal"}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;