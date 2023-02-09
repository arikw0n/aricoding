const axios = require("axios"); 

exports.handler = async (event) => {
    // TODO implement

    try {
        const result = await axios.post("https://discordapp.com/api/webhooks/1055472026518814832/xrGri3ldEswT7n8gMkoiwyEN7Gpoi-10EQAW9gL3xQoQqLcGCKXq6eSwv2_Gdg16iPDk", {
            "content":"유후~ 좋은 아침! \n\ 당장 입실 처리 하고 스트레칭 하자! \n\ https://ifh.cc/g/DOGwJ3.png https://ibb.co/FmFrdMt"
        });
        console.info("디스코드 웹훅 성공");
    }
    catch (err) {
        console.err("디스코드 웹훅 실패", err);
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
}; 
