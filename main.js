const pageData = {
      nav: {
        title: '个人WEB作品站'
      },
      cover: {
        imageUrl: 'https://picsum.photos/800/80',
        alt: 'cover'
      },
      profile: {
        avatar: 'https://picsum.photos/400',
        nickname: '不见桃花不见秋',
        badge: '年度创作者',
        userId: '1837601513@qq.com',
        age: '21岁',
        bio: '生活需要一点甜 🍬 <br> 自由网页设计师 / 唯美日常记录 / 治愈系人生',
        tags: ['#治愈系', '#网页设计', '#美食'],
        stats: [
          { label: '关注', value: '0' },
          { label: '粉丝', value: '100w+' },
          { label: '获赞', value: '15.6w+' }
        ]
      },
      tabs: [
        { name: '作品', count: 0, active: true },
        { name: '收藏', count: 0, active: false },
        { name: '赞过', count:0 , active: false }
      ],
      posts: [
        {
          link: 'https://jxcms.netlify.app/',
          imageUrl: 'https://picsum.photos/400?random=5',
          title: '简讯聊天CMS系统',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lcy20.netlify.app',
          imageUrl: 'https://lcy20.netlify.app/app.jpg',
          title: '归档-时光卷轴',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://xmsd.netlify.app',
          imageUrl: 'https://xmsd.netlify.app/xmsd.png',
          title: '星漫时段工时APP',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://zwcx.netlify.app',
          imageUrl: 'https://zwcx.netlify.app/zwcx/xzy/app_icon.png',
          title: '追吻辰星软件库',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lcy20.netlify.app/cwcf/',
          imageUrl: 'https://lcy20.netlify.app/cwcf/favicon.png',
          title: '川味厨房',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lcy20.netlify.app/xfwd/',
          imageUrl: 'https://lcy20.netlify.app/xfwd/appicon.jpg',
          title: '刑法文典',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://xyxzys.netlify.app/',
          imageUrl: 'https://xyxzys.netlify.app/xyxzys.jpg',
          title: '星渊·星座运势',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://yshuanyin.netlify.app/',
          imageUrl: 'https://yshuanyin.netlify.app/logo.png',
          title: '上海云上幻音有限公司',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://xmgd.netlify.app/',
          imageUrl: 'https://xmgd.netlify.app/favicon.png',
          title: '星漫归档',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://xmrj.netlify.app/',
          imageUrl: 'https://xmrj.netlify.app/favicon.png',
          title: '星漫日记',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://glweb.netlify.app/',
          imageUrl: 'https://glweb.netlify.app/logo.png',
          title: 'WebGL 分形渲染器',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lgjsxl.netlify.app/',
          imageUrl: 'https://lgjsxl.netlify.app/favicon.png',
          title: '力哥健身训练APP',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://xmylzs.netlify.app/',
          imageUrl: 'https://xmylzs.netlify.app/favicon.png',
          title: '星漫乐理知识APP',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://kalicn.netlify.app/',
          imageUrl: 'https://kalicn.netlify.app/favicon.png',
          title: 'kali知识中文工具手册',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://xxmnq.netlify.app/',
          imageUrl: 'https://xxmnq.netlify.app/favicon.png',
          title: '修仙模拟器',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://ftysl.netlify.app/',
          imageUrl: 'https://ftysl.netlify.app/favicon.png',
          title: '废土余生录',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://acmy.netlify.app/',
          imageUrl: 'https://acmy.netlify.app/favicon.png',
          title: '阿聪木鱼',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lcy20.netlify.app/cxlt',
          imageUrl: 'https://picsum.photos/400?random=4',
          title: '初心聊天论坛php系统',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lcy20.netlify.app/yyffsd',
          imageUrl: 'https://picsum.photos/400?random=3',
          title: '二次元应用商店分发系统',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://lcy20.netlify.app/shequ',
          imageUrl: 'https://picsum.photos/400?random=2',
          title: '心事社区系统',
          likes: '0',
          isLiked: false
        },
        {
          link: 'https://ciyuanliaotian.netlify.app/',
          imageUrl: 'https://picsum.photos/400?random=1',
          title: '次元聊天php系统',
          likes: '0',
          isLiked: false
        }
      ]
    };

    // 自动统计作品数量并同步到 Tabs
    let worksCount = 0;
    pageData.posts.forEach(function(post) {
      worksCount++;
    });
    pageData.tabs.forEach(function(tab) {
      if (tab.name === '作品') {
        tab.count = worksCount;
      }
    });

    // 渲染函数
    function renderHeader() {
      const container = document.getElementById('header-content');
      container.innerHTML = `
        <h1 class="flex-1 text-center text-lg font-medium text-sweet-900">${pageData.nav.title}</h1>
        <div class="flex gap-4 items-center">
          <i class="ri-share-line text-xl text-sweet-900"></i>
          <div class="relative flex items-center">
            <i class="ri-search-line text-sweet-400 text-sm absolute left-2"></i>
            <input type="text" id="searchInput" placeholder="搜索..." class="pl-7 pr-2 py-1 rounded-full border border-sweet-200 text-xs focus:outline-none focus:border-sweet-400 w-20 focus:w-28 transition-all bg-white/80 text-sweet-900">
          </div>
        </div>
      `;
    }

    function renderCover() {
      const container = document.getElementById('cover-container');
      container.innerHTML = `
        <img src="${pageData.cover.imageUrl}" alt="${pageData.cover.alt}" class="w-full h-full object-cover img-fade">
      `;
    }

    function renderProfile() {
      const container = document.getElementById('profile-container');
      const tagsHtml = pageData.profile.tags.map(tag => 
        `<span class="text-xs px-3 py-1 rounded-full bg-sweet-100 text-sweet-500">${tag}</span>`
      ).join('');
      const statsHtml = pageData.profile.stats.map(stat => `
        <div class="text-center">
          <div class="font-bold text-sweet-900">${stat.value}</div>
          <div class="text-xs text-sweet-800/60">${stat.label}</div>
        </div>
      `).join('');

      container.innerHTML = `
        <div class="absolute -top-12 left-5">
          <img src="${pageData.profile.avatar}" alt="avatar" class="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover">
          <div class="absolute bottom-1 right-1 w-5 h-5 bg-sweet-400 border-2 border-white rounded-full flex items-center justify-center">
            <i class="ri-vip-crown-fill text-white text-xs"></i>
          </div>
        </div>
        <div class="flex justify-end pt-3">
          <button class="px-5 py-1.5 rounded-full border border-sweet-300 text-sweet-900 text-sm font-medium bg-white hover:bg-sweet-50 transition-colors">
            编辑资料
          </button>
        </div>
        <div class="mt-3">
          <div class="flex items-center gap-2">
            <h2 class="text-xl font-bold text-sweet-900">${pageData.profile.nickname}</h2>
            <span class="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-sweet-300 to-purple-200 text-sweet-900">${pageData.profile.badge}</span>
          </div>
          <p class="text-sm text-sweet-800/60 mt-1">${pageData.profile.userId} · ${pageData.profile.age}</p>
          <p class="text-sm mt-3 leading-relaxed text-sweet-900">${pageData.profile.bio}</p>
          <div class="flex gap-2 mt-3">${tagsHtml}</div>
          <div class="flex gap-6 mt-4">${statsHtml}</div>
        </div>
      `;
    }

    function renderTabs() {
      const container = document.getElementById('tabs-container');
      container.innerHTML = pageData.tabs.map(tab => {
        const activeClass = tab.active 
          ? 'pb-3 border-b-2 border-sweet-400 text-sweet-900 font-medium text-sm'
          : 'pb-3 text-sweet-800/40 text-sm';
        return `<div class="${activeClass}">${tab.name} (${tab.count})</div>`;
      }).join('');
    }

    function renderPosts() {
      const container = document.getElementById('posts-container');
      container.innerHTML = pageData.posts.map(post => {
        const heartIcon = post.isLiked 
          ? 'ri-heart-3-fill text-sweet-500 text-xs' 
          : 'ri-heart-3-line text-sweet-400 text-xs';
        return `
          <a href="${post.link}" class="block rounded-2xl overflow-hidden bg-white shadow-sm border border-sweet-50 outline-none focus:outline-none" style="-webkit-tap-highlight-color: transparent;">
            <div class="aspect-square overflow-hidden">
              <img src="${post.imageUrl}" alt="post" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-3">
              <p class="text-xs font-medium line-clamp-2 leading-5">${post.title}</p>
              <div class="flex items-center justify-between mt-2">
                <div class="flex items-center gap-1">
                  <i class="${heartIcon}"></i>
                  <span class="text-xs text-sweet-800/50">${post.likes}</span>
                </div>
                <i class="ri-more-line text-sweet-800/30"></i>
              </div>
            </div>
          </a>
        `;
      }).join('');
    }

    // 实时搜索功能
    function initSearch() {
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.trim();
        const container = document.getElementById('posts-container');
        
        if (!keyword) {
          renderPosts();
          return;
        }
        
        const regex = new RegExp(`(${keyword})`, 'gi');
        container.innerHTML = pageData.posts.map(post => {
          if (post.title.toLowerCase().includes(keyword.toLowerCase())) {
            const heartIcon = post.isLiked ? 'ri-heart-3-fill text-sweet-500 text-xs' : 'ri-heart-3-line text-sweet-400 text-xs';
            const highlightedTitle = post.title.replace(regex, '<span class="bg-sweet-300 text-sweet-900 px-0.5 rounded">$1</span>');
            return `
              <a href="${post.link}" class="block rounded-2xl overflow-hidden bg-white shadow-sm border border-sweet-50 outline-none focus:outline-none" style="-webkit-tap-highlight-color: transparent;">
                <div class="aspect-square overflow-hidden">
                  <img src="${post.imageUrl}" alt="post" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-3">
                  <p class="text-xs font-medium line-clamp-2 leading-5">${highlightedTitle}</p>
                  <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center gap-1">
                      <i class="${heartIcon}"></i>
                      <span class="text-xs text-sweet-800/50">${post.likes}</span>
                    </div>
                    <i class="ri-more-line text-sweet-800/30"></i>
                  </div>
                </div>
              </a>
            `;
          }
          return ''; 
        }).join('');
      });
    }

    // 初始化入口
    document.addEventListener('DOMContentLoaded', function() {
      renderHeader();
      renderCover();
      renderProfile();
      renderTabs();
      renderPosts();
      initSearch();

   
    });
