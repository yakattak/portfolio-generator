const profileDateArgs = process.argv.slice(2, process.argv.length);
console.log(profileDateArgs);



const printProfileData = (profileDataArr) => {
    for (let i=0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    profileDataArr.forEach((profileItem)=> console.log(profileItem));
};

///make the same but written differently



printProfileData(profileDateArgs);