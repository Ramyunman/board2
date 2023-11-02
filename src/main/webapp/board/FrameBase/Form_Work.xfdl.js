(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("title01","26","7","214","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인사관리시스템");
            obj.set_font("30px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","45","60","705","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","1","135","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("사원목록");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","26","127","720","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","110","7","22","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","141","-3","57","37",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("전체");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","233","-3","57","37",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("근무자");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","202","7","22","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","339","-3","57","37",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("퇴사자");
            obj.set_font("16px/normal \"Gulim\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","308","7","22","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","414","3","195","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","621","4","25","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("ImageViewer00");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","180","830","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Div01_Radio00_onitemchanged = function(obj,e)
        {

        };

        this.Div01_Radio00_00_onitemchanged = function(obj,e)
        {

        };

        this.Div01_Radio00_01_onitemchanged = function(obj,e)
        {

        };

        this.Div01_ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.title01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div01.form.Radio00.addEventHandler("onitemchanged",this.Div01_Radio00_onitemchanged,this);
            this.Div01.form.Static00_00.addEventHandler("onclick",this.Div01_Static00_00_onclick,this);
            this.Div01.form.Radio00_00.addEventHandler("onitemchanged",this.Div01_Radio00_00_onitemchanged,this);
            this.Div01.form.Radio00_01.addEventHandler("onitemchanged",this.Div01_Radio00_01_onitemchanged,this);
            this.Div01.form.ImageViewer00.addEventHandler("onclick",this.Div01_ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
