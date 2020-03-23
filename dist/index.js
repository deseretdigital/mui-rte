"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Immutable=_interopDefault(require("immutable")),classNames=_interopDefault(require("classnames")),styles$3=require("@material-ui/core/styles"),core=require("@material-ui/core"),draftJs=require("draft-js"),FormatBoldIcon=_interopDefault(require("@material-ui/icons/FormatBold")),FormatItalicIcon=_interopDefault(require("@material-ui/icons/FormatItalic")),FormatUnderlinedIcon=_interopDefault(require("@material-ui/icons/FormatUnderlined")),StrikethroughIcon=_interopDefault(require("@material-ui/icons/StrikethroughS")),HighlightIcon=_interopDefault(require("@material-ui/icons/Highlight")),InsertLinkIcon=_interopDefault(require("@material-ui/icons/InsertLink")),PhotoLibraryIcon=_interopDefault(require("@material-ui/icons/PhotoLibrary")),FormatListNumberedIcon=_interopDefault(require("@material-ui/icons/FormatListNumbered")),FormatListBulletedIcon=_interopDefault(require("@material-ui/icons/FormatListBulleted")),FormatQuoteIcon=_interopDefault(require("@material-ui/icons/FormatQuote")),CodeIcon=_interopDefault(require("@material-ui/icons/Code")),FormatClearIcon=_interopDefault(require("@material-ui/icons/FormatClear")),SaveIcon=_interopDefault(require("@material-ui/icons/Save")),UndoIcon=_interopDefault(require("@material-ui/icons/Undo")),RedoIcon=_interopDefault(require("@material-ui/icons/Redo")),ButtonGroup=_interopDefault(require("@material-ui/core/ButtonGroup")),InsertPhotoIcon=_interopDefault(require("@material-ui/icons/InsertPhoto")),MovieIcon=_interopDefault(require("@material-ui/icons/Movie")),CheckIcon=_interopDefault(require("@material-ui/icons/Check")),DeleteIcon=_interopDefault(require("@material-ui/icons/DeleteOutline")),FormatAlignCenter=_interopDefault(require("@material-ui/icons/FormatAlignCenter")),FormatAlignLeft=_interopDefault(require("@material-ui/icons/FormatAlignLeft")),FormatAlignRight=_interopDefault(require("@material-ui/icons/FormatAlignRight")),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ToolbarButton=function(t){var e=t.inlineMode?"small":t.size||"medium",n=t.inlineMode?"-toolbar":"",a=(t.id||t.label)+"-button"+n,o={id:a,onMouseDown:function(e){e.preventDefault(),t.onClick&&t.onClick(t.style,t.type,a,t.inlineMode)},disabled:t.disabled||!1};return t.icon?React__default.createElement(core.IconButton,__assign({},o,{"aria-label":t.label,color:t.active?"primary":"default",size:e}),t.icon):t.component?React__default.createElement(t.component,__assign({},o,{active:t.active||!1})):null},getSelectionInfo=function(e){var t=e.getSelection(),n=t.getStartOffset(),a=e.getCurrentContent(),o=a.getBlockForKey(t.getStartKey()),r=e.getCurrentInlineStyle(),i=o.getEntityAt(n),l=null;i&&(l=a.getEntity(i).getType());return{inlineStyle:r,blockType:o.getType(),entityType:l,linkKey:i,block:o}},getCompatibleSpacing=function(e,t,n,a,o){if("function"==typeof e)return e(t,n,a,o);var r=e.unit;return t*r+"px "+n*r+"px "+a*r+"px "+o*r+"px"},removeBlockFromMap=function(e,t){var n=e.getCurrentContent(),a=draftJs.Modifier.removeRange(n,new draftJs.SelectionState({anchorKey:t.getKey(),anchorOffset:0,focusKey:t.getKey(),focusOffset:t.getLength()}),"backward"),o=a.getBlockMap().delete(t.getKey());return a.merge({blockMap:o,selectionAfter:n.getSelectionAfter()})},atomicBlockExists=function(t,e){if(e)return e.find(function(e){return"atomic"===e.type&&e.name===t&&void 0!==e.atomicComponent})},STYLE_TYPES=[{label:"H1",name:"h1",style:"header-one",icon:React__default.createElement("span",null,"H1"),type:"block"},{label:"H2",name:"h2",style:"header-two",icon:React__default.createElement("span",null,"H2"),type:"block"},{label:"H3",name:"h3",style:"header-three",icon:React__default.createElement("span",null,"H3"),type:"block"},{label:"Bold",name:"bold",style:"BOLD",icon:React__default.createElement(FormatBoldIcon,null),type:"inline"},{label:"Italic",name:"italic",style:"ITALIC",icon:React__default.createElement(FormatItalicIcon,null),type:"inline"},{label:"Underline",name:"underline",style:"UNDERLINE",icon:React__default.createElement(FormatUnderlinedIcon,null),type:"inline"},{label:"Strikethrough",name:"strikethrough",style:"STRIKETHROUGH",icon:React__default.createElement(StrikethroughIcon,null),type:"inline"},{label:"Highlight",name:"highlight",style:"HIGHLIGHT",icon:React__default.createElement(HighlightIcon,null),type:"inline"},{label:"Undo",name:"undo",style:"UNDO",icon:React__default.createElement(UndoIcon,null),type:"callback"},{label:"Redo",name:"redo",style:"REDO",icon:React__default.createElement(RedoIcon,null),type:"callback"},{label:"Link",name:"link",style:"LINK",icon:React__default.createElement(InsertLinkIcon,null),type:"callback",id:"mui-rte-link-control"},{label:"Media",name:"media",style:"IMAGE",icon:React__default.createElement(PhotoLibraryIcon,null),type:"callback",id:"mui-rte-media-control"},{label:"OL",name:"bulletList",style:"ordered-list-item",icon:React__default.createElement(FormatListNumberedIcon,null),type:"block"},{label:"UL",name:"numberList",style:"unordered-list-item",icon:React__default.createElement(FormatListBulletedIcon,null),type:"block"},{label:"Blockquote",name:"quote",style:"blockquote",icon:React__default.createElement(FormatQuoteIcon,null),type:"block"},{label:"Code Block",name:"code",style:"code-block",icon:React__default.createElement(CodeIcon,null),type:"block"},{label:"Clear",name:"clear",style:"clear",icon:React__default.createElement(FormatClearIcon,null),type:"callback"},{label:"Save",name:"save",style:"save",icon:React__default.createElement(SaveIcon,null),type:"callback"}],Toolbar=function(r){var e=React.useState(r.controls?[]:STYLE_TYPES),t=e[0],n=e[1],i=r.editorState,a=r.inlineMode?"-inline-toolbar":"-toolbar";return React.useEffect(function(){if(r.controls){var a=[];r.controls.filter(function(e,t){return r.controls.indexOf(e)>=t}).forEach(function(t){var e=STYLE_TYPES.find(function(e){return e.name===t});if(e)a.push(e);else if(r.customControls){var n=r.customControls.find(function(e){return e.name===t});n&&"atomic"!==n.type&&(n.icon||n.component)&&a.push({id:n.id||n.name+"Id",name:n.name,label:n.name,style:n.name.toUpperCase(),icon:n.icon,component:n.component,type:n.type,clickFnName:"onCustomClick"})}}),n(a)}},[r.controls,r.customControls]),React__default.createElement("div",{id:r.id+a,className:r.className},t.map(function(e){if(r.inlineMode&&"inline"!==e.type&&"link"!==e.name&&"clear"!==e.name)return null;var t=!1,n=r.onClick;if("inline"===e.type)t=i.getCurrentInlineStyle().has(e.style);else if("block"===e.type){var a=i.getSelection(),o=i.getCurrentContent().getBlockForKey(a.getStartKey());o&&(t=e.style===o.getType())}else"IMAGE"!==e.style&&"LINK"!==e.style||(t=e.style===getSelectionInfo(i).entityType);return React__default.createElement(ToolbarButton,{id:e.id,key:"key-"+e.label,active:t,label:e.label,onClick:n,style:e.style,type:e.type,icon:e.icon,component:e.component,inlineMode:r.inlineMode,disabled:r.disabled,size:r.size})}))},styles=function(e){var t=e.shadows;return styles$3.createStyles({root:{margin:"5px 0 1px",outline:"none"},editable:{cursor:"pointer","&:hover":{boxShadow:t[3]}},focused:{boxShadow:t[3]},centered:{textAlign:"center"},leftAligned:{textAlign:"left"},rightAligned:{textAlign:"right"}})},Media=function(e){var t,n,a,o=e.contentState.getEntity(e.block.getEntityAt(0)).getData(),r=o.url,i=o.width,l=o.height,c=o.alignment,u=o.type,s=e.blockProps,d=s.onClick,f=s.readOnly,m=s.focusKey;return React__default.createElement("div",{className:classNames(((t={})[e.classes.centered]="center"===c,t[e.classes.leftAligned]="left"===c,t[e.classes.rightAligned]="right"===c,t))},(a={src:r,className:classNames(e.classes.root,((n={})[e.classes.editable]=!f,n[e.classes.focused]=!f&&m===e.block.getKey(),n)),width:i,height:"video"===u?"auto":l,onClick:function(){f||d(e.block)}},u&&"image"!==u?"video"===u?React__default.createElement("video",__assign({},a,{autoPlay:!1,controls:!0})):null:React__default.createElement("img",__assign({},a))))},Media$1=styles$3.withStyles(styles,{withTheme:!0})(Media),styles$1=function(e){var t=e.spacing;return styles$3.createStyles({linkPopover:{padding:getCompatibleSpacing(t,2,2,2,2),maxWidth:250},linkTextField:{width:"100%"}})},UrlPopover=function(e){function t(e,t){var n,a;if(""!==e){var o=parseInt(e,10);isNaN(o)||i(__assign(__assign({},r),((a={})[t]=o,a)))}else i(__assign(__assign({},r),((n={})[t]=void 0,n)))}var n=React.useState(e.data||{url:void 0,width:void 0,height:void 0,alignment:void 0,type:void 0}),r=n[0],i=n[1],a=e.classes;return React__default.createElement(core.Popover,{open:void 0!==e.anchor,anchorEl:e.anchor,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},React__default.createElement("div",{className:a.linkPopover},React__default.createElement(core.Grid,{container:!0,spacing:1},React__default.createElement(core.Grid,{container:!0,item:!0,xs:!0,spacing:1},React__default.createElement(core.Grid,{item:!0,xs:12},React__default.createElement(core.TextField,{className:a.linkTextField,onChange:function(e){return i(__assign(__assign({},r),{url:e.target.value}))},label:"URL",defaultValue:e.data&&e.data.url,autoFocus:!0,InputLabelProps:{shrink:!0}})),e.isMedia?React__default.createElement(React__default.Fragment,null,React__default.createElement(core.Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(core.Button,{color:r.type&&"image"!==r.type?"default":"primary",size:"small",onClick:function(){return i(__assign(__assign({},r),{type:"image"}))}},React__default.createElement(InsertPhotoIcon,null)),React__default.createElement(core.Button,{color:"video"===r.type?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},r),{type:"video"}))}},React__default.createElement(MovieIcon,null)))),React__default.createElement(core.Grid,{item:!0,xs:6},React__default.createElement(core.TextField,{onChange:function(e){return t(e.target.value,"width")},value:r.width||"",label:"Width",InputLabelProps:{shrink:!0}})),React__default.createElement(core.Grid,{item:!0,xs:6},React__default.createElement(core.TextField,{onChange:function(e){return t(e.target.value,"height")},value:r.height||"",label:"Height",InputLabelProps:{shrink:!0}})),React__default.createElement(core.Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(core.Button,{color:"left"===r.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},r),{alignment:"left"}))}},React__default.createElement(FormatAlignLeft,null)),React__default.createElement(core.Button,{color:"center"===r.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},r),{alignment:"center"}))}},React__default.createElement(FormatAlignCenter,null)),React__default.createElement(core.Button,{color:"right"===r.alignment?"primary":"default",size:"small",onClick:function(){return i(__assign(__assign({},r),{alignment:"right"}))}},React__default.createElement(FormatAlignRight,null))))):null),React__default.createElement(core.Grid,{container:!0,item:!0,xs:12,direction:"row",justify:"flex-end"},e.data&&e.data.url?React__default.createElement(core.Button,{onClick:function(){return e.onConfirm(e.isMedia,"")}},React__default.createElement(DeleteIcon,null)):null,React__default.createElement(core.Button,{onClick:function(){return e.onConfirm(e.isMedia,r.url,r.width,r.height,r.alignment,r.type)}},React__default.createElement(CheckIcon,null))))))},UrlPopover$1=styles$3.withStyles(styles$1,{withTheme:!0})(UrlPopover),styles$2=function(e){var t=e.spacing,n=e.typography,a=e.palette;return styles$3.createStyles({root:{},container:{margin:getCompatibleSpacing(t,1,0,0,0),fontFamily:n.body1.fontFamily,fontSize:n.body1.fontSize,"& figure":{margin:0}},inheritFontSize:{fontSize:"inherit"},editor:{},editorContainer:{margin:getCompatibleSpacing(t,1,0,0,0),cursor:"text",width:"100%",padding:getCompatibleSpacing(t,0,0,1,0)},editorReadOnly:{borderBottom:"none"},error:{borderBottom:"2px solid red"},hidePlaceholder:{display:"none"},placeHolder:{color:a.grey[600]},linkPopover:{padding:getCompatibleSpacing(t,2,2,2,2)},linkTextField:{width:"100%"},anchorLink:{textDecoration:"underline",color:a.secondary.main},toolbar:{},inlineToolbar:{maxWidth:"180px",position:"absolute",padding:"5px",zIndex:10}})},blockRenderMap=Immutable.Map({}),styleRenderMap={HIGHLIGHT:{backgroundColor:"yellow"}},hasCommandModifier=draftJs.KeyBindingUtil.hasCommandModifier,MUIRichTextEditor=function(l,e){var t,n,a,o=l.classes,r=l.controls,i=l.customControls,c=React.useState({}),m=c[0],g=c[1],u=React.useState(!1),s=u[0],d=u[1],p=l.editorState,f=React.useState({style:void 0,block:void 0}),_=f[0],y=f[1],h=React.useState(""),b=h[0],v=h[1],E=React.useRef(null),C=React.useRef({start:0,end:0}),R=React.useRef(void 0),k=React.useRef(p);React.useImperativeHandle(e,function(){return{focus:function(){D()},save:function(){F()},insertAtomicBlock:function(e,t){L(e,t)}}}),React.useEffect(function(){var t={},n=JSON.parse(JSON.stringify(styleRenderMap));return l.customControls&&l.customControls.forEach(function(e){"inline"===e.type&&e.inlineStyle?n[e.name.toUpperCase()]=e.inlineStyle:"block"===e.type&&e.blockWrapper&&(t[e.name.toUpperCase()]={element:"div",wrapper:e.blockWrapper})}),y({style:n,block:draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap,Immutable.Map(t))}),x(!0),function(){x()}},[]),React.useEffect(function(){k.current=p},[p]),React.useEffect(function(){R.current=m.toolbarPosition},[m.toolbarPosition]);function S(e){var t=e.target.nodeName;"IMG"!==t&&"VIDEO"!==t&&setTimeout(function(){var e=k.current.getSelection();if(e.isCollapsed()||void 0!==R&&C.current.start===e.getStartOffset()&&C.current.end===e.getEndOffset()){var t=getSelectionInfo(k.current);return"IMAGE"===t.entityType?void K(t.block):void g(__assign(__assign({},m),{toolbarPosition:void 0}))}C.current={start:e.getStartOffset(),end:e.getEndOffset()};var n=E.current.editor,a=draftJs.getVisibleSelectionRect(window),o=n.getBoundingClientRect();if(a){var r={top:n.offsetTop-48+(a.top-o.top),left:n.offsetLeft+(a.left-o.left)};g(__assign(__assign({},m),{toolbarPosition:r}))}},1)}function I(e){l.onChange&&l.onChange(e)}function T(e,t,n){var a=getSelectionInfo(e),o=e.getCurrentContent(),r=a.linkKey,i=void 0;r&&(i=o.getEntity(r).getData()),g({urlData:i,urlKey:r,toolbarPosition:n||"link"===t?m.toolbarPosition:void 0,anchorUrlPopover:n?document.getElementById("mui-rte-"+t+"-control-button-toolbar"):document.getElementById("mui-rte-"+t+"-control-button"),urlIsMedia:"media"===t||void 0})}function M(e,t){T(t||p,"media",e)}function B(e,t,n,a){if("inline"===t)return w(e);if("block"===t)return O(e);switch(e){case"UNDO":I(draftJs.EditorState.undo(p));break;case"REDO":I(draftJs.EditorState.redo(p));break;case"LINK":i=a,p.getSelection().isCollapsed()||T(p,"link",i);break;case"IMAGE":M(a);break;case"clear":o=getSelectionInfo(p),r=p,o.inlineStyle.forEach(function(e){e&&(r=draftJs.RichUtils.toggleInlineStyle(r,e))}),r=draftJs.RichUtils.toggleBlockType(r,o.blockType),I(r);break;case"save":F();break;default:!function(e,t){if(l.customControls)for(var n=0,a=l.customControls;n<a.length;n++){var o=a[n];if(o.name.toUpperCase()===e){if(o.onClick){setTimeout(function(){return E.current.blur()},0);var r=o.onClick(p,o.name,document.getElementById(t));r?r.getSelection().isCollapsed()?I(r):A(r):p.getSelection().isCollapsed()||N()}break}}}(e,n)}var o,r,i}var D=function(){d(!0),setTimeout(function(){return E.current.focus()},0)},F=function(){l.onSave&&l.onSave(JSON.stringify(draftJs.convertToRaw(p.getCurrentContent())))},L=function(e,t){var n=atomicBlockExists(e,l.customControls);if(n){var a=q(n.name.toUpperCase(),t,{selection:p.getCurrentContent().getSelectionAfter()});A(a)}},x=function(e){void 0===e&&(e=!1);var t=E.current.editor;t&&(t.removeEventListener("mouseup",S),e&&t.addEventListener("mouseup",S))},P=function(e){var t,n=m.urlKey;if(!e)return n?(t=p.getSelection(),void A(draftJs.RichUtils.toggleLink(p,t,null))):void g(__assign(__assign({},m),{anchorUrlPopover:void 0}));var a=p.getCurrentContent(),o=null,r={url:e};if(n)a.replaceEntityData(n,r),o=draftJs.EditorState.push(p,a,"apply-entity");else{var i=a.createEntity("LINK","MUTABLE",r),l=i.getLastCreatedEntityKey(),c=draftJs.EditorState.set(p,{currentContent:i});o=draftJs.RichUtils.toggleLink(c,c.getSelection(),l)}A(o)},U=function(e,t,n,a,o){var r,i,l,c,u=m.urlKey;if(!e)return u&&(r=p.getSelection().getStartKey(),i=p.getCurrentContent().getBlockForKey(r),l=removeBlockFromMap(p,i),c=draftJs.EditorState.push(p,l,"remove-range"),I(c)),void g(__assign(__assign({},m),{anchorUrlPopover:void 0}));var s=p.getCurrentContent(),d={url:e,width:t,height:n,alignment:a,type:o};if(u){s.replaceEntityData(u,d);var f=draftJs.EditorState.push(p,s,"apply-entity");A(draftJs.EditorState.forceSelection(f,f.getCurrentContent().getSelectionAfter()))}else{f=q("IMAGE",d);A(draftJs.EditorState.forceSelection(f,f.getCurrentContent().getSelectionAfter()))}v("")},A=function(e){I(e),N(),g(__assign(__assign({},m),{anchorUrlPopover:void 0,urlKey:void 0,urlIsMedia:void 0,urlData:void 0}))},N=function(){setTimeout(function(){return E.current.blur()},0),setTimeout(function(){return E.current.focus()},1)},O=function(e){I(draftJs.RichUtils.toggleBlockType(p,e))},w=function(e){I(draftJs.RichUtils.toggleInlineStyle(p,e))},K=function(e){var t=draftJs.SelectionState.createEmpty(e.getKey()),n=draftJs.EditorState.forceSelection(k.current,t);k.current=n,v(e.getKey()),I(n),M(!1,n)},q=function(e,t,n){var a=p.getCurrentContent().createEntity(e,"IMMUTABLE",t),o=a.getLastCreatedEntityKey(),r=draftJs.EditorState.set(p,__assign({currentContent:a},n));return draftJs.AtomicBlockUtils.insertAtomicBlock(r,o," ")},J=void 0===l.toolbar||l.toolbar,G=l.inlineToolbarControls||["bold","italic","underline","clear"],H=void 0===l.readOnly||!l.readOnly,z=l.id||"mui-rte",$="",W=null;s||p.getCurrentContent().hasText()||(W=React__default.createElement("div",{className:classNames(o.editorContainer,o.placeHolder,((t={})[o.error]=l.error,t)),onClick:D},l.label||""),$=o.hidePlaceholder);return React__default.createElement("div",{id:z+"-root",className:o.root},React__default.createElement("div",{id:z+"-container",className:classNames(o.container,((n={})[o.inheritFontSize]=l.inheritFontSize,n))},l.inlineToolbar&&H&&m.toolbarPosition?React__default.createElement(core.Paper,{className:o.inlineToolbar,style:{top:m.toolbarPosition.top+75,left:m.toolbarPosition.left}},React__default.createElement(Toolbar,{id:z,editorState:p,onClick:B,controls:G,customControls:i})):null,J?React__default.createElement(Toolbar,{id:z,editorState:p,onClick:B,controls:r,customControls:i,className:o.toolbar,disabled:!H,size:l.toolbarButtonSize}):null,W,React__default.createElement("div",{id:z+"-editor",className:o.editor},React__default.createElement("div",{id:z+"-editor-container",className:classNames($,o.editorContainer,((a={})[o.editorReadOnly]=!H,a[o.error]=l.error,a)),onClick:D,onBlur:function(){d(!1),m.anchorUrlPopover||g(__assign(__assign({},m),{toolbarPosition:void 0}))}},React__default.createElement(draftJs.Editor,__assign({customStyleMap:_.style,blockRenderMap:_.block,blockRendererFn:function(e){if("atomic"===e.getType()){var t=p.getCurrentContent(),n=e.getEntityAt(0);if(n){var a=t.getEntity(n).getType();if("IMAGE"===a)return{component:Media$1,editable:!1,props:{onClick:K,readOnly:l.readOnly,focusKey:b}};var o=atomicBlockExists(a.toLowerCase(),l.customControls);return o?{component:o.atomicComponent,editable:!1,props:t.getEntity(e.getEntityAt(0)).getData()}:null}}return null},editorState:p,onChange:I,readOnly:l.readOnly,handleKeyCommand:function(t,e){var n=draftJs.RichUtils.handleKeyCommand(e,t);if(n)return I(n),"handled";if(l.keyCommands){var a=l.keyCommands.find(function(e){return e.name===t});if(a){var o=a.callback(e);return I(o),"handled"}}return"not-handled"},handleBeforeInput:function(){if(l.maxLength&&p.getCurrentContent().getPlainText("").length>=l.maxLength)return"handled";return"not-handled"},keyBindingFn:function(t){if(hasCommandModifier(t)&&l.keyCommands){var e=l.keyCommands.find(function(e){return e.key===t.keyCode});if(e)return e.name}return draftJs.getDefaultKeyBinding(t)},ref:E},l.draftEditorProps)))),m.anchorUrlPopover?React__default.createElement(UrlPopover$1,{data:m.urlData,anchor:m.anchorUrlPopover,onConfirm:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e?U.apply(void 0,t):P.apply(void 0,t)},isMedia:m.urlIsMedia}):null))},MUIRichTextEditor$1=styles$3.withStyles(styles$2,{withTheme:!0,name:"MUIRichTextEditor"})(React.forwardRef(MUIRichTextEditor));exports.default=MUIRichTextEditor$1;
