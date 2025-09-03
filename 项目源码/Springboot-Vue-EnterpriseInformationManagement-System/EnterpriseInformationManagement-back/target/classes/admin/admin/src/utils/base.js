const base = {
    get() {
        return {
            url : "http://localhost:8080/qiyexinxiguanli/",
            name: "qiyexinxiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiyexinxiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业信息管理系统"
        } 
    }
}
export default base
