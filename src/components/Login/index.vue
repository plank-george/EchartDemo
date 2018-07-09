<template>
  <div class="jinmao_login">
    <div class='bg ' :style='urlbg'>
      <el-container>
        <el-header class="header" height="84">
          <div class="logo"><img src="http://www.chinajinmao.cn/portals/73/Logo.png"></div>
        </el-header>
        <el-main>
          <div class="w1130">
            <el-form :model="ruleForm2" label-position="top" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="login-box">
              <h2>欢迎来到EchartDemo系统</h2>
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm2.username" @keyup.enter.native="submitForm('ruleForm2')" placeholder="请输入用户名" auto-complete="off" ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" @keyup.enter.native="submitForm('ruleForm2')" placeholder="请输入用户密码" auto-complete="off"></el-input>
              </el-form-item>
              <el-button type="primary" class="login-btn" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<style lang='less'>
.bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: 0px;
    padding: 0px;
    overflow-y: hidden;
  }
.jinmao_login {
  width: 100%;
  height: 100%;
  .w1130 {
    width:1200px;
    margin: 0 auto;
  }

  .login-box {
    width: 340px;
    height: 450px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, .9);
    float: right;
    position: relative;
    margin-top: 230px;
    padding: 0 30px;
  }

  .login-box h2 {
    font-weight: normal;
    padding: 40px 0px;
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .header {
    width: 100%;
    height: 60px;
    position: relative;
    z-index: 9999;
    background: #fff;
    padding: 0;
    box-shadow: 0 10px 24px 0 rgba(135,135,135,.1);
    .logo {
    width: 15%;
    height: 60px;
    float: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    img{
      width: 180px;
      margin: auto;
      float: left;
      padding-top: 5px;

    }
  }
}
  .el-form-item__label {
    line-height: 0px;
    margin: 10px 0px;
  }
  .login-btn {
    &:hover,
     :focus {
      background: #04428d;
      border-color: #04428d;
    }
    width: 100%;
    margin-top: 30px;
    background: #04428d;
    border-color: #04428d;
  }
}
/*@media screen and (max-width: 1366px) {
    .jinmao_login{
      .login-box{
        margin-top: 100px;
      }
    }
}*/
@media screen and (max-width: 1440px) {
    .jinmao_login{
      .login-box{
        margin-top: 65px;
      }
    }
}
</style>
<script>
import bg from '@/images/bg.jpg'
import listservice from '../../services/dataservice'

export default {
  data () {
    return {
      urlbg: {
        background: 'url(' + bg + ') no-repeat center',
        'background-size': 'cover'
      },
      ruleForm2: {
        username: '',
        pass: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      UserInfo: {
        BusinessUnitId: '',
        OrganizationId: '',
        UserId: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var username = this.ruleForm2.username
          var password = this.ruleForm2.pass
          this.Login(username, password)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async Login (username, password) {
      var httpResult = await listservice.dataRouter('Login', {
        userName: username,
        password: password
      })
      if (httpResult.status === 200 && httpResult.data.res === 'success') {
        this.UserInfo = JSON.parse(httpResult.data.resData)
        this.$cookies.set('UserId', this.UserInfo.UserId, '1d')
        var httpResultUser = await listservice.dataRouter('SingleGet', {
          uri: 'systemusers(' + this.UserInfo.UserId + ')?$select=fullname'
        })
        this.$cookies.set('UserName', JSON.parse(httpResultUser.data.resData).fullname, '1d')

        this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/home')
      } else {
        alert('用户名和密码不匹配')
      }
    }
  }
}

</script>
