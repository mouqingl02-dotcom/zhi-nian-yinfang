import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const menu = [
  { key: 'home', icon: '⌂', title: '首页' },
  { key: 'create', icon: '＋', title: '创作' },
  { key: 'tools', icon: '✦', title: '工具' },
  { key: 'community', icon: '◉', title: '社区' },
  { key: 'me', icon: '◎', title: '我的' },
];

function Home({ goCreate }) {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>枝念音坊</Text>
          <Text style={styles.subBrand}>让每一个念头，都成为一首歌。</Text>
        </View>
        <TouchableOpacity style={styles.avatar}>
          <Text style={styles.avatarText}>枝</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.hero} onPress={goCreate}>
        <Text style={styles.heroSmall}>AI 音乐创作</Text>
        <Text style={styles.heroTitle}>把灵感，变成音乐</Text>
        <Text style={styles.heroDesc}>
          写一句话，输入一个故事，或者告诉枝念你的感觉。
        </Text>

        <View style={styles.heroButton}>
          <Text style={styles.heroButtonText}>开始创作  →</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>快速创作</Text>

      <View style={styles.quickGrid}>
        <QuickCard icon="♫" title="AI 写歌" desc="从灵感生成歌曲" onPress={goCreate} />
        <QuickCard icon="✎" title="写歌词" desc="创作属于你的歌词" onPress={goCreate} />
        <QuickCard icon="↻" title="歌曲续写" desc="继续你的音乐故事" onPress={goCreate} />
        <QuickCard icon="◈" title="Remix" desc="重新创造一首歌" onPress={goCreate} />
      </View>

      <Text style={styles.sectionTitle}>我的创作</Text>

      <View style={styles.emptyCard}>
        <Text style={styles.emptyIcon}>♫</Text>
        <Text style={styles.emptyTitle}>还没有作品</Text>
        <Text style={styles.emptyText}>
          开始第一次创作，你的作品会出现在这里。
        </Text>
        <TouchableOpacity style={styles.smallButton} onPress={goCreate}>
          <Text style={styles.smallButtonText}>开始创作</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>枝念音乐社区</Text>

      <View style={styles.communityCard}>
        <Text style={styles.communityTitle}>发现更多创作者</Text>
        <Text style={styles.communityText}>
          分享音乐、歌词和创作灵感，与喜欢音乐的人一起交流。
        </Text>
      </View>
    </ScrollView>
  );
}

function QuickCard({ icon, title, desc, onPress }) {
  return (
    <TouchableOpacity style={styles.quickCard} onPress={onPress}>
      <View style={styles.quickIcon}>
        <Text style={styles.quickIconText}>{icon}</Text>
      </View>
      <Text style={styles.quickTitle}>{title}</Text>
      <Text style={styles.quickDesc}>{desc}</Text>
    </TouchableOpacity>
  );
}

function Create() {
  const [idea, setIdea] = useState('');

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>开始创作</Text>
      <Text style={styles.pageDesc}>告诉枝念，你现在想创作什么。</Text>

      <View style={styles.createBox}>
        <Text style={styles.inputLabel}>创作灵感</Text>
        <TextInput
          style={styles.input}
          placeholder="例如：写一首关于夏夜、遗憾和重新开始的流行歌曲……"
          placeholderTextColor="#999"
          multiline
          value={idea}
          onChangeText={setIdea}
        />

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>✦ 生成歌曲</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>创作类型</Text>

      <View style={styles.typeList}>
        <TypeCard title="完整歌曲" desc="歌词 + 旋律 + 音乐" icon="♫" />
        <TypeCard title="歌词创作" desc="生成、改写、续写歌词" icon="✎" />
        <TypeCard title="歌曲续写" desc="继续已有音乐作品" icon="↻" />
        <TypeCard title="Remix / Cover" desc="重新创造你的音乐" icon="◈" />
      </View>
    </ScrollView>
  );
}

function TypeCard({ title, desc, icon }) {
  return (
    <TouchableOpacity style={styles.typeCard}>
      <View style={styles.typeIcon}>
        <Text style={styles.typeIconText}>{icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.typeTitle}>{title}</Text>
        <Text style={styles.typeDesc}>{desc}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

function Tools() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>创作者工具</Text>
      <Text style={styles.pageDesc}>让创作过程更加自由。</Text>

      <ToolSection
        title="歌词工具"
        items={['歌词生成', '歌词改写', '押韵检查', '扩写 / 缩写']}
      />

      <ToolSection
        title="音乐工具"
        items={['歌曲续写', 'Remix', 'Cover', '音乐风格调整']}
      />

      <ToolSection
        title="音频工具"
        items={['人声分离', '伴奏提取', '音频编辑', '混音辅助']}
      />

      <ToolSection
        title="内容工具"
        items={['歌名生成', '专辑名生成', '封面创意', '宣传文案']}
      />
    </ScrollView>
  );
}

