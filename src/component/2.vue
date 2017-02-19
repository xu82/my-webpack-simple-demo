<template>
	<div id="secondComponent">
		<h1>我是第2个页面哦</h1>
		<p>这个是{{author}}写的哦</p>
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				author:'徐八二二二二二二',
				articles:[
					
				]
			}
		},
		mounted:function(){
			console.log(this.$http);
			//参考文档https://aotu.io/notes/2016/10/13/vue2/
			//这里是使用豆瓣的公开GET接口
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
				headers:{},
				emulateJSON:true
			}).then(function(response){
				console.log(response);
				var jData=response.bodyText;
				var oData=JSON.parse(jData);//为啥要使用JSON.parse(str)才能将json字符串转换为对象呢
				var aData=oData.subjects;
				//处理正确的回调
				this.articles=aData;
			},function(response){
				//这里是处理错误的回调
				console.log(response);
				alert('请求错误');
			})		
		}
	}
</script>

<style>
	li{display: block;}
</style>