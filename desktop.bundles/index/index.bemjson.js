({
    block: 'page',
    title: 'Hello, World!',
    styles: [
        { elem: 'css', url: 'index.css' }
    ],
    scripts: [

    ],
    content: {
        block:'landing',
        content:[
        	{
        		elem:'header',
        		phpInclude:'landing__header.php'
        	},
        	{
        		elem:'block'
        	},
        	{
        		elem:'block',
        		mods:{
        			type:'fix-width'
        		}
        	},
        	{
        		elem:'footer'
        	}
        ].map(function(obj){
            if (obj.phpInclude)
            {
                obj.content = '<?php include("'+obj.phpInclude+'");?>';
            }

            return obj;
        })
    }
});
