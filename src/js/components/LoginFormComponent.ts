import throwableFunctionHandler from '../utils/throwableFunctionHandler';
import router from '../routes';
import { PATH_NAME } from '../constants';
import requestLogin from '../api/requestLogin';

class LoginFormComponent {
  parentElement: HTMLElement;
  noticeStateChanged: Function;
  $loginInputSection: HTMLElement;
  $loginForm: HTMLElement;
  $registerLink: HTMLElement;
  $mainContents: HTMLElement;

  constructor(parentElement: HTMLElement, noticeStateChanged: Function) {
    this.parentElement = parentElement;
    this.noticeStateChanged = noticeStateChanged;
  }

  private bindEventAndElement = () => {
    this.$loginInputSection = this.parentElement.querySelector('#login-input-container');
    this.$loginForm = document.querySelector('#login-form');
    this.$registerLink = document.querySelector('#register-link');
    this.$mainContents = document.querySelector('.main-contents');

    this.$loginForm.addEventListener('submit', this.onSubmitLogin);
    this.$registerLink.addEventListener('click', this.onClickRegister);
  };

  private onSubmitLogin = async (e: SubmitEvent) => {
    e.preventDefault();

    const accountData = {
      email: (<HTMLInputElement>this.$loginForm.querySelector('#email-input')).value,
      password: (<HTMLInputElement>this.$loginForm.querySelector('#password-input')).value,
    };

    if (await throwableFunctionHandler(() => requestLogin(accountData))) {
      // this.noticeStateChanged();
    }
  };

  private onClickRegister = (e: Event) => {
    e.preventDefault();
    router.go(PATH_NAME.REGISTER);
  };

  refreshComponent = () => {};

  render = () => {
    this.parentElement.insertAdjacentHTML('beforeend', this.template());
    this.bindEventAndElement();
    this.$mainContents.replaceChildren();
  };

  template = () => `<h1>로그인</h1>
    <form id="login-form" class="multiple-input-form">
      <label for="email-input">이메일</label>
      <input type="email" id="email-input" placeholder="woowacourse@gmail.com" required />
      <label for="password-input">비밀번호</label>
      <input type="password" id="password-input" placeholder="비밀번호를 입력해주세요" required />
      <input type="submit" id="login-button" class="submit-button" value="확인" />
      <p>아직 회원이 아니신가요? <a href='#' id="register-link">회원가입</a></p>
    </form>`;
}

export default LoginFormComponent;
