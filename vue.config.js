module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                directories:{
                    buildResources: './build'
                },
                appId: "com.iyond.bee",
                copyright: "iyond",
                productName: "Bee Desktop",
                win: {
                    target: [
                        {
                            target: "nsis"
                        }
                    ]
                },
                nsis: {
                    "oneClick": true, // 是否一键安装
                    "allowElevation": false, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": false, // 允许修改安装目录
                    "createDesktopShortcut": true, // 创建桌面图标
                    "createStartMenuShortcut": true,// 创建开始菜单图标
                    "deleteAppDataOnUninstall": false
                },
            }
        }
    }
}