import React from "react";
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';
class Home extends React.Component {
    state = {
gender:"",
age:"",
religion:"",
language:""
    }
    render() {
        return (<div className="container col-12">
            <div className="div1">
                <div className="row1">
                    <div className="col-6" id="home_logo"></div><div className="col-6" id="loginhelp"><a href="" id="login">login</a><HelpOutlineIcon /><a href="" id="help">help</a></div>
                </div>
                <div className="text"><h1 className="textpart">We bring people together <br></br>love unites them</h1></div>
                <div className="sel">
                    <div className="row"><div className="a col-2">
                        <InputLabel id="label">I'm looking for</InputLabel>
                        <Select labelId="label" id="select" value="">
                            <option className="menu" className="menu" value="women" >Women</option>
                            <option className="menu" value="men">Men</option>
                        </Select>
                    </div>
                        <div className="a col-2"> <InputLabel id="label">Aged</InputLabel>
                            <Select labelId="label" id="select" value="">
                                <option className="menu" value="19">19</option>
                                <option className="menu" value="20">20</option>
                                <option className="menu" value="19">21</option>
                                <option className="menu" value="20">22</option><option className="menu" value="19">23</option >
                                <option className="menu" value="20">24</option ><option className="menu" value="19">25</option >
                                <option className="menu" value="20">26</option><option className="menu" value="19">27</option >
                                <option className="menu" value="20">28</option >
                            </Select></div>

                        <div className="a col-2"> <InputLabel id="label">of religion</InputLabel>
                            <Select labelId="label" id="select" value="">
                                <option className="menu" value="Hindu">Hindu</option >
                                <option className="menu" value="Muslim">Muslim</option >
                                <option className="menu" value="Christian">Christian</option >
                                <option className="menu" value="Sikh">Sikh</option >
                                <option className="menu" value="Parsi">Parsi</option >
                                <option className="menu" value="Jain">Jain</option >
                                <option className="menu" value="Bhudhist">Bhudhish</option >
                                <option className="menu" value="Jewish">Jewish</option >
                                <option className="menu" value="No religion">No religion</option >
                                <option className="menu" value="Spiritual">Spiritual</option >
                                <option className="menu" value="Other">Other</option >
                            </Select></div>
                        <div className="a col-2"> <InputLabel id="label">and mother tonque</InputLabel>
                            <Select labelId="label" id="select" value="">
                                <optgroup label="frequent"> </optgroup>
                                <option className="menu" value="Bengali">Bengali</option>

                                <option className="menu" value="English">English</option >
                                <option className="menu" value="Gujarati">Gujarati</option >
                                <option className="menu" value="Hindi">Hindi</option >
                                <option className="menu" value="Kannada">Kannada</option>
                                <option className="menu" value="Marathi">Marathi</option >
                                <option className="menu" value="Marwari">Marwari</option>
                                <option className="menu" value="odia">Odia</option>

                                <optgroup label="more">    </optgroup>
                                <option className="menu" value="Punjabi">Punjabi</option >
                                <option className="menu" value="Tamil">Tamil</option >
                                <option className="menu" value="Telungu">Telungu</option>

                                <option className="menu" value="Urdu">Urdu</option >



                            </Select></div>
                        <div className="col-2"></div><div className="col-2" type="button" id="button">Let's Begin</div>

                    </div>
                </div>
            </div>
            <div className="div2">
                <div><h2>Find your Special Someone</h2></div>
                <div className="container"><div className="col-4 text-center"><a href="" className="sign-up"><span></span></a><div className="special_someone_wrap">
                    <a href="javascript:void(0);">Sign up</a>
                    <div>Register for free &amp; put up your Profile</div>
                </div></div>
                    <div className="col-4 text-center"> <a href="" className="interact"><span></span></a><div className="special_someone_wrap"><a href="">Connect</a><div>Select &amp; Connect with Matches you like</div></div></div>
                    <div className="col-4 text-center"> <a href="" className="connect"><span></span></a><div className="special_someone_wrap"><a href="">interact</a><div>Become a Premium Member &amp; Start a Conversation</div></div></div>
                </div>
            </div>
            <div className="div3">
                <div className="container"><div className="find_someone_head">Millions of Happy Stories</div>
                    <div id="myCarousel" className="carousel story_carousel slide hidden-xs">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active"><div className="story_row"><div className="success_story col-sm-4"><div className="story_item"><img src="https://img.shaadi.com/success-story/lSH62007627-3SH86532006-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Deepak Pandey &amp; Smrati Awasthi</div><p className="person_info">I got an interest in my Shadi.com profile from her. Then I got called by her family. Later on we noticed that we are from same hometown. Its love marriage arranged by Shadi.com. Thanks Shadi.com. Warm...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=11203" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img src="https://img.shaadi.com/success-story/0SH47880294-5SH72990468-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Chitresh &amp; Shweta</div><p className="person_info">In Today's time, it's almost impossible to find your soulmate who would love you like no one else in this world, who would be perfect for you, who would be the best in the whole World, who was made on...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32352" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img src="https://img.shaadi.com/success-story/SSH38161997-HSH35123504-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Prachi &amp; Tejraj</div><p className="person_info">We met and found our thoughts matched our end goals were same. He's calm and I am talkative, he keeps listening that's what I wanted N this is how it began. <a href="/shaadi-info/matrimonial-success-stories/wedding?id=32325" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div></div><div className="story_row"><div className="success_story col-sm-4"><div className="story_item"><img src="https://img.shaadi.com/success-story/zSH16791218-hSH90531714-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Saurabh &amp; Gunjan</div><p className="person_info">My parents were searching a guy for me since 5 years but couldn't get suitable match. They searched everywhere in UP/Delhi/NCR. Then they registered in Shaadi.com and started searching my match we rev...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=12407" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img src="https://img.shaadi.com/success-story/NSH96150218-RSH75103656-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Monika Dhabale &amp; Rahul Pikalmunde</div><p className="person_info">Out of all the people in the world Out of all the places Somehow, something brought The two of us together At the right place At the right time ..... It's on shadi.com thanks to all team. Before 3 yea...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=9005" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img src="https://img.shaadi.com/success-story/PSH36189286-dSH14082042-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Narender &amp; Ramanpreet</div><p className="person_info">Ours is an arranged marriage but I would not agree because I fell in love with her with every day passing. Since the day(i.e. 4th March 2015) Raman accepted my interest on Shaadi.com my life changed. ...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=14547" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div></div></div><div className="item"><div className="story_row"><div className="success_story col-sm-4"><div className="story_item"><img data-src="https://img.shaadi.com/success-story/sSH57231665-OSH36383733-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Siddharth &amp; Namrata</div><p className="person_info">Soulmate is not just a word for life partner, It's a absolute feeling. If someone founds one, that person is the luckiest in the whole world. I read this somewhere, but understood now. All the credit ...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32315" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img data-src="https://img.shaadi.com/success-story/PSH25685023-tSH04763657-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Shalini &amp; Arvind</div><p className="person_info">I have created my profile alomost in all matrimony site but as soon as I created primium account on Shaadi.com I found my match through shaadi.com. Than kyou Shaadi.com.<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32280" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img data-src="https://img.shaadi.com/success-story/dSH98554512-0SH90027726-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Padmakar &amp; Minakshi</div><p className="person_info">It was an amazing experience with this app. It took me long time to find my match but be aware from fake profiles. I recommend this app to others. All the best. Thanks to Shadi.com.<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32378" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div></div><div className="story_row"><div className="success_story col-sm-4"><div className="story_item"><img data-src="https://img.shaadi.com/success-story/wSH65851890-MSH56329488-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Amit &amp; Seema</div><p className="person_info">It was an overall satisfactory experience in Shaadi.com. I have finally found my life partner through this platform and happily married. Thank you.<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32283" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img data-src="https://img.shaadi.com/success-story/aSH93017670-HSH17834476-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Shruti &amp; Nikhil</div><p className="person_info">Yes we both met on Shaadi last year but somehow got disconnected. We again started to interact offline from this year May and since then it was no looking back. We met for the first time in October an...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32442" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div><div className="success_story col-sm-4"><div className="story_item"><img data-src="https://img.shaadi.com/success-story/nSH82708372-1SH15901823-big.jpg" alt=" "/><div className="story_detail"><div className="person_name">Paulami &amp; Subhankar</div><p className="person_info">So, i sent her request on 5th November and she accepted my request on 7th November. Immediately we started talking and we found out that we were from same school though we never saw each other in scho...<a href="/shaadi-info/matrimonial-success-stories/wedding?id=32300" target="_blank">Read more<span className="ico_arrow"></span></a></p></div></div></div></div></div>		    </div>

                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                    <span className="icon-prev"></span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                    <span className="icon-next"></span>
                                </a>
                            </div>
                            </div>
                            
                            </div>
                                <div className="div4"></div>
                                <div className="div5"></div>
                                <div className="div6"></div>
                                <div className="div7"></div>
                            </div>

        )
    }
}
export default Home;
