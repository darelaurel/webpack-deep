export default class ParseData
{
    constructor(title)
    {
        this.currentTitle=title
    }

    setRandomUserId5()
    {
        return Math.floor(Math.random()*9)
    }
    setRandomBody()
    {
        return `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vitae ducimus delectus dignissimos illum ad nesciunt? Officia consectetur tenetur alias praesentium accusamus adipisci. Ut hic illo facilis aperiam accusamus illum.`
    }
    parseTitle()
    {
        return /[a-zA-Z0-9]+/.test(this.currentTitle)
    }
    verifyTitle(){
       return this.parseTitle ? 'Authorized' : 'Unauthorized'
    }
}