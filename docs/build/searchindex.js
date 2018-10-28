Search.setIndex({docnames:["index","megatron","megatron.adapters","megatron.io","megatron.layers","megatron.nodes","megatron.utils"],envversion:53,filenames:["index.rst","megatron.rst","megatron.adapters.rst","megatron.io.rst","megatron.layers.rst","megatron.nodes.rst","megatron.utils.rst"],objects:{"":{megatron:[1,0,0,"-"]},"megatron.io":{dataset:[3,0,0,"-"],generator:[3,0,0,"-"],storage:[3,0,0,"-"]},"megatron.io.dataset":{CSVData:[3,1,1,""],PandasData:[3,1,1,""],SQLData:[3,1,1,""]},"megatron.io.generator":{CSVGenerator:[3,2,1,""],PandasGenerator:[3,2,1,""],SQLGenerator:[3,2,1,""]},"megatron.io.storage":{DataStore:[3,2,1,""]},"megatron.io.storage.DataStore":{read:[3,3,1,""],write:[3,3,1,""]},"megatron.layers":{common:[4,0,0,"-"],core:[4,0,0,"-"],image:[4,0,0,"-"],missing:[4,0,0,"-"],numeric:[4,0,0,"-"],shaping:[4,0,0,"-"],text:[4,0,0,"-"],wrappers:[4,0,0,"-"]},"megatron.layers.common":{Cast:[4,2,1,""],Concatenate:[4,2,1,""],TimeSeries:[4,2,1,""]},"megatron.layers.common.Cast":{transform:[4,3,1,""]},"megatron.layers.common.Concatenate":{transform:[4,3,1,""]},"megatron.layers.common.TimeSeries":{transform:[4,3,1,""]},"megatron.layers.core":{Lambda:[4,2,1,""],Layer:[4,2,1,""],StatefulLayer:[4,2,1,""],StatelessLayer:[4,2,1,""]},"megatron.layers.core.Lambda":{kwargs:[4,4,1,""],transform:[4,3,1,""],transform_fn:[4,4,1,""]},"megatron.layers.core.Layer":{fit:[4,3,1,""],kwargs:[4,4,1,""],name:[4,4,1,""],partial_fit:[4,3,1,""],transform:[4,3,1,""]},"megatron.layers.core.StatefulLayer":{fit:[4,3,1,""],kwargs:[4,4,1,""],metadata:[4,4,1,""],name:[4,4,1,""],partial_fit:[4,3,1,""]},"megatron.layers.image":{Downsample:[4,2,1,""],RGBtoBinary:[4,2,1,""],RGBtoGrey:[4,2,1,""],Upsample:[4,2,1,""]},"megatron.layers.image.Downsample":{transform:[4,3,1,""]},"megatron.layers.image.RGBtoBinary":{transform:[4,3,1,""]},"megatron.layers.image.RGBtoGrey":{transform:[4,3,1,""]},"megatron.layers.image.Upsample":{transform:[4,3,1,""]},"megatron.layers.missing":{Impute:[4,2,1,""]},"megatron.layers.missing.Impute":{transform:[4,3,1,""]},"megatron.layers.numeric":{Add:[4,2,1,""],Divide:[4,2,1,""],Dot:[4,2,1,""],Multiply:[4,2,1,""],Subtract:[4,2,1,""]},"megatron.layers.numeric.Add":{transform:[4,3,1,""]},"megatron.layers.numeric.Divide":{transform:[4,3,1,""]},"megatron.layers.numeric.Dot":{transform:[4,3,1,""]},"megatron.layers.numeric.Multiply":{transform:[4,3,1,""]},"megatron.layers.numeric.Subtract":{transform:[4,3,1,""]},"megatron.layers.shaping":{AddDim:[4,2,1,""],Cast:[4,2,1,""],Concatenate:[4,2,1,""],OneHotLabels:[4,2,1,""],OneHotRange:[4,2,1,""],Reshape:[4,2,1,""],SplitDict:[4,2,1,""],TimeSeries:[4,2,1,""]},"megatron.layers.shaping.AddDim":{transform:[4,3,1,""]},"megatron.layers.shaping.Cast":{transform:[4,3,1,""]},"megatron.layers.shaping.Concatenate":{transform:[4,3,1,""]},"megatron.layers.shaping.OneHotLabels":{partial_fit:[4,3,1,""],transform:[4,3,1,""]},"megatron.layers.shaping.OneHotRange":{partial_fit:[4,3,1,""],transform:[4,3,1,""]},"megatron.layers.shaping.Reshape":{transform:[4,3,1,""]},"megatron.layers.shaping.SplitDict":{transform:[4,3,1,""]},"megatron.layers.shaping.TimeSeries":{transform:[4,3,1,""]},"megatron.layers.text":{RemoveStopwords:[4,2,1,""]},"megatron.layers.text.RemoveStopwords":{transform:[4,4,1,""]},"megatron.layers.wrappers":{Keras:[4,2,1,""],Metric:[4,2,1,""],Sklearn:[4,2,1,""]},"megatron.layers.wrappers.Keras":{fit:[4,3,1,""],fit_generator:[4,3,1,""],partial_fit:[4,3,1,""],transform:[4,3,1,""]},"megatron.layers.wrappers.Metric":{transform:[4,3,1,""]},"megatron.layers.wrappers.Sklearn":{fit:[4,3,1,""],metadata:[4,4,1,""],partial_fit:[4,3,1,""],transform:[4,3,1,""]},"megatron.nodes":{core:[5,0,0,"-"],fromfile:[5,0,0,"-"],wrappers:[5,0,0,"-"]},"megatron.nodes.core":{InputNode:[5,2,1,""],KerasNode:[5,2,1,""],Node:[5,2,1,""],TransformationNode:[5,2,1,""]},"megatron.nodes.core.InputNode":{load:[5,3,1,""],name:[5,4,1,""],output:[5,4,1,""],shape:[5,4,1,""],validate_input:[5,3,1,""]},"megatron.nodes.core.KerasNode":{fit:[5,3,1,""],fit_generator:[5,3,1,""],partial_fit:[5,3,1,""]},"megatron.nodes.core.Node":{has_run:[5,4,1,""],inbound_nodes:[5,4,1,""],name:[5,4,1,""],outbound_nodes:[5,4,1,""],output:[5,4,1,""]},"megatron.nodes.core.TransformationNode":{fit:[5,3,1,""],is_fitted:[5,4,1,""],output:[5,4,1,""],partial_fit:[5,3,1,""],transform:[5,3,1,""],transformation:[5,4,1,""]},"megatron.nodes.fromfile":{from_csv:[5,1,1,""],from_dataframe:[5,1,1,""],from_sql:[5,1,1,""]},"megatron.nodes.wrappers":{FeatureSet:[5,2,1,""],Input:[5,2,1,""]},"megatron.nodes.wrappers.FeatureSet":{fit:[5,3,1,""],get:[5,3,1,""],name_to_index:[5,4,1,""],names:[5,4,1,""],nodes:[5,4,1,""],partial_fit:[5,3,1,""],pop:[5,3,1,""],set:[5,3,1,""],transform:[5,3,1,""]},"megatron.pipeline":{Pipeline:[1,2,1,""],load_pipeline:[1,1,1,""]},"megatron.pipeline.Pipeline":{eager:[1,4,1,""],fit:[1,3,1,""],fit_generator:[1,3,1,""],inputs:[1,4,1,""],name:[1,4,1,""],nodes:[1,4,1,""],outputs:[1,4,1,""],partial_fit:[1,3,1,""],path:[1,4,1,""],save:[1,3,1,""],storage:[1,4,1,""],transform:[1,3,1,""],transform_generator:[1,3,1,""]},"megatron.utils":{errors:[6,0,0,"-"],generic:[6,0,0,"-"],hash:[6,0,0,"-"],helpers:[6,0,0,"-"],pipeline:[6,0,0,"-"]},"megatron.utils.errors":{DisconnectedError:[6,5,1,""],ExtraInputsWarning:[6,1,1,""],ShapeError:[6,5,1,""]},"megatron.utils.generic":{IndexedData:[6,2,1,""],delistify:[6,1,1,""],flatten:[6,1,1,""],initializer:[6,1,1,""],isinstance_str:[6,1,1,""],listify:[6,1,1,""]},"megatron.utils.hash":{hash_path:[6,1,1,""]},"megatron.utils.helpers":{safe_divide:[6,1,1,""],vectorize:[6,1,1,""]},"megatron.utils.pipeline":{IndexedData:[6,2,1,""],topsort:[6,1,1,""]},"megatron.visuals":{pipeline_imsave:[1,1,1,""],pipeline_imshow:[1,1,1,""],pipeline_to_dot:[1,1,1,""]},megatron:{io:[3,0,0,"-"],layers:[4,0,0,"-"],nodes:[5,0,0,"-"],pipeline:[1,0,0,"-"],utils:[6,0,0,"-"],visuals:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:exception"},terms:{"1st":5,"class":[1,3,4,5,6],"default":[1,3,4,5],"float":[4,6],"function":[1,4,5],"int":[3,4,5,6],"new":4,"public":[],"return":[1,5,6],"true":[1,4,5],"while":6,For:[3,4],One:4,The:[],Will:[],accept:4,accord:3,adapt:[],add:4,adddim:4,align:5,all:[1,3,4,5],along:4,also:1,alwai:5,ani:[3,4,5],anoth:[4,6],appli:[3,4,5],apply_lay:[],argument:4,arrai:[1,3,4,5,6],arraysfram:[],arriv:6,associ:[3,5],assum:5,averag:4,axi:4,base:[1,3,4,5,6],baseestim:[],batch:[3,4],batch_siz:3,been:5,begin:1,being:[1,3],belong:1,binari:4,black:4,bool:[1,4,5],bottom:1,bring:[],cach:[1,3],cache_dir:[],cache_result:1,calcul:[1,5],call:[1,5],can:1,cast:4,categor:4,cell:4,child:4,classnam:6,colnam:1,column:[3,5],column_stack:[],combin:4,common:1,compress:3,concaten:4,connect:[1,3,5],consecut:4,consid:[],contain:4,convert:[1,4],core:1,correspond:[4,5],could:4,creat:[1,4,5],creation:1,csv:[3,5],csvdata:3,csvgener:3,current:[],custom:4,data:[1,3,4,5,6],data_index:3,data_shap:[],databas:[1,3,5],datafram:[1,3,5],datagener:[],dataset:[1,4],datastor:3,db_conn:3,deduc:[],defeault:1,defin:[1,4],delete_t:[],delim:[],delistifi:6,denomin:6,desir:[1,4,6],determin:[],deviat:[],dict:[1,3,4,5],dictionari:[3,4],dimens:[4,5],dimension:3,direct:1,directori:[],disconnectederror:6,displai:1,divid:[4,6],doe:5,doesn:[],dot:[1,4],downsampl:4,dtype:[],each:[3,4,5],eager:[1,5],eagerrunexcept:[],edg:1,either:5,element:[4,6],encod:4,encount:4,engin:3,english:4,ensur:5,epoch:[1,4,5],error:[1,5],everi:[],except:6,exclude_col:[3,5],execut:[1,5],expand:4,expected_dim:6,extra_input:6,extract:3,extrainputswarn:6,factor:4,fail:[],fals:[4,5],featur:[1,3],feature_cach:[],featureset:5,fed:[1,5],feed:5,feed_dict:[],field:4,file:[1,3,5],filenam:1,filepath:[1,3,5],first:4,fit:[1,4,5],fit_gener:[1,4,5],flatten:6,flattenjson:[],form:3,format:[1,3],format_output:[],from:[1,3,4,5,6],from_csv:5,from_datafram:5,from_sql:5,fromfil:1,full:[1,3,4],func:6,function_bas:4,futur:1,gener:[1,4,5],get:[1,3,5],give:5,given:[1,4,5],graph:1,greyscal:4,group:5,has:5,has_run:5,hash:1,hash_path:6,have:5,helper:1,here:5,hold:[4,5],hot:4,hyperparamet:4,identifi:1,imag:1,implement:1,imput:[4,6],imputation_dict:4,inbound_nod:5,includ:5,increment:1,index:[0,1,3,5,6],index_col:3,index_field:1,indexeddata:6,indic:[1,4,5],inform:4,initi:[5,6],input:[1,3,4,5,6],input_data:[1,3],input_dim:6,input_gener:1,input_shap:[],inputnod:[1,5],insid:5,instanc:4,intact:1,intellig:1,intern:1,ipython:1,is_fit:5,isinstance_str:6,item:4,iter:3,its:5,json:[],jupyt:1,just:1,keep_dim:4,kei:[4,5],kera:4,keras_model:4,kerasnod:5,keyword:4,kwarg:4,label:4,lambda:4,languag:4,layer:[1,5],layer_out_index:5,left:1,length:4,lib:4,light:4,like:[],limit:3,list:[1,3,4,5,6],listifi:6,load:[1,3,5],load_pipelin:1,local:[],localstorag:[],locat:1,logic:4,lookup:3,lookup_ob:[],low:4,luminos:4,magic:[],main:4,make:5,map:5,mask:4,match:5,matrix:4,max_val:[],maxim:1,maximum:[],md5_hash:[],mean:[],megatron_default:1,metadata:[1,4,5],method:4,metric:4,min_val:[],minimum:[],miss:1,missing_input:6,modul:0,more:4,mulitpl:4,multi:3,multipl:5,multipli:4,must:[],n_output:4,name:[1,3,4,5,6],name_to_index:5,nan:4,ndarrai:[3,4,5],necessari:[4,5],new_shap:4,new_typ:4,newest:4,node:[1,4,6],non:4,none:[1,3,4,5,6],notebook:1,nrow:[3,5],number:[3,4,5],numer:[1,6],numpi:[1,4,5,6],obj:6,object:[1,3,4,5,6],observ:[3,4,5],oldest:4,one:[4,5,6],onehot:[],onehotlabel:4,onehotrang:4,ones:6,option:4,out_typ:1,outbound_nod:5,output:[1,3,5,6],output_col:[],output_data:3,output_nam:3,output_nod:6,over:4,overwrit:[1,4],overwritten:4,page:0,panda:[3,5],pandasdata:3,pandasgener:3,param:4,paramet:[1,3,4,5,6],partial:[],partial_fit:[1,4,5],particular:[],pass:[1,4,5],path:[1,5,6],perform:[],pickl:3,pipelin:[3,5],pipeline_imsav:1,pipeline_imshow:1,pipeline_to_dot:1,pipelineerror:[],place:[4,6],plot:1,png:1,pop:5,posit:4,possibl:1,potenti:[],pre:1,pred:4,prefer:4,previous:1,process:[1,3],produc:[1,5],proportion:4,provid:5,pydot:1,queri:[1,3,5],quick:5,rais:5,rang:[],rankdir:1,rather:4,raw:1,read:3,recalcul:[],refit:[],rel:[],relationship:1,remov:4,removestopword:4,replac:4,represent:[1,4],request:[],requir:4,reshap:4,result:[1,3,5],retriev:3,retyp:[],revers:4,rgb:4,rgbtobinari:4,rgbtogrei:4,right:1,roll:4,row:5,run:5,safe_divid:6,save:1,save_dir:1,save_imag:[],save_path:1,scalar:4,search:0,sequenc:4,seri:4,set:[1,3,5],shape:[1,5],shapeerror:[5,6],should:[3,4,5],show:5,shrink:4,singl:[3,5],size:4,sklearn:4,sklearn_metr:4,sklearn_transform:4,sklearntransform:[],some:1,sort:1,space:[],specifi:1,splitdict:4,sql:3,sqldata:3,sqlgener:3,sqlite3:1,sqlite:1,standard:[],state:4,statefullay:4,stateless:4,statelesslay:4,step:1,steps_per_epoch:[1,4,5],storag:1,storage_db:1,store:[1,4,5],str:[1,3,4,5],string:3,structur:5,subclass:4,subtract:4,svg:1,tabl:3,table_nam:3,target:[4,6],termin:6,text:1,than:4,thi:[1,4,5],those:6,through:6,thu:4,time:4,time_axi:4,timeseri:4,timestep:4,togeth:5,top:1,topolog:1,topsort:6,total:3,transform:[1,4,5],transform_fn:4,transform_gener:1,transformationnod:[1,5],transout_typeionnod:6,tupl:[1,4,5],turn:[],type:[1,4,6],uniqu:1,until:5,updat:4,upsampl:4,use:[1,3],used:[1,3],using:4,util:[1,5],valid:[3,5],validate_input:5,valu:[4,5,6],variabl:5,vector:[4,6],version:[1,3],visual:[],wai:1,well:5,what:4,whatev:4,when:[1,4,5],where:[1,4],whether:[1,5],which:[1,4,5,6],whiten:[],who:5,whom:5,window:4,window_s:4,wise:4,within:1,without:1,word:4,work:[],would:[],wrapper:1,write:[3,4],written:4,yield:3,you:[],your:[],zero:[4,6]},titles:["Welcome to Megatron\u2019s documentation!","megatron package","megatron.adapters package","megatron.io package","megatron.layers package","megatron.nodes package","megatron.utils package"],titleterms:{"public":[],adapt:2,common:4,content:[1,2,3,4,5,6],core:[4,5],dataset:3,document:0,error:6,fromfil:5,gener:[3,6],hash:6,helper:6,imag:4,indic:0,input:2,layer:4,megatron:[0,1,2,3,4,5,6],miss:4,modul:[1,2,3,4,5,6],node:5,numer:4,output:2,packag:[1,2,3,4,5,6],pipelin:[1,6],shape:4,storag:3,submodul:[1,2,3,4,5,6],subpackag:1,tabl:0,text:4,util:6,visual:1,welcom:0,wrapper:[4,5]}})