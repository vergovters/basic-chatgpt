const chatHistory = []
const sendMessage = (event) => {
    event.preventDefault()
    const {input} = Object.fromEntries(new FormData(event.target))

    chatHistory.push({content: input, role: "user"})

}

const getData = async (data) => {
    const data = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
            "Authoarization": `Bearer ${code}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "human helper"
                },
                {
                    "role": "user",
                    "content": "human helper"
                },
                ...input
            ]
        })
    })
}