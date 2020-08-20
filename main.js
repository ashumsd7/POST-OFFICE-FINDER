new Vue({
  el: "#app",
  data() {
    return {
      url: "https://api.postalpincode.in/pincode/",
      myurl: "https://aat.netlify.app",
      inputPIN: "",
      result: "",
      postOfficeArray: [],
      noPostOffices: "",
      loading: false,
      verified: false,
      inputError: false,
      showForm:true,
      showResult:false,
      showRetry:false,
      showTagLine:true
    };
  },
 
  methods: {
    verifyPIN() {
        this.showTagLine=false;
        
      if (this.inputPIN.length == 6) {
        this.getPostOffices(this.inputPIN);
      }
      else
      {
        this.renderError();
        
      }
    },

    getPostOffices(pin) {
       
      this.inputError = false;
      this.loading = true;
      this.url = this.url + pin;
    
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          this.loading = false;
          this.showRetry=true;
          this.noPostOffices = data[0].Message;
          var tempPostOffice = data[0].PostOffice;
          for (let i in tempPostOffice) {
            // console.log(tempPostOffice[i]);
            this.postOfficeArray.push(tempPostOffice[i].Name);
            this.loading = false;
            this.showForm= false;
            this.showResult=true;
            this.showRetry=true;
          }
        });
    },
    renderError() {
      this.inputError = true;
    },
    reload(){
        window.location.reload();
    },
    githubClicked(){
        window.location.href = "https://github.com/ashumsd7";
    },
    quoraClicked() {
        window.location.href =
          "https://www.quora.com/profile/आशुतोष-आनन्द-तिवारी-Ashutosh-Anand-Tiwari";
      },
    twitterClicked() {
        window.location.href = "https://twitter.com/YourVueJS";
      },


  },
});
