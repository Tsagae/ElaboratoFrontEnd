import * as React from "react";
//import "./Arcade.css"

export default function Arcade() {
    return (
        <div>
            <div class="arcadeWrapper">
                <div class="arcade-container">
                    <div class="arcade-wall">
                        <div class="detail detail-1"></div>
                        <div class="detail detail-2"></div>
                        <div class="top">
                            <div class="block-1"></div>
                            <div class="block-2"></div>
                            <div class="block-3"></div>
                            <div class="block-4"></div>
                            <div class="block-5"></div>
                            <div class="block-6"></div>
                            <div class="block-7"></div>
                        </div>
                    </div>
                    <div class="arcade-mid">
                        <div class="top">
                            <div class="b1-cont">
                                <div class="border left"></div>
                                <div class="block-1"></div>
                                <div class="border right"></div>
                            </div>
                            <div class="block-2"></div>
                        </div>
                        <div class="screen">
                            <div class="pacman-container">
                                <div class="pacman">
                                </div>
                            </div>
                        </div>
                        <div class="mid">
                            <div class="block-1">
                                <div class="joystick"></div>
                                <div class="button yellow"></div>
                                <div class="button red"></div>
                            </div>
                            <div class="block-2">
                                <div class="speakers"></div>
                                <div class="coins"></div>
                            </div>
                            <div class="block-3"></div>
                        </div>
                        <div class="bottom">
                            <div class="block-1">
                                <div class="box-1">
                                    <div class="box-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="arcade-wall alt">
                        <div class="top">
                            <div class="block-1"></div>
                            <div class="block-2"></div>
                            <div class="block-3"></div>
                            <div class="block-4"></div>
                            <div class="block-5"></div>
                            <div class="block-6"></div>
                            <div class="block-7"></div>
                        </div>
                    </div>
                </div>
                <div class="extra">
                    <div class="plug"></div>
                    <div class="wire"></div>
                    <div class="drink"></div>
                </div>
                <div class="ground"></div>
            </div>
        </div>
    );
}
