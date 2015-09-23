/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define(["dojo/_base/declare", "dojo/_base/lang", "ct/Stateful", "ct/_Connect", "./ImageWidget"], function(a, b, c, d, e) {
    return a([c, d], {activate: function() {
            this.imageWidget = new e;
            this.imageWidget.domNode.src = this.imageUrl;
            var left,top;
            if(this.position.unit === "percent"){
                left = this.position.left + "%";
                top = this.position.top + "%";    
            } else if(this.position.unit === "pixels"){
                left = parseInt(this.position.left)
                top = parseInt(this.position.top)
            }
            var a = b.mixin({content: this.imageWidget}, {marginBox: {l: left,t: top},windowClass: "imageoverlayContainer",closable: !1,maximizable: !1,draggable: !1});
            (this._window = this._windowManager.createWindow(a)).show();
            this.closeableOnClick && this.connect(this.imageWidget, "onImageClicked", 
            this.deactivate)
        },deactivate: function() {
            this._window.close();
            this._window = null;
            this.imageWidget.destroy();
            this.imageWidget = null
        }})
});
