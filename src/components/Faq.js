import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Faq extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Поширенi запитання</h1>

          <h3>Як зареєструватися в кампусі?</h3>

          Якщо ви офіційно працевлаштваний викладач і з моменту подачі ваших документів до відділу кадрів пройшло більше двох тижнів - зверніться на нашу електронну пошту<br />
          <br />
          Якщо ви студент або аспірант - зверніться до вашого академкуратора.<br />

          <h3>Як відновити пароль?</h3>
          Для відновлення паролю скористайтесь кнопкою на панелі авторизації. Якщо ви не користувалися раніше кампусом - зверніться до вашого куратора.

        </div>
      </div>
    );
  }
}

export default Faq