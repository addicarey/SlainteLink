
/* patient account password AC*/
function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "patient") {
alert('Access Granted - Welcome');
location.href="patientacc.html"
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.',' ');
}
if (pass1.toLowerCase()!="patient" & testV ==3)
history.go(-1);
return " ";
}




/* doctor account password AC*/
function passWord1() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "doctor") {
alert('Access Granted - Welcome');
location.href="doctoracc.html"
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="doctor" & testV ==3)
history.go(-1);
return " ";
}

/* to connect using MetaMask  AC */
      const ABI = [
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "age",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "phone",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bmi",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "height",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "email",
              type: "string",
            },
            {
              internalType: "string",
              name: "dob",
              type: "string",
            },
          ],
          name: "storePerson",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllPersons",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "age",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "phone",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "bmi",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "bp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "height",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "dob",
                  type: "string",
                },
              ],
              internalType: "struct Form.Person[]",
              name: "reqPersons",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "getPersonById",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "age",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "phone",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "bmi",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "bp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "height",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "dob",
                  type: "string",
                },
              ],
              internalType: "struct Form.Person",
              name: "reqPerson",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "Persons",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "age",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "phone",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bmi",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "height",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "email",
              type: "string",
            },
            {
              internalType: "string",
              name: "dob",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];

/* get infomation to display on form page AC*/
      const CONTRACT_ADDRESS = "0xcbdf35018a611cfbac0b2793db16dd2c896829fb";

      const chainInfo = document.querySelector(".chainInfo");
      const accountInfo = document.querySelector(".accountInfo");
      const balInfo = document.querySelector(".balInfo");
      const txInfo = document.querySelector(".txInfo");

      const connectionStatus = document.querySelector(".connectionStatus");
      const form = document.querySelector(".form");

      const name = document.querySelector(".name");
      const age = document.querySelector(".age");
      const phone = document.querySelector(".phone");
      const bmi = document.querySelector(".bmi");
      const bp = document.querySelector(".bp");
      const height = document.querySelector(".height");
      const email = document.querySelector(".email");
      const dob = document.querySelector(".dob");
      
/* display table with info AC */

      const table = document.querySelector(".table");
      const tableRow = document.querySelector(".tableRow");

      const main = document.querySelector(".main");

      form.addEventListener("submit", submitForm);

      async function showData() {
        const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

        const response = await contract.methods.getAllPersons().call();

        console.log(response);

        table.innerHTML = `<tr class="tableRow">
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
             <th>BMI</th>
             <th>BP</th>
             <th>Height</th>
             <th>Email</th>
             <th>Date Of Birth</th>
          </tr>`;

        for (let i = response.length-1; i >= 0; i--) {
          document.querySelector(".tableRow").insertAdjacentHTML(
            "afterend",
            `<tr>
          <td>${response[i].id}</td>
           <td>${response[i].name}</td>
            <td>${response[i].age}</td>
           <td>${response[i].phone}</td>
           <td>${response[i].bmi}</td>
            <td>${response[i].bp}</td>
            <td>${response[i].height}</td>
            <td>${response[i].email}</td>
            <td>${response[i].dob}</td>
        </tr>`
          );
        }
      }

      async function submitForm(e) {
        e.preventDefault();

/* to check if wallet is connected  AC*/
        if (connectionStatus.value != "Disconnect Wallet") return;

        const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        
/* get values from the inputs AC*/
        const nameData = name.value;
        const ageData = parseInt(age.value);
        const phoneData = parseInt(phone.value);
        const bmiData = parseInt(bmi.value);
        const bpData = parseInt(bp.value);
        const heightData = parseInt(height.value);
        const emailData = email.value;
        const dobData = dob.value;

        txInfo.textContent = "Please wait for transaction to process...";

        const response = await contract.methods
          .storePerson(nameData, ageData, phoneData, bmiData, bpData, heightData, emailData, dobData)
          .send({ from: accountInfo.textContent.split(": ")[1] });

        console.log(response);
/* display whether transaction was sucessful or unsucessful AC*/
        if (response.status) {
          txInfo.textContent = `Transaction with hash ${response.transactionHash} was success! Refresh to see the new entry`;
        } else {
          txInfo.textContent = `Transaction has failed!`;
        }

        setTimeout(() => (txInfo.textContent = ""), 10000);
      }

      async function connect() {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          window.web3 = new Web3(window.ethereum);

          const account = web3.eth.accounts;
/*Get the current MetaMask selected/active wallet AC*/
          const walletAddress = account.givenProvider.selectedAddress;
          
/* display account information on form page AC*/
          accountInfo.textContent = "Wallet: " + walletAddress;

          web3.eth.getChainId().then((id) => {
            if ((id = 5)) {
              chainInfo.textContent = "Connected to Goerli";

              web3.eth
                .getBalance(walletAddress)
                .then(
                  (bal) =>
                    (balInfo.textContent =
                      "Balance: " + web3.utils.fromWei(bal))
                );
            } else {
              chainInfo.textContent = "Please change network to Goerli";
            }
          });

/* detect Metamask account change AC*/
          window.ethereum.on("accountsChanged", function (accounts) {
            console.log("accountsChanges", accounts);
            accountInfo.textContent = "Wallet: " + accounts[0];
            web3.eth
              .getBalance(accounts[0])
              .then(
                (bal) =>
                  (balInfo.textContent = "Balance: " + web3.utils.fromWei(bal))
              );
          });

/* detect Network account change AC */
          window.ethereum.on("chainChanged", function (networkId) {
            console.log("chainChanged", networkId);
            
            /* 0x5 Goerli Network AC */
            if ((networkId = "0x5")) {
              chainInfo.textContent = "Connected to Goerli";
              web3.eth
                .getBalance(walletAddress)
                .then(
                  (bal) =>
                    (balInfo.textContent =
                      "Balance: " + web3.utils.fromWei(bal))
                );
            } else {
              chainInfo.textContent = "Please change network to Goerli";
            }
          });

          connectionStatus.value = "Disconnect Wallet";

          main.style.opacity = 1;
        } else {
          console.log("No wallet");
        }
      }

