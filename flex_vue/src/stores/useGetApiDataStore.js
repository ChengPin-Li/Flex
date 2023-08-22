import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';

//第一個參數getApiData指的是整個store的id
//官方建議pinia function 為use開頭
export const useGetApiDataStore = defineStore('getApiData', {
  state: () => {
    return {
      loginSuccess: ref(false),
      memberInfo: {
        username: null,
        memberId: null,
      },
    };
  },
  actions: {
    setLoginSuccess(value) {
      this.loginSuccess = value;
    },
    handleLogout() {
      this.memberInfo = null;
      this.loginSuccess = false;
      Cookies.remove('user_cookie');

      const baseAddress = 'https://localhost:7183';
      const uri = `${baseAddress}/api/Users/Logout`;
      axios
        .delete(uri)
        .then((res) => {
          console.log('登出成功', res);
        })
        .catch((err) => {
          console.error('登出失敗', err);
        });

      //router.push({ path: '/login' });
      window.location.href = '/login';
    },
    setMemberUsername(memberInfo) {
      this.memberInfo = memberInfo;
    },
  },
  getters: {
    getMemberId: (state) => state.memberInfo.memberId,
  },
});
