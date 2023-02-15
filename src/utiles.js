import moment from "moment/moment"

export const analyze=(text)=>{
    if(text.includes('hi')||text.includes('hai')||text.includes('hello'))
    return 'Hi ,how can i help you?'
    else if(text.includes('number')||text.includes('phone member')||text.includes('contec'))
    return "call this number this company number : 044-9876544321"
    else if(text.includes('location'))
    return "call this number : 044-9876544321"
    else if(text.includes('amount transcstion'))
    return "pay on cash on devliry"
    else if(text.includes('like this pet')||text.includes('order the pet'))
    return "call this number your product order : 044-9876544321"
    else if(text.includes('ok')||text.includes('thanks'))
    return "welcome any time wating for message"

 return "i can you rephrasw the message"   
}