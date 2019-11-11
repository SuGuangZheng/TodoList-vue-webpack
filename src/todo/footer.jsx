import '../assets/styles/footer.styl'

export default{
    data(){
        return{
            author:"Su Xin"
        }
    },
    render(){
        return(
            <div id="footer">
                <span>
                    <p>Live each day as if it was your last day</p>
                    <p>Tips:使用同一浏览器可云端保存清单</p>
                    <a
                    style="color:#ccc;font-weight:500" 
                    target="_blank"
                    href="http://152.136.156.229/weather/">
                        张爽专用查天气</a>
                    </span>
                <br/>
                <span>Written by {this.author}</span>
            </div>
        )
    }
}