function ToolSection({ title, items }) {
  return (
    <View style={styles.toolSection}>
      <Text style={styles.toolTitle}>{title}</Text>

      <View style={styles.toolGrid}>
        {items.map((item, index) => (
          <TouchableOpacity style={styles.toolItem} key={item}>
            <Text style={styles.toolNumber}>0{index + 1}</Text>
            <Text style={styles.toolItemText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function Community() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>音乐社区</Text>
      <Text style={styles.pageDesc}>发现音乐，也发现新的灵感。</Text>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>推荐</Text>
        <Text style={styles.tab}>热门</Text>
        <Text style={styles.tab}>最新</Text>
        <Text style={styles.tab}>关注</Text>
      </View>

      <PostCard title="今晚的风，适合写一首歌" author="枝念创作者" />
      <PostCard title="把遗憾写进副歌里" author="音乐旅人" />
      <PostCard title="第一次完成自己的 AI 音乐作品" author="新声计划" />
    </ScrollView>
  );
}

function PostCard({ title, author }) {
  return (
    <TouchableOpacity style={styles.postCard}>
      <View style={styles.postCover}>
        <Text style={styles.postMusic}>♫</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.postTitle}>{title}</Text>
        <Text style={styles.postAuthor}>{author}</Text>

        <View style={styles.postStats}>
          <Text style={styles.stat}>♡ 128</Text>
          <Text style={styles.stat}>◌ 36</Text>
          <Text style={styles.stat}>↗ 分享</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Me() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profile}>
        <View style={styles.bigAvatar}>
          <Text style={styles.bigAvatarText}>枝</Text>
        </View>
        <Text style={styles.profileName}>我的枝念</Text>
        <Text style={styles.profileDesc}>开始你的音乐创作之旅</Text>
      </View>

      <View style={styles.statsBox}>
        <View style={styles.statBoxItem}>
          <Text style={styles.statBig}>0</Text>
          <Text style={styles.statLabel}>作品</Text>
        </View>
        <View style={styles.statBoxItem}>
          <Text style={styles.statBig}>0</Text>
          <Text style={styles.statLabel}>收藏</Text>
        </View>
        <View style={styles.statBoxItem}>
          <Text style={styles.statBig}>0</Text>
          <Text style={styles.statLabel}>关注</Text>
        </View>
        <View style={styles.statBoxItem}>
          <Text style={styles.statBig}>0</Text>
          <Text style={styles.statLabel}>粉丝</Text>
        </View>
      </View>

      <View style={styles.menuCard}>
        <MenuItem title="我的作品" />
        <MenuItem title="我的收藏" />
        <MenuItem title="创作记录" />
        <MenuItem title="账户设置" />
      </View>
    </ScrollView>
  );
}

function MenuItem({ title }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>{title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [current, setCurrent] = useState('home');

  const renderPage = () => {
    if (current === 'create') return <Create />;
    if (current === 'tools') return <Tools />;
    if (current === 'community') return <Community />;
    if (current === 'me') return <Me />;

    return <Home goCreate={() => setCurrent('create')} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>{renderPage()}</View>

      <View style={styles.bottomNav}>
        {menu.map((item) => {
          const active = current === item.key;

          return (
            <TouchableOpacity
              key={item.key}
              style={styles.navItem}
              onPress={() => setCurrent(item.key)}
            >
              <Text style={[styles.navIcon, active && styles.navActive]}>
                {item.icon}
              </Text>
              <Text style={[styles.navText, active && styles.navActive]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
  },

  main: {
    flex: 1,
  },

  page: {
    flex: 1,
    backgroundColor: '#F7F7F5',
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  brand: {
    fontSize: 29,
    fontWeight: '800',
    color: '#191919',
    letterSpacing: 1,
  },

  subBrand: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
  },

  hero: {
    backgroundColor: '#191919',
    borderRadius: 24,
    padding: 25,
    marginBottom: 28,
  },

  heroSmall: {
    color: '#BEBEBE',
    fontSize: 13,
    marginBottom: 10,
  },

  heroTitle: {
    color: '#FFF',
    fontSize: 27,
    fontWeight: '800',
    marginBottom: 12,
  },

  heroDesc: {
    color: '#BDBDBD',
    fontSize: 14,
    lineHeight: 22,
  },

  heroButton: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
    marginTop: 22,
  },

  heroButtonText: {
    color: '#191919',
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#222',
    marginBottom: 14,
    marginTop: 3,
  },

  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 27,
  },

  quickCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },

  quickIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F0F0ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  quickIconText: {
    fontSize: 19,
    color: '#222',
  },

  quickTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  quickDesc: {
    fontSize: 11,
    color: '#999',
    marginTop: 5,
    lineHeight: 17,
  },

  emptyCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 27,
  },

  emptyIcon: {
    fontSize: 31,
    marginBottom: 8,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  emptyText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 19,
  },

  smallButton: {
    marginTop: 17,
    backgroundColor: '#191919',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  smallButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },

  communityCard: {
    backgroundColor: '#EAEAE5',
    borderRadius: 20,
    padding: 20,
  },

  communityTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#222',
  },

  communityText: {
    fontSize: 13,
    color: '#777',
    lineHeight: 20,
    marginTop: 8,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#191919',
    marginTop: 8,
  },

  pageDesc: {
    fontSize: 13,
    color: '#888',
    marginTop: 7,
    marginBottom: 24,
  },

  createBox: {
    backgroundColor: '#FFF',
    borderRadius: 21,
    padding: 18,
    marginBottom: 25,
  },

  inputLabel: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },

  input: {
    minHeight: 130,
    borderRadius: 15,
    backgroundColor: '#F5F5F2',
    padding: 15,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#222',
  },

  createButton: {
    backgroundColor: '#191919',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 13,
  },

  createButtonText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 14,
  },

  typeList: {
    gap: 10,
  },

  typeCard: {
    backgroundColor: '#FFF',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  typeIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#F0F0ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  typeIconText: {
    fontSize: 20,
  },

  typeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  typeDesc: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },

  arrow: {
    fontSize: 24,
    color: '#999',
  },

  toolSection: {
    marginBottom: 23,
  },

  toolTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 10,
  },

  toolGrid: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    overflow: 'hidden',
  },

  toolItem: {
    minHeight: 54,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
  },

  toolNumber: {
    fontSize: 11,
    color: '#AAA',
    width: 35,
  },

  toolItemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 14,
    marginBottom: 15,
  },

  tab: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 9,
    color: '#999',
    fontSize: 13,
  },

  activeTab: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 9,
    backgroundColor: '#191919',
    borderRadius: 10,
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },

  postCard: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
  },

  postCover: {
    width: 75,
    height: 75,
    borderRadius: 15,
    backgroundColor: '#E9E9E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  postMusic: {
    fontSize: 27,
  },

  postTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
    marginTop: 2,
  },

  postAuthor: {
    fontSize: 11,
    color: '#999',
    marginTop: 7,
  },

  postStats: {
    flexDirection: 'row',
    gap: 13,
    marginTop: 10,
  },

  stat: {
    fontSize: 10,
    color: '#999',
  },

  profile: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 25,
  },

  bigAvatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  bigAvatarText: {
    color: '#FFF',
    fontSize: 31,
    fontWeight: '800',
  },

  profileName: {
    fontSize: 21,
    fontWeight: '800',
  },

  profileDesc: {
    color: '#999',
    fontSize: 12,
    marginTop: 6,
  },

  statsBox: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    paddingVertical: 17,
    flexDirection: 'row',
    marginBottom: 16,
  },

  statBoxItem: {
    flex: 1,
    alignItems: 'center',
  },

  statBig: {
    fontSize: 18,
    fontWeight: '800',
  },

  statLabel: {
    fontSize: 11,
    color: '#999',
    marginTop: 5,
  },

  menuCard: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    overflow: 'hidden',
  },

  menuItem: {
    height: 55,
    paddingHorizontal: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuItemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },

  bottomNav: {
    height: 68,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    flexDirection: 'row',
    alignItems: 'center',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 20,
    color: '#999',
    marginBottom: 3,
  },

  navText: {
    fontSize: 10,
    color: '#999',
  },

  navActive: {
    color: '#191919',
    fontWeight: '800',
  },
});