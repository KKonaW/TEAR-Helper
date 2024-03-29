module.exports = [
	{key: "autoHpPot", name: `自动喝HP药水`, type: "bool"},
	{key: "autoMpPot", name: `自动喝MP药水`, type: "bool"},

	{key: "autoServant",  name: `喂养宠物/跟班`, type: "bool"},
	{key: "servantUseAt", name: `设定喂养比例%`, type: "number", min: 1.0, max: 100.0, step: 1.0},

	{key: "autoLoot",   name: `自动拾取`, type: "bool"},
	{key: "lootDelay",  name: `拾取间隔`, type: "number", min: 1.0, max: 99999.0, step: 1.0},
	{key: "filterMode", name: `拾取模式`, type: "select", options: [{name: "过滤拾取",key: 0}, {name: "全部拾取",key: 1}]},
	{key: "lootMode",   name: `触发方式`, type: "select", options: [{name: "自动开始",key: 0}, {name: "手动开始",key: 1}]},
	{key: "ignoreItem", name: `屏蔽-掉落物品`, type: "bool"},

	{key: "distance", name: `摄像机 距离`, type: "number", min: 1.0, max: 99999999.0, step: 1.0},
	{key: "fovValue", name: `摄像机 广角`, type: "range",  min: 30.0, max: 120.0, step: 1.0},
	{key: "camShake", name: `摄像机 抖动`, type: "bool"},

	{key: "dungeon", name: `副本尾王`, type: "bool"},
	{key: "flyMore", name: `无限飞行`, type: "bool"},

	{key: "logNPC",  name: `查询 Spawn_Npc`, type: "bool"},
	{key: "logItemId", name: `查询 Item_Id`, type: "bool"},

	{key: "enchantChance",   name: `显示强化几率(如果可用)`, type: "bool"},
	{key: "evolutionChance", name: `显示升级几率(如果可用)`, type: "bool"},

	{key: "instantEnchant",   name: `瞬间 完成强化`, type: "bool"},
	{key: "instantEvolution", name: `瞬间 完成升级`, type: "bool"},
	{key: "instantRepair",    name: `瞬间 完成维修`, type: "bool"},
	{key: "instantSoulbind",  name: `瞬间 完成绑定`, type: "bool"},
	{key: "instantMerge",     name: `瞬间 完成合并`, type: "bool"},
	{key: "instantDismantle", name: `瞬间 完成分解`, type: "bool"},

	{key: "instantRevive", name: `瞬间 复活起身`, type: "bool"},
	{key: "instantLearn",  name: `瞬间 学满技能`, type: "bool"},

	{key: "falling",      name: `避免高空 坠落伤害`, type: "bool"},
	{key: "afker",        name: `防止挂机 返回大厅`, type: "bool"},
	{key: "noCancelMote", name: `元素晶球 不会打断`, type: "bool"},

	{key: "backstab",     name: `后擒不会失败`, type: "bool"},
	{key: "skipMovie",    name: `跳过影片播放`, type: "bool"},
	{key: "viewUserInfo", name: `查看玩家装备`, type: "bool"},
	{key: "noLockYou",    name: `移除锁定绿字`, type: "bool"},

	{key: "noActionScript",    name: `禁用 镜头缩放 / 传送门动画`, type: "bool"},
	{key: "noSocialAnimation", name: `禁用 玩家空闲动作`, type: "bool"},
	{key: "noScreenEffect",    name: `清除 屏幕扭曲异常`, type: "bool"},

	{key: "vanguard",   name: `自动领取 每日奖励`, type: "bool"},
	{key: "guildQuest", name: `自动接取 公会任务`, type: "bool"},

	{key: "archerTrap", name: `显示PVP弓箭陷阱`, type: "bool"},

	{key: "retaliate", name: `击倒自动 起身反击`, type: "bool"},
	{key: "damageNumber",   name: `输出伤害 hit`, type: "bool"},
	{key: "damageNumberMe", name: `扣血数字 hit`, type: "bool"},
	{key: "healNumber",     name: `治疗队员 hit`, type: "bool"},
	{key: "healNumberMe",   name: `治疗自己 hit`, type: "bool"},
	{key: "mpNumber",       name: `回蓝队员 hit`, type: "bool"},
	{key: "mpNumberMe",     name: `回蓝自己 hit`, type: "bool"},

	{key: "collectBall",    name: `飞行守护吸球`, type: "bool"},
	{key: "deadAnimation",  name: `移除尸体灰烬`, type: "bool"},
	{key: "noArtisanIcon",  name: `移除工匠图标`, type: "bool"},

	{key: "hideNPC",  name: `屏蔽-NPC模型`, type: "bool"},
	{key: "tipNPC",   name: `光柱标记-NPC`, type: "bool"},
	{key: "deadMark", name: `光柱标记-队友尸体`, type: "bool"},

	{key: "tipGather",  name: `光柱标记-采集物`, type: "bool"},
	{key: "gatherCategory", name: "采集物 类型", type: "select",
		options: [
			{name: "1-杂草",key: 1},
			{name: "2-植物",key: 2},
			{name: "3-岩石",key: 3},
			{name: "4-矿石",key: 4},
			{name: "5-无色",key: 5},
			{name: "6-精气",key: 6}
		]
	},

	{key: "fakeBossGage", name: `伪造血条(奥勒昙/哈迦叻/盖洛司)`, type: "bool"},

	{key: "hideTank",    name: `屏蔽坦克(!re 手动刷新)`, type: "bool"},
	{key: "hideDps",     name: `屏蔽打手(!re 手动刷新)`, type: "bool"},
	{key: "hideHeal",    name: `屏蔽补师(!re 手动刷新)`, type: "bool"},
	{key: "onlyMembers", name: `仅显队员(!re 手动刷新)`, type: "bool"}
]
