CKEDITOR.dialog.add('containerstyle', function (editor) {

    function getRegExp(str) {
        var specialArray = ['\\', '$', '(', ')', '*', '+', '.', '[', ']', '?', '^', '{', '}', '|'];
        for (var i = 0; i < specialArray.length; i++) {
            var _special = '\\' + specialArray[i];
            str = str.replace(new RegExp(_special, 'g'), _special);
        }
        return new RegExp(str);
    }

    var setupColumn = function () {
        var id = this.id;
        var td=  editor.elementPath().contains('td');
        if (td) {
            var $td = $(td.$);
            var _emrstyle = $td.attr('_emrstyle');
            this.setValue(!!_emrstyle && _emrstyle.indexOf(id) !== -1);
        }
    };
    var commitColumn = function (container) {
        var _this = this;
        var id = _this.id;
        var td=  editor.elementPath().contains('td');
        if (td) {
            var $container = $(td.$);
            var $trs = $container.parents('table:first').find('tr');
            $trs.each(function () {
                var $td = $(this).find('td:eq(' + $container.prevAll().size() + ')');
                if ($td.size() === 1) {
                    var _emrstyle = $td.attr('_emrstyle') || '';
                    if (_this.getValue()) {
                        if (_emrstyle.indexOf(id) === -1) {
                            _emrstyle = _emrstyle + ' ' + id;
                        }
                    } else {
                        if (_emrstyle.indexOf(id) !== -1) {
                            _emrstyle = _emrstyle.replace(getRegExp(id), '');
                        }
                    }
                    if (_emrstyle.trim() === '') {
                        $td.removeAttr('_emrstyle');
                        $td.removeAttr('contenteditable');
                    } else {
                        $td.attr('_emrstyle', _emrstyle);
                        if (_emrstyle.indexOf('_if(disable)') === -1) {
                            $td.removeAttr('contenteditable'); 
                        }
                    }
                }
            })
        }
    };

    var setupRow = function () {
        var id = this.id;
        var td=  editor.elementPath().contains('td');
        if (td) {
            var $td = $(td.$);
            var _emrstyle = $td.attr('_emrstyle');
            this.setValue(!!_emrstyle && _emrstyle.indexOf(id) !== -1);
        }
    };
    var commitRow = function (container) {
        var _this = this;
        var id = _this.id;
        var td=  editor.elementPath().contains('td');
        if (td) {
            var $container = $(td.$);
            $container.parent().find('td').each(function () {
                var $td = $(this)
                var _emrstyle = $td.attr('_emrstyle') || '';
                if (_this.getValue()) {
                    if (_emrstyle.indexOf(id) === -1) {
                        _emrstyle = _emrstyle + ' ' + id;
                    }
                } else {
                    if (_emrstyle.indexOf(id) !== -1) {
                        _emrstyle = _emrstyle.replace(getRegExp(id), '');
                    }
                }
                if (_emrstyle.trim() === '') {
                    $td.removeAttr('_emrstyle');
                    $td.removeAttr('contenteditable');
                } else {
                    $td.attr('_emrstyle', _emrstyle);
                    if (_emrstyle.indexOf('_if(disable)') === -1) {
                        $td.removeAttr('contenteditable'); 
                    }
                }
            })
        }
    };


    var setupTr = function (container) {
        var id = this.id;
        if (container.getName() && (container.getName().toLowerCase() === 'td' || container.getName().toLowerCase() === 'th' )) {
            var $container = $(container.$);
            var _emrstyle = $container.parent().attr('_emrstyle');
            this.setValue(!!_emrstyle && _emrstyle.indexOf(id) !== -1);
        }
    };

    var commitTr = function (container) {
        var _this = this;
        var id = _this.id;
        if (container.getName() && (container.getName().toLowerCase() === 'td' || container.getName().toLowerCase() === 'th' )) {
            var $container = $(container.$);
            var $tr = $container.parent();
            var _emrstyle = $tr.attr('_emrstyle') || '';
            if (_this.getValue()) {
                if (_emrstyle.indexOf(id) === -1) {
                    _emrstyle = _emrstyle + ' ' + id;
                }
            } else {
                if (_emrstyle.indexOf(id) !== -1) {
                    _emrstyle = _emrstyle.replace(getRegExp(id), '');
                }
            }
            if (_emrstyle.trim() === '') {
                $tr.removeAttr('_emrstyle');
            } else {
                $tr.attr('_emrstyle', _emrstyle);
            }
        }
    };

    var setupCell = function (container) {
        var id = this.id;
        if (container.getName() && (container.getName().toLowerCase() === 'td' || container.getName().toLowerCase() === 'th' )) {
            var $container = $(container.$);
            var _cellstyle = $container.attr(id);
            _cellstyle && this.setValue(true);
        }
    };

    var commitCell = function (container) {
        var _this = this;
        var id = _this.id;
        if (container.getName() && (container.getName().toLowerCase() === 'td' || container.getName().toLowerCase() === 'th' )) {
            var $container = $(container.$);
            var _style = $container.attr(id) || '';
            if (_this.getValue()) {
                $container.attr(id, true);
            } else {
               $container.removeAttr(id)
            }
        }
    };

    var setupThead = function (container) {
        var id = this.id;
        var thead=  editor.elementPath().contains('thead');
        if (thead) {
            var $thead = $(thead.$);
            var _emrstyle = $thead.attr('_emrstyle');
            this.setValue(!!_emrstyle && _emrstyle.indexOf(id) !== -1);
        }
    };

    var commitThead = function (container) {
        var _this = this;
        var id = _this.id;
        var thead=  editor.elementPath().contains('thead');
        if (thead) {
            var $thead = $(thead.$);
            var _emrstyle = $thead.attr('_emrstyle') || '';
            if (_this.getValue()) {
                if (_emrstyle.indexOf(id) === -1) {
                    _emrstyle = _emrstyle + ' ' + id;
                }
            } else {
                if (_emrstyle.indexOf(id) !== -1) {
                    _emrstyle = _emrstyle.replace(getRegExp(id), '');
                }
            }
            if (_emrstyle.trim() === '') {
                $thead.removeAttr('_emrstyle');
                $thead.removeAttr('contenteditable'); 
            } else {
                $thead.attr('_emrstyle', _emrstyle);
                if (_emrstyle.indexOf('_if(disable)') === -1) {
                    $td.removeAttr('contenteditable'); 
                }
            }
        }
    };


    return {
        title: '容器样式',
        minWidth: 600,
        minHeight: 380,
        contents: [
            {
                id: 'nodeStyle',
                label: '节点样式设置',
                elements: [
                    {
                        type: 'html',
                        html: '<iframe class="containerstyleHtml" style="height:360px;width: 100%;"></iframe>',
                    }
                ]
            },
            {
                id: 'cellAttribute',
                label: '单元格设置',
                elements: [
                    {
                        type: 'fieldset',
                        className: 'cke_dialog_find_fieldset',
                        label: '表格单元格整列添加',
                        style: 'margin-top:20px',
                        children: [
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(overflow){breakline}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '文本溢出单元格间换行显示',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }, {
                                    type: 'checkbox',
                                    id: '_if(forcebreak_by_#){breakline}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '遇‘#’在单元格间强制换行',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(group){show_last_in_group}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '一条记录显示多行，护士签名在最后一行',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }, {
                                    type: 'checkbox',
                                    id: '_if(group){show_first_in_group}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '一条记录显示多行，日期显示在第一行',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(user2img){diagonal_by_-111}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '两个护士签名以‘/’分隔',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }, {
                                    type: 'checkbox',
                                    id: '_if(page){show_first}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '每页首行显示完整日期时间',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(contain_/){diagonal_by_-111}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '将含有‘/’字符以斜线分割显示',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }, {
                                    type: 'checkbox',
                                    id: '_if(overflow){breakparagraph}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '文本溢出单元格内换行显示',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(overflow){cell.shrink}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '文本较多溢出时缩小显示（12px）',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }, {
                                    type: 'checkbox',
                                    id: '_if(nonumber){cell.enlarge}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '非数字文本加大显示（17px）',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(duplicate){show_first}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '多行同一日期(或时间)时仅显示第一行日期(或时间)（只针对日期时间分开显示的情况）',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                                // }, {
                                //     type: 'checkbox',
                                //     id: '_if(true){char2img}',
                                //     isChanged: false,
                                //     controlStyle: 'width:5em',
                                //     label: '_if(true){char2img}',
                                //     setup: setupColumn,
                                //     commit: commitColumn
                                // }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(disable){column_edit}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '表格单元格整列不可编辑',
                                    setup: setupColumn,
                                    commit: commitColumn
                                },{
                                    type: 'checkbox',
                                    id: '_if(date_/){diagonal_by_-111}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '日期以斜线分割显示',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            },
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(group){show_signature_first_in_group}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '一条记录显示多行，护士签名在第一行',
                                    setup: setupColumn,
                                    commit: commitColumn
                                }]
                            }
                        ]
                    },
                    {
                        type: 'fieldset',
                        className: 'cke_dialog_find_fieldset',
                        label: '表格单元格整行添加',
                        style: 'margin-top:20px',
                        children: [
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(contain_+){color(red)}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '含‘+’文本标红显示（过敏药）',
                                    setup: setupRow,
                                    commit: commitRow
                                }, {
                                    type: 'checkbox',
                                    id: '_if(true){join_by_/}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '同一单元格两数据元以‘/’拼接显示（血压）',
                                    setup: setupRow,
                                    commit: commitRow
                                }]
                            }, {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(user2img){diagonal_by_-222}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '两个护士签名以‘/’分隔',
                                    setup: setupRow,
                                    commit: commitRow
                                },{
                                    type: 'checkbox',
                                    id: '_if(disable){row_edit}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '表格单元格整行不可编辑',
                                    setup: setupRow,
                                    commit: commitRow
                                }]
                            },
                        ]
                    },
                    {
                        type: 'fieldset',
                        className: 'cke_dialog_find_fieldset',
                        label: '表格行添加',
                        style: 'margin-top:20px',
                        children: [
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(true){rowArrange}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '非数字以一上一下错位显示(呼吸数据)',
                                    setup: setupTr,
                                    commit: commitTr
                                }]
                            }
                        ]
                    },
                    {
                        type: 'fieldset',
                        className: 'cke_dialog_find_fieldset',
                        label: '表头添加',
                        style: 'margin-top:20px',
                        id:'table_head_add',
                        children: [
                            {
                                type: 'hbox',
                                padding: 0,
                                children: [{
                                    type: 'checkbox',
                                    id: '_if(disable){thead_edit}',
                                    isChanged: false,
                                    controlStyle: 'width:5em',
                                    label: '表头不可编辑',
                                    setup: setupThead,
                                    commit: commitThead
                                }]
                            }
                        ]
                    }
                    // },
                    // {
                    //     type: 'fieldset',
                    //     className: 'cke_dialog_find_fieldset',
                    //     label: '单元自定义',
                    //     style: 'margin-top:20px',
                    //     children: [
                    //         {
                    //             type: 'hbox',
                    //             padding: 0,
                    //             children: [{
                    //                 type: 'checkbox',
                    //                 id: '_color-red',
                    //                 isChanged: false,
                    //                 controlStyle: 'width:5em',
                    //                 label: '_color-red',
                    //                 setup: setupCell,
                    //                 commit: commitCell
                    //             }]
                    //         }
                    //     ]
                    // }
                ]
            }
        ],
        onShow: function () {
            // var designMode = editor.HMConfig.designMode;
            // if (!designMode) {
                this.hidePage('cellAttribute');
            // }
            var paperOptPx = editor.plugins.paper.paperOptPx;
            var paperSizeStr = editor.document.getBody().getAttribute('data-hm-paperSize');
            var paperSize = paperSizeStr && paperSizeStr.split('$');
            if (!paperSize || paperSize.length != 2 || !paperOptPx[paperSize[0]]) {
                editor.showNotification('请设置纸张(齿轮状图标)后再执行操作');
                this.hide();
                return;
            }
            // var container = editor.elementPath().lastElement;
            // var tableHeadEdit = this.getContentElement('cellAttribute', 'table_head_add');
            // var thead = editor.elementPath().contains('thead');
            // if (!thead) {
            //     $("#" + tableHeadEdit.domId).hide();
            // } else {
            //     $("#" + tableHeadEdit.domId).show();
            // }
            // container = container.getAscendant({td: 1, p: 1, th:1, strong:1, span:1}, true);
            // if (container) {
            //     this.setupContent(container);
            // }
            var _this = this;
            
            // 隐藏iframe直到内容加载完成
            $('.containerstyleHtml').hide();
            
            var init = function() {
                $('.containerstyleHtml').show();
                if (_this._.currentTabId === 'nodeStyle') {
                    var lastElement = editor.elementPath() ? editor.elementPath().lastElement : null;
                    window.initNodeStyle && window.initNodeStyle(lastElement ? $(lastElement.$) : $(editor.document.getBody().$));
                }
            }
            
            var iframe = $('.containerstyleHtml')[0];
            // 使用getTplHtml加载模板内容
            var sdkHost = editor.HMConfig.sdkHost || '';
            $.getTplHtml(sdkHost + '/plugins/containerstyle/dialogs/nodeStyle.html', {
                sdkHost: sdkHost
            }, function(bodyHtml) {
                var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(bodyHtml);
                iframeDoc.close();
                
                // 设置onload事件
                if (iframe.attachEvent) {
                    iframe.attachEvent("onload", function() {
                        init();
                    });
                } else {
                    iframe.onload = function() {
                        init();
                    };
                }
            });
        },
        onOk: function () {
            var container = editor.elementPath().lastElement;
            container = container.getAscendant({td: 1, p: 1, th:1, strong:1, span:1}, true);
            if (container) {
                this.commitContent(container);
            }
            if (this._.currentTabId === 'nodeStyle') {
                editor.fire('saveSnapshot');
                window.commitSelectedNodeStyle && window.commitSelectedNodeStyle();
            }

        }
    };
});
