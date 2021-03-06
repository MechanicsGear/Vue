var codeString = {
  icons: `<div>
    <div class="cnblogs_code">
    <pre>   &lt;template&gt;
      &lt;div&gt;
        &lt;Icons :on-select="onSelect"&gt;&lt;/Icons&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;script&gt;<span style="color: #000000;">
    import Icons from </span>"@/components/basic/Icons.vue"<span style="color: #000000;">;
    export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
      data() {},
      components: { Icons },
      methods: {
        onSelect(icon) {
          </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(icon);
        }
      }
    };
    </span>&lt;/script&gt;</pre>
    </div>
    <p>&nbsp;</p>
    </div>
    <script type="text/javascript">// <![CDATA[
    import Icons from "@/components/basic/Icons.vue";
    export default {
      data() {},
      components: { Icons },
      methods: {
        onSelect(icon) {
          this.$Message.error(icon);
        }
      }
    };
	// ]]></script>`,
	header:`<div style="color:#D4D4D4;background-color:#1E1E1E;font-family:Consolas, &quot;font-size:14px;line-height:19px;white-space:pre;">
	<div>
		<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">template</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">VolHeader</span>&nbsp;<span style="color:#9cdcfe;">style</span>=<span style="color:#ce9178;">"margin:&nbsp;30px&nbsp;0;"</span>&nbsp;:<span style="color:#9cdcfe;">icon</span>="<span style="color:#9cdcfe;">icon</span>"&nbsp;:<span style="color:#9cdcfe;">text</span>="<span style="color:#9cdcfe;">text</span>"<span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">slot</span>=<span style="color:#ce9178;">"content"</span><span style="color:#808080;">&gt;</span>VolHeader??????????????????????????????<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">style</span>=<span style="color:#ce9178;">"text-align:&nbsp;right;padding-top:&nbsp;4px;"</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Button</span>&nbsp;<span style="color:#9cdcfe;">type</span>=<span style="color:#ce9178;">"text"</span>&nbsp;<span style="color:#9cdcfe;">icon</span>=<span style="color:#ce9178;">"ios-search"</span>&nbsp;<span style="color:#9cdcfe;">size</span>=<span style="color:#ce9178;">"small"</span>&nbsp;@<span style="color:#9cdcfe;">click</span>="()<span style="color:#569cd6;">=&gt;</span>{<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$Message</span>.<span style="color:#dcdcaa;">error</span>(<span style="color:#ce9178;">'1'</span>)}"<span style="color:#808080;">&gt;</span>buttons1<span style="color:#808080;">&lt;/</span><span style="color:#4ec9b0;">Button</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Button</span>&nbsp;<span style="color:#9cdcfe;">type</span>=<span style="color:#ce9178;">"text"</span>&nbsp;<span style="color:#9cdcfe;">icon</span>=<span style="color:#ce9178;">"ios-search"</span>&nbsp;<span style="color:#9cdcfe;">size</span>=<span style="color:#ce9178;">"small"</span>&nbsp;@<span style="color:#9cdcfe;">click</span>="()<span style="color:#569cd6;">=&gt;</span>{<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$Message</span>.<span style="color:#dcdcaa;">error</span>(<span style="color:#ce9178;">'2'</span>)}"<span style="color:#808080;">&gt;</span>buttons2<span style="color:#808080;">&lt;/</span><span style="color:#4ec9b0;">Button</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#4ec9b0;">VolHeader</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">template</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">script</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		<span style="color:#c586c0;">import</span>&nbsp;<span style="color:#9cdcfe;">VolHeader</span>&nbsp;<span style="color:#c586c0;">from</span>&nbsp;<span style="color:#ce9178;">"@/components/basic/VolHeader.vue"</span>;
	</div>
	<div>
		<span style="color:#c586c0;">export</span>&nbsp;<span style="color:#c586c0;">default</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#dcdcaa;">data</span>()&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">icon:</span>&nbsp;<span style="color:#ce9178;">"md-male"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">text:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;};
	</div>
	<div>
		&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#9cdcfe;">components:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">VolHeader</span>&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#9cdcfe;">methods:</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">onSelect</span>(<span style="color:#9cdcfe;">icon</span>)&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$Message</span>.<span style="color:#dcdcaa;">error</span>(<span style="color:#9cdcfe;">icon</span>);
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;}
	</div>
	<div>
		};
	</div>
	<div>
		<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">script</span><span style="color:#808080;">&gt;</span>
	</div>
</div>`,
  box: `<div>
    <div>
    <div class="cnblogs_code">
    <pre>&lt;template&gt;
      &lt;div&gt;
        &lt;Button type="info" @click="model=!model"&gt;?????????&lt;/Button&gt;
        &lt;<span style="color: #000000;">VolBox
          icon</span>="ios-chatbubbles"<span style="color: #000000;">
          :model.sync</span>="model"<span style="color: #000000;">
          title</span>="???????????????"<span style="color: #000000;">
          :height</span>="400"<span style="color: #000000;">
          :width</span>="700"<span style="color: #000000;">
          :padding</span>="15"
        &gt;
          &lt;div&gt;???????????????&lt;/div&gt;
          &lt;!-- footer ?????????????????????????????????????????? --&gt;
          &lt;div slot="footer"&gt;
            &lt;Button type="default" @click="()=&gt;{this.$Message.error('????????????')}"&gt;??????&lt;/Button&gt;
            &lt;Button type="default" @click="()=&gt;{model=false}"&gt;?????????????????????&lt;/Button&gt;
          &lt;/div&gt;
        &lt;/VolBox&gt;
        &lt;div&gt;
          &lt;docParamTable name="box"&gt;&lt;/docParamTable&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;script&gt;<span style="color: #000000;">
    import VolBox from </span>"@/components/basic/VolBox.vue"<span style="color: #000000;">;
    export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
      data() {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
          model: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">
        };
      },
      components: { VolBox },
      methods: {}
    };
    </span>&lt;/script&gt;</pre>
    </div>
    <p>&nbsp;</p>
    </div>
    </div>
    <script type="text/javascript">// <![CDATA[
    import VolBox from "@/components/basic/VolBox.vue";
    export default {
      data() {
        return {
          model: false
        };
      },
      components: { VolBox },
      methods: {}
    };
    // ]]></script>`,
  form: `<div style="color:#D4D4D4;background-color:#1E1E1E;font-family:Consolas, &quot;font-size:14px;line-height:19px;white-space:pre;">
	<div>
		<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">template</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">VolForm</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">ref</span>=<span style="color:#ce9178;">"myform"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">label-width</span>="<span style="color:#b5cea8;">150</span>"
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">loadKey</span>="<span style="color:#569cd6;">true</span>"
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">formFileds</span>="<span style="color:#9cdcfe;">formFileds1</span>"
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">formRules</span>="<span style="color:#9cdcfe;">formRules1</span>"
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&gt;&lt;/</span><span style="color:#569cd6;">VolForm</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">Button</span>&nbsp;<span style="color:#9cdcfe;">type</span>=<span style="color:#ce9178;">"info"</span>&nbsp;<span style="color:#9cdcfe;">long</span>&nbsp;@<span style="color:#9cdcfe;">click</span>="<span style="color:#9cdcfe;">reset</span>"<span style="color:#808080;">&gt;</span>????????????<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">Button</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">template</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">script</span><span style="color:#808080;">&gt;</span>
	</div>
	<div>
		<span style="color:#c586c0;">import</span>&nbsp;<span style="color:#9cdcfe;">VolForm</span>&nbsp;<span style="color:#c586c0;">from</span>&nbsp;<span style="color:#ce9178;">"@/components/basic/VolForm.vue"</span>;
	</div>
	<div>
		<span style="color:#c586c0;">export</span>&nbsp;<span style="color:#c586c0;">default</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#9cdcfe;">components:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">VolForm</span>&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#9cdcfe;">methods:</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">reset</span>()&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$refs</span>.<span style="color:#9cdcfe;">myform</span>.<span style="color:#dcdcaa;">reset</span>();
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$Message</span>.<span style="color:#dcdcaa;">error</span>(<span style="color:#ce9178;">"???????????????"</span>);
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;<span style="color:#dcdcaa;">data</span>()&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">formFileds1:</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Variety:</span>&nbsp;<span style="color:#b5cea8;">1</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">AgeRange:</span>&nbsp;<span style="color:#ce9178;">""</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">DateRange:</span>&nbsp;[],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">City:</span>&nbsp;<span style="color:#ce9178;">"?????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">AvgPrice:</span>&nbsp;<span style="color:#b5cea8;">8.88</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">number1:</span>&nbsp;<span style="color:#b5cea8;">20</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">mail:</span>&nbsp;<span style="color:#ce9178;">""</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Date:</span>&nbsp;<span style="color:#ce9178;">""</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">IsTop:</span>&nbsp;<span style="color:#ce9178;">""</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Fruits:</span>&nbsp;[],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Other:</span>&nbsp;<span style="color:#ce9178;">""</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">extra1:</span>&nbsp;<span style="color:#ce9178;">"??????????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">extra2:</span>&nbsp;<span style="color:#ce9178;">"???????????????????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Switch:</span>&nbsp;<span style="color:#b5cea8;">1</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">SelectList:</span>&nbsp;[<span style="color:#ce9178;">"?????????"</span>,&nbsp;<span style="color:#ce9178;">"?????????"</span>,&nbsp;<span style="color:#ce9178;">"?????????"</span>,&nbsp;<span style="color:#ce9178;">"?????????"</span>,&nbsp;<span style="color:#ce9178;">"?????????"</span>],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">remoteSearch:</span>&nbsp;<span style="color:#ce9178;">""</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">readonlyText:</span>&nbsp;<span style="color:#ce9178;">"????????????...."</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">readonlyImg:</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178;">"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x2.jpg"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">ProImg:</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178;">"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x3.jpg"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">cascader1:</span>&nbsp;[<span style="color:#ce9178;">"beijing"</span>,&nbsp;<span style="color:#ce9178;">"tiantan"</span>],&nbsp;<span style="color:#6a9955;">//???????????????2020.05.31</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">cascader2:</span>&nbsp;[]&nbsp;<span style="color:#6a9955;">//???????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">formRules1:</span>&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//??????????????????formRules???????????????:[[{},{}]]</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">dataKey:</span>&nbsp;<span style="color:#ce9178;">"city"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"?????????????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"City"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"select"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"?????????????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">dataKey:</span>&nbsp;<span style="color:#ce9178;">"age"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">placeholder:</span>&nbsp;<span style="color:#ce9178;">"??????????????????????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????data???????????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#b5cea8;">1</span>,&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"???"</span>&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"???"</span>&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">false</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"Variety"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"select"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"?????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//??????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"AgeRange"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"phone"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">onKeyPress</span><span style="color:#9cdcfe;">:</span>&nbsp;<span style="color:#9cdcfe;">$event</span>&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">if</span>&nbsp;(<span style="color:#9cdcfe;">$event</span>.<span style="color:#9cdcfe;">keyCode</span>&nbsp;==&nbsp;<span style="color:#b5cea8;">13</span>)&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$Message</span>.<span style="color:#dcdcaa;">error</span>(<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">formFileds1</span>.<span style="color:#9cdcfe;">AgeRange</span>&nbsp;+&nbsp;<span style="color:#ce9178;">""</span>);
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"date??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"Date"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"datetime"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">range:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//?????????true?????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">false</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"DateRange"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"date"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"number"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">placeholder:</span>&nbsp;<span style="color:#ce9178;">"?????????????????????placeholder???????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"number1"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"decimal"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????decimal???"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">max:</span>&nbsp;<span style="color:#b5cea8;">10</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">min:</span>&nbsp;<span style="color:#b5cea8;">2</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"AvgPrice"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"mail"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">range:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//?????????true?????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">false</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"mail"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"text"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"extra1"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">extra:</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">icon:</span>&nbsp;<span style="color:#ce9178;">"ios-search"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">style:</span>&nbsp;<span style="color:#ce9178;">"color:red"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">text:</span>&nbsp;<span style="color:#ce9178;">"??????????????????????????????"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"?????????????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"extra2"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"text"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">extra:</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">icon:</span>&nbsp;<span style="color:#ce9178;">"ios-search"</span>,&nbsp;<span style="color:#6a9955;">//????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">text:</span>&nbsp;<span style="color:#ce9178;">"?????????????????????"</span>,&nbsp;<span style="color:#6a9955;">//????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">click</span><span style="color:#9cdcfe;">:</span>&nbsp;<span style="color:#9cdcfe;">item</span>&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$Message</span>.<span style="color:#dcdcaa;">error</span>(<span style="color:#ce9178;">"???????????????????????????"</span>);
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">dataKey:</span>&nbsp;<span style="color:#ce9178;">"city"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"SelectList"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"selectList"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">dataKey:</span>&nbsp;<span style="color:#ce9178;">"city"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"remoteSearch"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">remote:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//????????????(?????????????????????,?????????????????????sql,????????????????????????????????????????????????????????????sql???top)</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//url:'api/xx/xx'?????????url??????&nbsp;?????????????????????[{key:'xxxx',value:'xxx'}]</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"select"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"???????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"Other"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">validator</span><span style="color:#9cdcfe;">:</span>&nbsp;(<span style="color:#9cdcfe;">rule</span>,&nbsp;<span style="color:#9cdcfe;">val</span>)&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">if</span>&nbsp;(<span style="color:#9cdcfe;">val</span>&nbsp;!=&nbsp;<span style="color:#ce9178;">"234"</span>)&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#ce9178;">"???????????????234???"</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#ce9178;">""</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"Switch"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"Switch"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">dataKey:</span>&nbsp;<span style="color:#ce9178;">"enable"</span>,&nbsp;<span style="color:#6a9955;">//???????????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">false</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"switch"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//readonlyImg</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"checkbox"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????data???????????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#b5cea8;">1</span>,&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#b5cea8;">2</span>,&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#b5cea8;">3</span>,&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"?????????"</span>&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"Fruits"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"checkbox"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">readonly:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//??????readonly???disabled??????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"readonlyText"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"text"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//readonlyImg</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????1"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????data???????????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"beijing"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">label:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">loading:</span>&nbsp;<span style="color:#569cd6;">false</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">children:</span>&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"gugong"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">label:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"tiantan"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">label:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"wangfujing"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">label:</span>&nbsp;<span style="color:#ce9178;">"?????????"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"cascader1"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"cascader"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//???????????????(?????????)</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">formatter</span><span style="color:#9cdcfe;">:</span>&nbsp;(<span style="color:#9cdcfe;">labels</span>,&nbsp;<span style="color:#9cdcfe;">selectedData</span>)&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;<span style="color:#51b6c4;">index</span>&nbsp;=&nbsp;<span style="color:#9cdcfe;">labels</span>.<span style="color:#9cdcfe;">length</span>&nbsp;-&nbsp;<span style="color:#b5cea8;">1</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;<span style="color:#51b6c4;">data</span>&nbsp;=&nbsp;<span style="color:#9cdcfe;">selectedData</span>[<span style="color:#9cdcfe;">index</span>]&nbsp;||&nbsp;<span style="color:#569cd6;">false</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">if</span>&nbsp;(<span style="color:#9cdcfe;">data</span>&nbsp;&amp;&amp;&nbsp;<span style="color:#9cdcfe;">data</span>.<span style="color:#9cdcfe;">label</span>)&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#9cdcfe;">labels</span>[<span style="color:#9cdcfe;">index</span>]&nbsp;+&nbsp;<span style="color:#ce9178;">"&nbsp;-&nbsp;"</span>&nbsp;+&nbsp;<span style="color:#9cdcfe;">data</span>.<span style="color:#9cdcfe;">label</span>&nbsp;+&nbsp;<span style="color:#ce9178;">"&nbsp;-&nbsp;(???????????????)"</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#9cdcfe;">labels</span>[<span style="color:#9cdcfe;">index</span>];
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"???????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????data???????????????????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">value:</span>&nbsp;<span style="color:#ce9178;">"zhejiang"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">label:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">loading:</span>&nbsp;<span style="color:#569cd6;">false</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">children:</span>&nbsp;[]
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"cascader2"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"cascader"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//??????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">loadData</span><span style="color:#9cdcfe;">:</span>&nbsp;(<span style="color:#9cdcfe;">item</span>,&nbsp;<span style="color:#9cdcfe;">callback</span>)&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">if</span>&nbsp;(<span style="color:#9cdcfe;">item</span>.<span style="color:#9cdcfe;">children</span>.<span style="color:#9cdcfe;">length</span>&nbsp;&gt;&nbsp;<span style="color:#b5cea8;">0</span>)&nbsp;<span style="color:#c586c0;">return</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">item</span>.<span style="color:#9cdcfe;">loading</span>&nbsp;=&nbsp;<span style="color:#569cd6;">true</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">http</span>.<span style="color:#dcdcaa;">post</span>(<span style="color:#ce9178;">"xxx"</span>).<span style="color:#dcdcaa;">then</span>(<span style="color:#9cdcfe;">children</span>&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">item</span>.<span style="color:#9cdcfe;">loading</span>&nbsp;=&nbsp;<span style="color:#569cd6;">false</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">item</span>.<span style="color:#9cdcfe;">children</span>&nbsp;=&nbsp;<span style="color:#9cdcfe;">children</span>;
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//children???????????????iview??????cascader???????????????????????????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;item.children&nbsp;=&nbsp;[{</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;value:&nbsp;'hangzhou',</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;label:&nbsp;'??????',</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;children:&nbsp;[{</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;'xihu',</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;'??????',</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code:&nbsp;1000</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;&nbsp;&nbsp;}]</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//&nbsp;}]</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">callback</span>();
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"IsTop"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">min:</span>&nbsp;<span style="color:#b5cea8;">3</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">max:</span>&nbsp;<span style="color:#b5cea8;">5</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">placeholder:</span>&nbsp;<span style="color:#ce9178;">"????????????3?????????,??????????????????5?????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">colSize:</span>&nbsp;<span style="color:#b5cea8;">12</span>,&nbsp;<span style="color:#6a9955;">//??????12????????????100%??????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"textarea"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">readonly:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//??????readonly???disabled??????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"readonlyImg"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"img"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"???????????????"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"ProImg"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"img"</span>,
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">maxSize:</span>&nbsp;<span style="color:#b5cea8;">0.2</span>,&nbsp;<span style="color:#6a9955;">//??????0.2M??????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????volupload??????</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">url:</span>&nbsp;<span style="color:#ce9178;">"/api/App_Appointment/Upload"</span>
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
	</div>
	<div>
		&nbsp;&nbsp;&nbsp;&nbsp;};
	</div>
	<div>
		&nbsp;&nbsp;}
	</div>
	<div>
		};
	</div>
	<div>
		<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">script</span><span style="color:#808080;">&gt;</span>
	</div>
<br />
</div>`,
editTable1:`<div style="color:#D4D4D4;background-color:#1E1E1E;font-family:Consolas, &quot;font-size:14px;line-height:19px;white-space:pre;">
<div>
	<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">template</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">class</span>=<span style="color:#ce9178;">"vol-demo"</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">VolHeader</span>&nbsp;<span style="color:#9cdcfe;">icon</span>=<span style="color:#ce9178;">"md-podium"</span>&nbsp;<span style="color:#9cdcfe;">text</span>=<span style="color:#ce9178;">"????????????(1)"</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span>&nbsp;<span style="color:#9cdcfe;">slot</span>=<span style="color:#ce9178;">"content"</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????????????????????????????????????????????/?????????????????????????????????
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#4ec9b0;">VolHeader</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">vol-table</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">ref</span>=<span style="color:#ce9178;">"editTable1"</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">columns</span>="<span style="color:#9cdcfe;">options</span>.<span style="color:#9cdcfe;">columns</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">max-height</span>="<span style="color:#b5cea8;">270</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">index</span>="<span style="color:#569cd6;">true</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">tableData</span>="<span style="color:#9cdcfe;">options</span>.<span style="color:#9cdcfe;">data</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">pagination-hide</span>="<span style="color:#569cd6;">true</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">click-edit</span>="<span style="color:#569cd6;">true</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">endEditBefore</span>="<span style="color:#9cdcfe;">endEditBefore</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">endEditAfter</span>="<span style="color:#9cdcfe;">endEditAfter</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="color:#9cdcfe;">beginEdit</span>="<span style="color:#9cdcfe;">beginEdit</span>"
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#808080;">&gt;&lt;/</span><span style="color:#569cd6;">vol-table</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	&nbsp;&nbsp;<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">template</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	<span style="color:#808080;">&lt;</span><span style="color:#569cd6;">script</span><span style="color:#808080;">&gt;</span>
</div>
<div>
	<span style="color:#c586c0;">import</span>&nbsp;<span style="color:#9cdcfe;">VolTable</span>&nbsp;<span style="color:#c586c0;">from</span>&nbsp;<span style="color:#ce9178;">"@/components/basic/VolTable.vue"</span>;
</div>
<div>
	<span style="color:#c586c0;">import</span>&nbsp;<span style="color:#9cdcfe;">VolHeader</span>&nbsp;<span style="color:#c586c0;">from</span>&nbsp;<span style="color:#ce9178;">"@/components/basic/VolHeader.vue"</span>;
</div>
<div>
	<span style="color:#c586c0;">export</span>&nbsp;<span style="color:#c586c0;">default</span>&nbsp;{
</div>
<div>
	&nbsp;&nbsp;<span style="color:#9cdcfe;">components:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">VolTable</span>,&nbsp;<span style="color:#9cdcfe;">VolHeader</span>&nbsp;},
</div>
<div>
	&nbsp;&nbsp;<span style="color:#dcdcaa;">data</span>()&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">options:</span>&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">ExpertId:</span>&nbsp;<span style="color:#b5cea8;">276</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">NotNull:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">LimitNumber:</span>&nbsp;<span style="color:#b5cea8;">5</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">EventClick:</span>&nbsp;<span style="color:#ce9178;">"???????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">FormatString:</span>&nbsp;<span style="color:#ce9178;">"2019-11-08"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Enable:</span>&nbsp;<span style="color:#b5cea8;">0</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">CreateDate:</span>&nbsp;<span style="color:#ce9178;">"2018-09-18&nbsp;17:45:54"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">ExpertId:</span>&nbsp;<span style="color:#b5cea8;">276</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">NotNull:</span>&nbsp;<span style="color:#ce9178;">"???????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">LimitNumber:</span>&nbsp;<span style="color:#b5cea8;">5</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">EventClick:</span>&nbsp;<span style="color:#ce9178;">"????????????????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">FormatString:</span>&nbsp;<span style="color:#ce9178;">"2019-11-09"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">Enable:</span>&nbsp;<span style="color:#b5cea8;">1</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">CreateDate:</span>&nbsp;<span style="color:#ce9178;">"2020-22-18&nbsp;17:45:54"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">columns:</span>&nbsp;[
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"ExpertId"</span>,&nbsp;<span style="color:#6a9955;">//??????????????????,????????????????????????????????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????ID"</span>,&nbsp;<span style="color:#6a9955;">//?????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">isKey:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//?????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">hidden:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"NotNull"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">width:</span>&nbsp;<span style="color:#b5cea8;">70</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">required:</span>&nbsp;<span style="color:#569cd6;">true</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">edit:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"text"</span>&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">sortable:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//????????????(??????????????????????????????????????????????????????????????????)</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"LimitNumber"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">summary:</span>&nbsp;<span style="color:#569cd6;">true</span>,&nbsp;<span style="color:#6a9955;">//????????????????????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">width:</span>&nbsp;<span style="color:#b5cea8;">70</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">require:</span>&nbsp;<span style="color:#569cd6;">true</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">edit:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"number"</span>,&nbsp;<span style="color:#9cdcfe;">min:</span>&nbsp;<span style="color:#b5cea8;">3</span>,&nbsp;<span style="color:#9cdcfe;">max:</span>&nbsp;<span style="color:#b5cea8;">5</span>&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"EventClick"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"string"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">width:</span>&nbsp;<span style="color:#b5cea8;">80</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">require:</span>&nbsp;<span style="color:#569cd6;">true</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"FormatString"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"???????????????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">width:</span>&nbsp;<span style="color:#b5cea8;">90</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">require:</span>&nbsp;<span style="color:#569cd6;">true</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">formatter</span><span style="color:#9cdcfe;">:</span>&nbsp;(<span style="color:#9cdcfe;">row</span>)&nbsp;<span style="color:#569cd6;">=&gt;</span>&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//????????????????????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">if</span>&nbsp;(!<span style="color:#9cdcfe;">row</span>.<span style="color:#9cdcfe;">FormatString</span>)&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>;
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#9cdcfe;">row</span>.<span style="color:#9cdcfe;">FormatString</span>.<span style="color:#dcdcaa;">replace</span>(<span style="color:#d16969;">/-/</span><span style="color:#569cd6;">g</span>,&nbsp;<span style="color:#ce9178;">"."</span>);
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"Enable"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"????????????KeyValue"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"byte"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">bind:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">key:</span>&nbsp;<span style="color:#ce9178;">"enable"</span>,&nbsp;<span style="color:#9cdcfe;">data:</span>&nbsp;[]&nbsp;},&nbsp;<span style="color:#6a9955;">//????????????data????????????????????????????????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">width:</span>&nbsp;<span style="color:#b5cea8;">110</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">edit:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"switch"</span>&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">field:</span>&nbsp;<span style="color:#ce9178;">"CreateDate"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">title:</span>&nbsp;<span style="color:#ce9178;">"??????"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"datetime"</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">width:</span>&nbsp;<span style="color:#b5cea8;">110</span>,
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">edit:</span>&nbsp;{&nbsp;<span style="color:#9cdcfe;">type:</span>&nbsp;<span style="color:#ce9178;">"datetime"</span>&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;};
</div>
<div>
	&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;<span style="color:#dcdcaa;">created</span>()&nbsp;{},
</div>
<div>
	&nbsp;&nbsp;<span style="color:#dcdcaa;">mounted</span>(){
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955;">//?????????????????????,?????????????????????????????????</span>
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">this</span>.<span style="color:#9cdcfe;">$refs</span>.<span style="color:#9cdcfe;">editTable1</span>.<span style="color:#9cdcfe;">summaryData</span>[<span style="color:#b5cea8;">2</span>]=<span style="color:#b5cea8;">10</span>;
</div>
<div>
	&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;<span style="color:#9cdcfe;">methods:</span>{&nbsp;&nbsp;
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">beginEdit</span>(<span style="color:#9cdcfe;">row</span>,&nbsp;<span style="color:#9cdcfe;">column</span>,&nbsp;<span style="color:#9cdcfe;">index</span>)&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">console</span>.<span style="color:#dcdcaa;">log</span>(<span style="color:#ce9178;">"???????????????"</span>&nbsp;+&nbsp;<span style="color:#4ec9b0;">JSON</span>.<span style="color:#dcdcaa;">stringify</span>(<span style="color:#9cdcfe;">row</span>));
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#569cd6;">true</span>;
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">endEditBefore</span>(<span style="color:#9cdcfe;">row</span>,&nbsp;<span style="color:#9cdcfe;">column</span>,&nbsp;<span style="color:#9cdcfe;">index</span>)&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">console</span>.<span style="color:#dcdcaa;">log</span>(<span style="color:#ce9178;">"???????????????"</span>&nbsp;+&nbsp;<span style="color:#4ec9b0;">JSON</span>.<span style="color:#dcdcaa;">stringify</span>(<span style="color:#9cdcfe;">row</span>));
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#569cd6;">true</span>;
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa;">endEditAfter</span>(<span style="color:#9cdcfe;">row</span>,&nbsp;<span style="color:#9cdcfe;">column</span>,&nbsp;<span style="color:#9cdcfe;">index</span>)&nbsp;{
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">console</span>.<span style="color:#dcdcaa;">log</span>(<span style="color:#ce9178;">"???????????????"</span>&nbsp;+&nbsp;<span style="color:#4ec9b0;">JSON</span>.<span style="color:#dcdcaa;">stringify</span>(<span style="color:#9cdcfe;">row</span>));
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span>&nbsp;<span style="color:#569cd6;">true</span>;
</div>
<div>
	&nbsp;&nbsp;&nbsp;&nbsp;},
</div>
<div>
	&nbsp;&nbsp;},
</div>
<div>
	};
</div>
<div>
	<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">script</span><span style="color:#808080;">&gt;</span>
</div>
</div>`,
  editTableKeep:`&lt;template&gt;<br />
  &nbsp; &lt;div&gt;<br />
  &nbsp; &nbsp; &lt;div class="vol-demo keep-edit"&gt;<br />
  &nbsp; &nbsp; &nbsp; &lt;VolHeader icon="md-podium" text="??????????????????"&gt;<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &lt;div slot="content"&gt;??????columns??????edit.keep=true??????????????????????????????..&lt;/div&gt;<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &lt;div style="text-align: right;"&gt;<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;Button type="info" size="small" ghost &gt;???????????????&lt;/Button&gt;<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;<br />
  &nbsp; &nbsp; &nbsp; &lt;/VolHeader&gt;<br />
  &nbsp; &nbsp; &nbsp; &lt;vol-table ref="table3" :columns="columns" :index="true" :tableData="tableData"&gt;&lt;/vol-table&gt;<br />
  &nbsp; &nbsp; &lt;/div&gt;<br />
  &nbsp; &nbsp; &lt;!-- ????????????????????? --&gt;<br />
  &nbsp; &nbsp; &lt;VolBox<br />
  &nbsp; &nbsp; &nbsp; icon="ios-chatbubbles"<br />
  &nbsp; &nbsp; &nbsp; :model.sync="model"<br />
  &nbsp; &nbsp; &nbsp; title="????????????"<br />
  &nbsp; &nbsp; &nbsp; :height="220"<br />
  &nbsp; &nbsp; &nbsp; :url="url"<br />
  &nbsp; &nbsp; &nbsp; :width="520"<br />
  &nbsp; &nbsp; &nbsp; :desc="true"<br />
  &nbsp; &nbsp; &nbsp; :padding="15"<br />
  &nbsp; &nbsp; &gt;<br />
  &nbsp; &nbsp; &nbsp; &lt;VolUpload<br />
  &nbsp; &nbsp; &nbsp; &nbsp; style="text-align: center; border: 1px dotted #FF9800;padding: 20px;"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :autoUpload="false"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :multiple="true"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :url="url"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :max-file="3"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :img="true"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :fileInfo="fileInfo"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; :upload-after="uploadAfter"<br />
  &nbsp; &nbsp; &nbsp; &gt;<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &lt;div&gt;????????????&lt;/div&gt;<br />
  &nbsp; &nbsp; &nbsp; &lt;/VolUpload&gt;<br />
  &nbsp; &nbsp; &lt;/VolBox&gt;<br />
  &nbsp; &lt;/div&gt;<br />
  &lt;/template&gt;<br />
  &lt;script&gt;<br />
  import VolBox from "@/components/basic/VolBox.vue";<br />
  import VolTable from "@/components/basic/VolTable.vue";<br />
  import VolUpload from "@/components/basic/VolUpload.vue";<br />
  import VolHeader from "@/components/basic/VolHeader.vue";<br />
  <br />
  export default {<br />
  &nbsp; components: { VolTable, VolBox, VolHeader, VolUpload },<br />
  &nbsp; data() {<br />
  &nbsp; &nbsp; return {<br />
  &nbsp; &nbsp; &nbsp; url: "/api/app_news/upload", //????????????????????????????????????????????????????????????????????????<br />
  &nbsp; &nbsp; &nbsp; uploadRow: {},<br />
  &nbsp; &nbsp; &nbsp; fileInfo: [],<br />
  &nbsp; &nbsp; &nbsp; model: false,<br />
  &nbsp; &nbsp; &nbsp; tableData: [<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; userName: "????????????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; imgs:<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x2.jpg",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; enable: 1,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; date: "2020-03-18 17:45:54"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; userName: "????????????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; imgs:<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x2.jpg",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; enable: 0,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; date: "2020-03-20 12:20:30"<br />
  &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; ],<br />
  &nbsp; &nbsp; &nbsp; columns: [<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; field: "userName",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title: "?????????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; require: true,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; edit: { type: "text", keep: true },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 150<br />
  &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; field: "imgs",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title: "????????????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; type: "img",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 200<br />
  &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; field: "upload",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title: "????????????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 160,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; formatter: () =&gt; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "&lt;div class='img-btn'&gt;????????????&lt;/div&gt;";<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; click: (row, column, event) =&gt; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.uploadRow = row; //??????????????????????????????<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //?????????????????????????????????<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.fileInfo.splice(0);<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //???????????????row???????????????????????????????????????????????????<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if (row.imgs) {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let _imgs = row.imgs.split(",");<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; for (let i = 0; i &lt; _imgs.length; i++) {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.fileInfo.push({ path: _imgs[i], name: "11" });<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.model = true;<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; field: "enable",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title: "????????????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; require: true,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 130,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; edit: { type: "switch", keep: true },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bind: {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //???????????????????????????????????????????????????????????????bind?????????????????????????????????????????????????????????????????????<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; key: "audit",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; data: [<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { key: 0, value: "???" },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { key: 1, value: "???" }<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; onChange: (row, column, data, value) =&gt; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.$Message.info(value ? "???" : "???");<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; field: "date",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title: "??????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; edit: { type: "datetime", keep: true },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 150<br />
  &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; field: "save",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; title: "??????",<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 150,<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; formatter: () =&gt; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "&lt;div&nbsp; class='oper-btn'&gt;??????&lt;/div&gt;";<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; click: (row, column, event) =&gt; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.$Message.info("???????????????????????????" + JSON.stringify(row));<br />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; &nbsp; }<br />
  &nbsp; &nbsp; &nbsp; ]<br />
  &nbsp; &nbsp; };<br />
  &nbsp; },<br />
  &nbsp; created() {},<br />
  &nbsp; methods: {<br />
  &nbsp; &nbsp; //???????????????<br />
  &nbsp; &nbsp; uploadAfter(result, files) {<br />
  &nbsp; &nbsp; &nbsp; if (!result.status) return true;<br />
  &nbsp; &nbsp; &nbsp; let imgs = [];<br />
  &nbsp; &nbsp; &nbsp; files.forEach(x =&gt; {<br />
  &nbsp; &nbsp; &nbsp; &nbsp; imgs.push(result.data + x.name);<br />
  &nbsp; &nbsp; &nbsp; });<br />
  &nbsp; &nbsp; &nbsp; // //????????????????????????<br />
  &nbsp; &nbsp; &nbsp; this.uploadRow.imgs = imgs.join(",");<br />
  &nbsp; &nbsp; &nbsp; //????????????????????????<br />
  &nbsp; &nbsp; &nbsp; let _rows = this.tableData.splice(0);<br />
  &nbsp; &nbsp; &nbsp; this.tableData.push(..._rows);<br />
  &nbsp; &nbsp; &nbsp; this.model = false;<br />
  &nbsp; &nbsp; &nbsp; return true;<br />
  &nbsp; &nbsp; }<br />
  &nbsp; }<br />
  };<br />
  &lt;/script&gt;<br />
  <br />
  &lt;style lang="less" scoped&gt;<br />
  .vol-demo {<br />
  &nbsp; box-shadow: 0px 0px 10px #ccc9c9;<br />
  &nbsp; padding: 23px;<br />
  }<br />
  &lt;/style&gt;<br />
  <br />
  &lt;style scoped&gt;<br />
  .keep-edit &gt;&gt;&gt; .oper-btn,<br />
  .keep-edit &gt;&gt;&gt; .img-btn {<br />
  &nbsp; width: 75px;<br />
  &nbsp; border-radius: 4px;<br />
  &nbsp; padding: 2px 15px;<br />
  &nbsp; background: #eee;<br />
  &nbsp; color: #fff;<br />
  &nbsp; background-color: #03a9f4;<br />
  &nbsp; border-color: #19be6b;<br />
  &nbsp; text-align: center;<br />
  &nbsp; font-size: 12px;<br />
  &nbsp; line-height: 24px;<br />
  &nbsp; cursor: pointer;<br />
  }<br />
  .keep-edit &gt;&gt;&gt; .oper-btn {<br />
  &nbsp; background-color: #19be6b;<br />
  }<br />
  &lt;/style&gt;<br />
  <br />
  <span style="display:none;"></span>`
  ,
  edittable: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;VolHeader icon="md-podium" text="????????????"&gt;
        &lt;div slot="content"&gt;????????????..&lt;/div&gt;
        &lt;div style="text-align: right;"&gt;
          &lt;Button type="info" size="small" ghost @click="clear"&gt;?????????&lt;/Button&gt;
          &lt;Button type="info" size="small" ghost @click="del"&gt;?????????&lt;/Button&gt;
          &lt;Button type="info" size="small" ghost @click="add"&gt;?????????&lt;/Button&gt;
          &lt;Button type="info" size="small" ghost @click="getRows"&gt;??????????????????&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/VolHeader&gt;
      &lt;vol-<span style="color: #000000;">table
        ref</span>="editTable"<span style="color: #000000;">
        :columns</span>="editTableOptions.columns"<span style="color: #000000;">
        :height</span>="370"<span style="color: #000000;">
        :index</span>="true"<span style="color: #000000;">
        :tableData</span>="editTableOptions.data"<span style="color: #000000;">
        :pagination</span>-hide="true"
      &gt;&lt;/vol-table&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolTable from </span>"@/components/basic/VolTable.vue"<span style="color: #000000;">;
  import VolHeader from </span>"@/components/basic/VolHeader.vue"<span style="color: #000000;">;
  let $doc_vue;
  let doc_options </span>=<span style="color: #000000;"> {
    components: { VolTable, VolHeader },
    created() {
      $doc_vue </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">;
    },
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        editTableOptions: {
          data: [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????</span>
  <span style="color: #000000;">          {
              ExpertId: </span>276<span style="color: #000000;">,
              NotNull: </span>"????????????"<span style="color: #000000;">,
              LimitLenght: </span>"baba"<span style="color: #000000;">,
              UserImg:
                </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x1.jpg"<span style="color: #000000;">,
              LimitNumber: </span>3<span style="color: #000000;">,
              EventClick: </span>"??????????????????"<span style="color: #000000;">,
              FormatString: </span>"2019-11-20"<span style="color: #000000;">,
              BindKeyValue: </span>"1"<span style="color: #000000;">,
              Enable: </span>1<span style="color: #000000;">,
              ReallyName: </span>"???????????????"<span style="color: #000000;">,
              CreateDate: </span>"2018-09-18 17:45:54"<span style="color: #000000;">
            },
            {
              ExpertId: </span>276<span style="color: #000000;">,
              NotNull: </span>"???????????????"<span style="color: #000000;">,
              LimitLenght: </span>"?????????"<span style="color: #000000;">,
              UserImg:
                </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x2.jpg"<span style="color: #000000;">,
              LimitNumber: </span>5<span style="color: #000000;">,
              EventClick: </span>"???????????????"<span style="color: #000000;">,
              FormatString: </span>"2019-11-08"<span style="color: #000000;">,
              BindKeyValue: </span>"2"<span style="color: #000000;">,
              Enable: </span>0<span style="color: #000000;">,
              ReallyName: </span>"?????????????????????"<span style="color: #000000;">,
              filetest:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/github/wordtest.docx" ,//???????????????api?????????????????????????????????static/20191206/xx.xlsx,
              CreateDate: </span>"2018-09-18 17:45:54"<span style="color: #000000;">
            }
          ],
          columns: [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????</span>
  <span style="color: #000000;">          {
              field: </span>"ExpertId", <span style="color: #008000;">//</span><span style="color: #008000;">??????????????????,????????????????????????????????????????????????</span>
              title: "??????ID", <span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
              isKey: <span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
              hidden: <span style="color: #0000ff;">true</span> <span style="color: #008000;">//</span><span style="color: #008000;">????????????</span>
  <span style="color: #000000;">          },
            {
              field: </span>"NotNull"<span style="color: #000000;">,
              title: </span>"????????????"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"text"<span style="color: #000000;"> }
            },
            {
              field: </span>"LimitLenght"<span style="color: #000000;">,
              title: </span>"??????????????????"<span style="color: #000000;">,
              fixed: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"text", min: 2, max: 4<span style="color: #000000;"> }
            },
            {
              field: </span>"UserImg"<span style="color: #000000;">,
              title: </span>"??????"<span style="color: #000000;">,
              type: </span>"img"<span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">
            },
            {
              field: "filetest",
              title: "??????????????????",
              width: 190,
              type:'file'//?????????file???excel??????????????????
          },
            {
              field: </span>"LimitNumber"<span style="color: #000000;">,
              title: </span>"??????????????????"<span style="color: #000000;">,
              width: </span>110<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"number", min: 3, max: 5<span style="color: #000000;"> }
            },
            {
              field: </span>"EventClick"<span style="color: #000000;">,
              title: </span>"?????????????????????"<span style="color: #000000;">,
              type: </span>"string"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              formatter: (row, column) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
                <span style="color: #0000ff;">return</span> "&lt;a&gt;" + row[column.field] + "&lt;/a&gt;"<span style="color: #000000;">;
              },
              click: (row, column) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
                <span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(
                  </span>"?????????????????????????????????????????????columns????????????js???????????????this?????????created??????????????????click??????"<span style="color: #000000;">
                );
              }
            },
            {
              field: </span>"FormatString"<span style="color: #000000;">,
              title: </span>"???????????????"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              formatter: row </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #0000ff;">if</span> (!row.FormatString) <span style="color: #0000ff;">return</span><span style="color: #000000;">;
                </span><span style="color: #008000;">//</span><span style="color: #008000;">????????????????????????????????????</span>
                <span style="color: #0000ff;">return</span> row.FormatString.replace(/-/g, "."<span style="color: #000000;">);
              }
            },
            {
              field: </span>"BindKeyValue"<span style="color: #000000;">,
              title: </span>"?????????????????????Key.Value"<span style="color: #000000;">,
              type: </span>"int"<span style="color: #000000;">,
              edit: { type: </span>"select"<span style="color: #000000;"> },
              bind: {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">???????????????????????????????????????????????????????????????bind?????????????????????????????????????????????????????????????????????</span>
                key: "audit"<span style="color: #000000;">,
                data: [
                  { key: </span>"0", value: "?????????"<span style="color: #000000;"> },
                  { key: </span>"1", value: "????????????"<span style="color: #000000;"> },
                  { key: </span>"2", value: "???????????????"<span style="color: #000000;"> }
                ]
              },
              width: </span>180<span style="color: #000000;">
            },
            {
              field: </span>"Enable"<span style="color: #000000;">,
              title: </span>"????????????KeyValue"<span style="color: #000000;">,
              type: </span>"byte"<span style="color: #000000;">,
              bind: { key: </span>"enable", data: [] }, <span style="color: #008000;">//</span><span style="color: #008000;">????????????data????????????????????????????????????????????????</span>
              width: 150<span style="color: #000000;">,
              edit: { type: </span>"switch"<span style="color: #000000;"> }
            },
            {
              field: </span>"CreateDate"<span style="color: #000000;">,
              title: </span>"??????"<span style="color: #000000;">,
              type: </span>"datetime"<span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">,
              edit: { type: </span>"datetime"<span style="color: #000000;"> }
            }
          ]
        }
      };
    },
    methods: {
      del() {
        let rows </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.editTable.getSelected();
        </span><span style="color: #0000ff;">if</span> (rows.length == 0<span style="color: #000000;">) {
          </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span>.$Message.error("???????????????"<span style="color: #000000;">);
        }
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.editTable.delRow();
      },
      clear() {
        </span><span style="color: #0000ff;">this</span>.editTableOptions.data.splice(0<span style="color: #000000;">);
      },
      add() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.editTableOptions.data.push({});
      },
      getRows() {
        let rows </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.editTable.getSelected();
        </span><span style="color: #0000ff;">if</span> (rows.length == 0<span style="color: #000000;">) {
          </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span>.$Message.error("???????????????"<span style="color: #000000;">);
        }
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(JSON.stringify(rows));
      },
      endEdit() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">??????????????????</span>
        <span style="color: #0000ff;">this</span>.$refs.editTable.edit.rowIndex = -1<span style="color: #000000;">;
      }
    }
  };
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> doc_options;
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`, btnedittable: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;VolHeader icon="md-apps" text="??????button??????"&gt;
        &lt;div slot="content"&gt;??????button???????????????????????????&lt;/div&gt;
      &lt;/VolHeader&gt;
      &lt;vol-<span style="color: #000000;">table
        ref</span>="table1"<span style="color: #000000;">
        :doubleEdit</span>="false"<span style="color: #000000;">
        :columns</span>="eidtWithButton.columns"<span style="color: #000000;">
        :max</span>-height="500"<span style="color: #000000;">
        :index</span>="true"<span style="color: #000000;">
        :tableData</span>="eidtWithButton.data"<span style="color: #000000;">
        :paginationHide</span>="true"
      &gt;&lt;/vol-table&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolTable from </span>"@/components/basic/VolTable.vue"<span style="color: #000000;">;
  import VolHeader from </span>"@/components/basic/VolHeader.vue"<span style="color: #000000;">;

  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
    components: { VolTable, VolHeader },
    created() {},
    methods: {},
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        eidtWithButton: {
          data: [
            {
              test1: </span>"123"<span style="color: #000000;">,
              test2: </span>"1"<span style="color: #000000;">,
              test3: </span>"789"<span style="color: #000000;">,
              test4: </span>"2018-09-18 17:45:54"<span style="color: #000000;">,
              test5: </span>"123"<span style="color: #000000;">
            },
            {
              test1: </span>"123x"<span style="color: #000000;">,
              test2: </span>"0"<span style="color: #000000;">,
              test3: </span>"789x"<span style="color: #000000;">,
              test4: </span>"2020-01-18 13:24:26"<span style="color: #000000;">,
              test5: </span>"123x"<span style="color: #000000;">
            }
          ],
          columns: [
            {
              field: </span>"test1"<span style="color: #000000;">,
              title: </span>"??????1"<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"text", min: 5, max: 7<span style="color: #000000;"> },
              extra: {
                icon: </span>"ios-search"<span style="color: #000000;">,
                text: </span>"?????????????????????"<span style="color: #000000;">,
                style: </span>"line-height: 31px;margin-left: 11px;"<span style="color: #000000;">,
                click: (column, row, tableData) </span>=&gt;<span style="color: #000000;"> {
                  </span><span style="color: #008000;">//</span><span style="color: #008000;">  this.getRows();</span>
                  <span style="color: #0000ff;">this</span>.$Message.error("???????????????????????????"<span style="color: #000000;">);
                }
              },
              width: </span>250<span style="color: #000000;">
            },
            {
              field: </span>"test2"<span style="color: #000000;">,
              title: </span>"??????2"<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"select"<span style="color: #000000;"> },
              onChange: (column, row, tableData) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #0000ff;">this</span>.$Message.error(row["test2"<span style="color: #000000;">]);
              },
              bind: {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">???????????????????????????????????????????????????????????????bind?????????????????????????????????????????????????????????????????????</span>
                key: "audit"<span style="color: #000000;">,
                data: [{ key: </span>"0", value: "???" }, { key: "1", value: "???"<span style="color: #000000;"> }]
              },
              width: </span>130<span style="color: #000000;">
            },
            {
              field: </span>"test3"<span style="color: #000000;">,
              title: </span>"??????3"<span style="color: #000000;">,
              width: </span>160<span style="color: #000000;">
            },
            {
              field: </span>"test4"<span style="color: #000000;">,
              title: </span>"??????4"<span style="color: #000000;">,
              edit: { type: </span>"datetime"<span style="color: #000000;"> },
              width: </span>250<span style="color: #000000;">
            },
            {
              field: </span>"test5"<span style="color: #000000;">,
              title: </span>"??????5"<span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">
            }
          ]
        }
      };
    }
  };
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  voltable: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;vol-<span style="color: #000000;">box
        :model.sync</span>="viewModel"<span style="color: #000000;">
        title</span>="????????????table??????"<span style="color: #000000;">
        icon</span>="md-podium"<span style="color: #000000;">
        :height</span>="450"<span style="color: #000000;">
        :width</span>="600"
      &gt;
        &lt;<span style="color: #000000;">div
          style</span>="display: block;word-break: break-all;word-wrap: break-word;"<span style="color: #000000;">
          slot</span>="content"
        &gt;{{text}}&lt;/div&gt;
        &lt;div slot="footer"&gt;
          &lt;Button type="info" @click="viewModel=false"&gt;??????&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/vol-box&gt;
      &lt;div&gt;
        &lt;VolHeader icon="md-apps" text="???api????????????"&gt;
          &lt;div slot="content"&gt;????????????..&lt;/div&gt;
          &lt;slot&gt;
            &lt;div style="text-align: right;"&gt;
              &lt;Button type="info" ghost @click="remoteLoad" size="small"&gt;???????????????&lt;/Button&gt;
            &lt;/div&gt;
          &lt;/slot&gt;
        &lt;/VolHeader&gt;
        &lt;vol-<span style="color: #000000;">table
          ref</span>="table"<span style="color: #000000;">
          :loadKey</span>="true"<span style="color: #000000;">
          :linkView</span>="viewRow"<span style="color: #000000;">
          :columns</span>="table.columns"<span style="color: #000000;">
          :pagination</span>="table.pagination"<span style="color: #000000;">
          :pagination</span>-hide="false"<span style="color: #000000;">
          :max</span>-height="450"<span style="color: #000000;">
          :url</span>="table.url"<span style="color: #000000;">
          :index</span>="true"<span style="color: #000000;">
          @loadBefore</span>="loadTableBefore"<span style="color: #000000;">
          @loadAfter</span>="loadTableAfter"
        &gt;&lt;/vol-table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolBox from </span>"@/components/basic/VolBox.vue"<span style="color: #000000;">;
  import VolTable from </span>"@/components/basic/VolTable.vue"<span style="color: #000000;">;
  import VolHeader from </span>"@/components/basic/VolHeader.vue"<span style="color: #000000;">;
  let $doc_vue;
  let doc_options </span>=<span style="color: #000000;"> {
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        viewModel: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">,
        text: </span>""<span style="color: #000000;">,
        table: {
          url: </span>"api/App_Expert/getPageData"<span style="color: #000000;">,
          pagination: {
            total: </span>0, <span style="color: #008000;">//</span><span style="color: #008000;">???????????????</span>
            size: 30, <span style="color: #008000;">//</span><span style="color: #008000;">????????????,30,60,100.</span>
            sortName: "CreateDate" <span style="color: #008000;">//</span><span style="color: #008000;">??????????????????????????????????????????</span>
  <span style="color: #000000;">        },
          columns: [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????</span>
  <span style="color: #000000;">          {
              field: </span>"ExpertId", <span style="color: #008000;">//</span><span style="color: #008000;">??????????????????,????????????????????????????????????????????????</span>
              title: "??????ID", <span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
              isKey: <span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
              hidden: <span style="color: #0000ff;">true</span> <span style="color: #008000;">//</span><span style="color: #008000;">????????????</span>
  <span style="color: #000000;">          },
            {
              field: </span>"HeadImageUrl"<span style="color: #000000;">,
              title: </span>"??????"<span style="color: #000000;">,
              type: </span>"img"<span style="color: #000000;">,
              width: </span>160<span style="color: #000000;">
            },
            {
              field: </span>"UserName"<span style="color: #000000;">,
              title: </span>"???????????????"<span style="color: #000000;">,
              link: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">??????link=true?????????????????????????????????????????????????????????????????????</span>
              width: 120<span style="color: #000000;">
            },
            {
              field: </span>"UserTrueName"<span style="color: #000000;">,
              title: </span>"?????????"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">
            },
            {
              field: </span>"AuditStatus"<span style="color: #000000;">,
              title: </span>"????????????"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              bind: {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">???????????????????????????????????????????????????????????????bind?????????????????????????????????????????????????????????????????????</span>
                key: "audit"<span style="color: #000000;">,
                data: []
              }
            },
            {
              field: </span>"ReallyName"<span style="color: #000000;">,
              title: </span>"????????????"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              click: (row, column) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????</span>
                let msg =
                  "??????????????????????????????????????????,????????????????????????:???" +<span style="color: #000000;">
                  row.ReallyName </span>+
                  "???"<span style="color: #000000;">;
                </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(msg);
                </span><span style="color: #008000;">//</span><span style="color: #008000;"> $doc_vue.$Message.error(msg);</span>
  <span style="color: #000000;">            },
              formatter: () </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">????????????????????????????????????</span>
                <span style="color: #0000ff;">return</span> "&lt;a&gt;??????&lt;/a&gt;"<span style="color: #000000;">;
              }
            }
          ]
        }
      };
    },
    components: { VolTable, VolBox, VolHeader },
    created() {
      $doc_vue </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">;
    },
    methods: {
      viewRow(row, column) {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">??????linkView???????????????????????????click???formatter?????????????????????linkView??????????????????</span>
        <span style="color: #0000ff;">this</span>.text =
          "?????????????????????????????????????????????????????????" +<span style="color: #000000;"> JSON.stringify(row);
        </span><span style="color: #0000ff;">this</span>.viewModel = <span style="color: #0000ff;">true</span><span style="color: #000000;">;
        </span><span style="color: #008000;">//</span><span style="color: #008000;">  this.$message.error(JSON.stringify(row));</span>
  <span style="color: #000000;">    },
      loadTableBefore(param, callBack) {
        callBack(true);
        &nbsp; &nbsp; /*???????????????(?????????????????????????????????????????????loadBefore????????????:<br />
          &nbsp; &nbsp; &nbsp; &nbsp; loadBefore=(param, callBack)=&gt;{<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; param.wheres = [{ name: "PhoneNo", value: "13419098211" }];<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; callBack(true);<br />
          &nbsp; &nbsp; &nbsp; &nbsp; })<br />
          &nbsp; &nbsp; &nbsp; */<br />   },
      loadTableAfter(data, callBack) {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">??????????????????????????????????????????????????????????????????????????????????????????</span>
        console.log("???????????????" +<span style="color: #000000;"> data);
        callBack(</span><span style="color: #0000ff;">true</span>); <span style="color: #008000;">//</span><span style="color: #008000;">??????</span>
  <span style="color: #000000;">    },
      remoteLoad() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">?????????????????????????????????,???????????????????????????????????????????????????????????????</span>
        <span style="color: #008000;">//</span><span style="color: #008000;">????????????????????????getPageData??????,??????????????????,???:</span>
        <span style="color: #008000;">//</span><span style="color: #008000;"> let where={wheres:[{"name":"UserTrueName","value":"??????",displayType:"text"}]};</span>
        let where =<span style="color: #000000;"> {};
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.table.load(where);
      }
    }
  };
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> doc_options;
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  volupload: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;div class="upload-container"&gt;
        &lt;div class="upload-item"&gt;
          &lt;<span style="color: #000000;">VolUpload
            :url</span>="url"<span style="color: #000000;">
            :upload</span>-before="uploadBefore"<span style="color: #000000;">
            :upload</span>-after="uploadAfter"<span style="color: #000000;">
            :on</span>-change="onChange"
          &gt;
            &lt;div&gt;?????????????????????&lt;/div&gt;
          &lt;/VolUpload&gt;
        &lt;/div&gt;
        &lt;div class="upload-item"&gt;
          &lt;<span style="color: #000000;">VolUpload
            :autoUpload</span>="false"<span style="color: #000000;">
            :multiple</span>="true"<span style="color: #000000;">
            :max</span>-file="2"<span style="color: #000000;">
            :excel</span>="true"<span style="color: #000000;">
            :url</span>="url"<span style="color: #000000;">
            :upload</span>-before="uploadBefore"<span style="color: #000000;">
            :upload</span>-after="uploadAfter"<span style="color: #000000;">
            :on</span>-change="onChange"
          &gt;
            &lt;div&gt;?????????????????????,??????2???excel??????&lt;/div&gt;
          &lt;/VolUpload&gt;
        &lt;/div&gt;
        &lt;div class="upload-item"&gt;
          &lt;a ref="downFile"&gt;&lt;/a&gt;
          &lt;<span style="color: #000000;">VolUpload
            :multiple</span>="true"<span style="color: #000000;">
            :url</span>="url"<span style="color: #000000;">
            :upload</span>-before="uploadBefore1"<span style="color: #000000;">
            :upload</span>-after="uploadAfter1"<span style="color: #000000;">
            :on</span>-change="onChange"<span style="color: #000000;">
            :fileInfo</span>="fileInfo"
          &gt;
            &lt;div&gt;??????????????????????????????&lt;/div&gt;
          &lt;/VolUpload&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="upload-container"&gt;
        &lt;div class="upload-item"&gt;
          &lt;<span style="color: #000000;">VolUpload
            :url</span>="url"<span style="color: #000000;">
            :img</span>="true"<span style="color: #000000;">
            :multiple</span>="true"<span style="color: #000000;">
            :max</span>-size="null"<span style="color: #000000;">
            :upload</span>-before="uploadBefore"<span style="color: #000000;">
            :upload</span>-after="uploadAfter"<span style="color: #000000;">
            :on</span>-change="onChange"
          &gt;
            &lt;div&gt;?????????????????????,????????????1M&lt;/div&gt;
          &lt;/VolUpload&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="upload-container"&gt;
        &lt;div class="upload-item"&gt;
          &lt;<span style="color: #000000;">VolUpload
            :autoUpload</span>="false"<span style="color: #000000;">
            :url</span>="url"<span style="color: #000000;">
            :img</span>="true"<span style="color: #000000;">
            :upload</span>-before="uploadBefore"<span style="color: #000000;">
            :upload</span>-after="uploadAfter"<span style="color: #000000;">
            :on</span>-change="onChange"
          &gt;
            &lt;div&gt;?????????????????????,??????????????????&lt;/div&gt;
          &lt;/VolUpload&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import docParamTable from </span>"./doc_ParamTable.vue"<span style="color: #000000;">;
  import VolUpload from </span>"@/components/basic/VolUpload.vue"<span style="color: #000000;">;
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
    components: { VolUpload, docParamTable },
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        url: </span>"/api/App_Appointment/Upload"<span style="color: #000000;">,
        model: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
        fileInfo: [
          {
            name: </span>"exceltest.xlsx"<span style="color: #000000;">,
            path:
              </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/github/exceltest.xlsx"<span style="color: #000000;">
          },
          {
            name: </span>"wordtest.docx"<span style="color: #000000;">,
            path:
              </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/github/wordtest.docx"<span style="color: #000000;">
          }
        ],
        loadingStatus: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">
      };
    },
    methods: {
      removeFile(index) {
        </span><span style="color: #0000ff;">this</span>.fileInfo.splice(index, 1<span style="color: #000000;">);
      },
      uploadBefore1(files) {
        </span><span style="color: #0000ff;">this</span>.fileInfo.splice(0<span style="color: #000000;">);
        </span><span style="color: #0000ff;">for</span> (let index = 0; index &lt; files.length; index++<span style="color: #000000;">) {
          const element </span>=<span style="color: #000000;"> files[index];
          </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.fileInfo.push({ name: element.name });
        }
        </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
      },
      uploadAfter1(result, files) {
        </span><span style="color: #0000ff;">if</span> (!result.status) <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
        </span><span style="color: #0000ff;">this</span>.fileInfo.forEach(x =&gt;<span style="color: #000000;"> {
          x.path </span>=<span style="color: #000000;"> result.data;
        });
      },
      getFileNames(files) {
        let arr </span>=<span style="color: #000000;"> [];
        </span><span style="color: #0000ff;">for</span> (let index = 0; index &lt; files.length; index++<span style="color: #000000;">) {
          const element </span>=<span style="color: #000000;"> files[index];
          arr.push(element.name);
        }
        </span><span style="color: #0000ff;">return</span> arr.join(","<span style="color: #000000;">);
      },
      uploadBefore(files) {
        console.log(</span>"??????????????????:" + <span style="color: #0000ff;">this</span><span style="color: #000000;">.getFileNames(files));
        </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
      },
      uploadAfter(result, files) {
        console.log(
          </span>"????????????" +<span style="color: #000000;">
            JSON.stringify(result) </span>+
            "??????????????????:" +
            <span style="color: #0000ff;">this</span><span style="color: #000000;">.getFileNames(files)
        );
        </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
      },
      onChange(files) {
        console.log(</span>"???????????????:" + +<span style="color: #0000ff;">this</span><span style="color: #000000;">.getFileNames(files));
        </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
      }
    }
  };
  </span>&lt;/script&gt;
  &lt;style lang="less" scoped&gt;<span style="color: #000000;">
  .upload</span>-<span style="color: #000000;">container {
    max</span>-<span style="color: #000000;">height: 160px;
    display: flex;
    .upload</span>-<span style="color: #000000;">item {
      flex: </span>1<span style="color: #000000;">;
      padding: 20px;
    }
  }
  </span>&lt;/style&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  uploadExcel: ``, uploadImg: ``, volmenu: ``, viewGrid: ``
}
export default codeString
