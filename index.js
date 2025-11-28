
// 食材数据
const breakfastFoodData = {
  '谷物类': [
    { id: 'quinoa', name: '藜麦', cal: 1.2, protein: 0.04, fat: 0.02, carb: 0.21, type: 'carbohydrate' },
    { id: 'bread', name: '全麦面包', cal: 2.65, protein: 0.09, fat: 0.034, carb: 0.49, type: 'carbohydrate' },
    {
      id: 'muesli',
      name: '燕麦片',
      cal: 3.7,
      protein: 0.12,
      fat: 0.07,
      carb: 0.67,
      type: 'carbohydrate',
      options: [
        { name: '有麸燕麦片', cal: 3.7, protein: 0.12, fat: 0.07, carb: 0.67 },
        { name: '无麸燕麦片', cal: 3.5, protein: 0.11, fat: 0.06, carb: 0.65 },
        { name: '燕麦麸', cal: 2.4, protein: 0.14, fat: 0.03, carb: 0.45 }
      ]
    },
    { id: 'buckwheat', name: '荞麦', cal: 3.43, protein: 0.13, fat: 0.034, carb: 0.71, type: 'carbohydrate' }
  ],
  '蛋白质类': [
    {
      id: 'eggs',
      name: '鸡蛋',
      cal: 1.48,
      protein: 0.13,
      fat: 0.11,
      carb: 0.01,
      type: 'protein',
      unit: '个',
      options: [
        { name: '小号(45g)', weight: 45, cal: 1.48, protein: 0.13, fat: 0.11, carb: 0.01 },
        { name: '中号(55g)', weight: 55, cal: 1.48, protein: 0.13, fat: 0.11, carb: 0.01 },
        { name: '大号(65g)', weight: 65, cal: 1.48, protein: 0.13, fat: 0.11, carb: 0.01 },
        { name: '鸡蛋白', cal: 0.52, protein: 0.11, fat: 0, carb: 0.02 }
      ]
    },
    {
      id: 'milk',
      name: '牛奶',
      cal: 0.65,
      protein: 0.03,
      fat: 0.035,
      carb: 0.05,
      type: 'protein',
      options: [
        { name: '全脂牛奶', cal: 0.65, protein: 0.03, fat: 0.035, carb: 0.05 },
        { name: '脱脂牛奶', cal: 0.35, protein: 0.034, fat: 0.001, carb: 0.05 },
        { name: '低脂牛奶', cal: 0.42, protein: 0.034, fat: 0.01, carb: 0.05 }
      ]
    },
    {
      id: 'yogurt',
      name: '酸奶',
      cal: 0.61,
      protein: 0.035,
      fat: 0.017,
      carb: 0.047,
      type: 'protein',
      options: [
        { name: '希腊酸奶', cal: 0.61, protein: 0.035, fat: 0.017, carb: 0.047 },
        { name: '脱脂酸奶', cal: 0.56, protein: 0.038, fat: 0.005, carb: 0.08 }
      ]
    },
    { id: 'cottageCheese', name: '茅屋芝士', cal: 0.98, protein: 0.11, fat: 0.045, carb: 0.03, type: 'protein' },
    { id: 'turkeyBreast', name: '火鸡胸肉', cal: 1.35, protein: 0.29, fat: 0.02, carb: 0, type: 'protein' },
    { id: 'proteinPowder', name: '蛋白粉', cal: 3.8, protein: 0.78, fat: 0.05, carb: 0.05, type: 'protein' }
  ],
  '水果类': [
    { id: 'banana', name: '香蕉', cal: 0.89, protein: 0.011, fat: 0.003, carb: 0.23, type: 'dietaryFiber' },
    { id: 'berries', name: '混合莓果', cal: 0.57, protein: 0.0074, fat: 0.0033, carb: 0.14, type: 'dietaryFiber' },
    { id: 'apple', name: '苹果', cal: 0.52, protein: 0.0026, fat: 0.0017, carb: 0.14, type: 'dietaryFiber' },
    { id: 'orange', name: '橙子', cal: 0.47, protein: 0.0094, fat: 0.0012, carb: 0.12, type: 'dietaryFiber' },
    { id: 'grapefruit', name: '西柚', cal: 0.42, protein: 0.008, fat: 0.001, carb: 0.11, type: 'dietaryFiber' }
  ],
  '健康脂肪': [
    {
      id: 'nuts',
      name: '坚果',
      cal: 6.07,
      protein: 0.2,
      fat: 0.54,
      carb: 0.21,
      type: 'fatty',
      options: [
        { name: '混合坚果', cal: 6.07, protein: 0.2, fat: 0.54, carb: 0.21 },
        { name: '杏仁', cal: 5.78, protein: 0.21, fat: 0.49, carb: 0.22 },
        { name: '核桃', cal: 6.54, protein: 0.15, fat: 0.65, carb: 0.14 }
      ]
    },
    { id: 'chiaSeeds', name: '奇亚籽', cal: 4.86, protein: 0.17, fat: 0.31, carb: 0.42, type: 'fatty' },
    { id: 'flaxseeds', name: '亚麻籽', cal: 5.34, protein: 0.18, fat: 0.42, carb: 0.29, type: 'fatty' },
    { id: 'avocado', name: '牛油果', cal: 1.6, protein: 0.02, fat: 0.15, carb: 0.09, type: 'fatty' },
    {
      id: 'peanutButter',
      name: '花生酱',
      cal: 5.88,
      protein: 0.22,
      fat: 0.5,
      carb: 0.2,
      type: 'fatty'
    }
  ]
};

const regularFoodData = {
  '蛋白质': [
    { id: 'chicken', name: '鸡胸肉', cal: 1.65, protein: 0.31, fat: 0.03, carb: 0, type: 'protein' },
    {
      id: 'chickenLeg',
      name: '鸡腿',
      cal: 1.8,
      protein: 0.27,
      fat: 0.09,
      carb: 0,
      type: 'protein',
      options: [
        { name: '带皮带骨鸡腿', cal: 1.8, protein: 0.27, fat: 0.09, carb: 0 },
        { name: '去皮去骨鸡腿', cal: 1.5, protein: 0.28, fat: 0.04, carb: 0 }
      ]
    },
    { id: 'beef', name: '牛腱', cal: 2.0, protein: 0.21, fat: 0.13, carb: 0, type: 'protein' },
    { id: 'pork', name: '猪里脊', cal: 1.45, protein: 0.21, fat: 0.07, carb: 0, type: 'protein' },
    { id: 'fish', name: '三文鱼', cal: 2.05, protein: 0.22, fat: 0.13, carb: 0, type: 'protein' },
    { id: 'tuna', name: '金枪鱼', cal: 1.84, protein: 0.30, fat: 0.06, carb: 0, type: 'protein' },
    { id: 'shrimp', name: '虾仁', cal: 0.85, protein: 0.20, fat: 0.01, carb: 0, type: 'protein' },
    { id: 'whiteFish', name: '白鱼肉', cal: 1.0, protein: 0.21, fat: 0.01, carb: 0, type: 'protein' },
    { id: 'shellfish', name: '贝类', cal: 0.85, protein: 0.18, fat: 0.01, carb: 0.03, type: 'protein' },
    { id: 'tofu', name: '豆腐', cal: 0.76, protein: 0.08, fat: 0.045, carb: 0.019, type: 'protein' },
    { id: 'tempeh', name: '天贝', cal: 1.93, protein: 0.19, fat: 0.11, carb: 0.09, type: 'protein' },
    { id: 'lentils', name: '扁豆', cal: 1.16, protein: 0.09, fat: 0.004, carb: 0.20, type: 'protein' }
  ],
  '碳水化合物': [
    { id: 'rice', name: '白米饭', cal: 1.3, protein: 0.025, fat: 0.01, carb: 0.28, type: 'carbohydrate' },
    { id: 'brownRice', name: '糙米饭', cal: 1.23, protein: 0.026, fat: 0.009, carb: 0.25, type: 'carbohydrate' },
    { id: 'blackRice', name: '黑米', cal: 1.33, protein: 0.028, fat: 0.01, carb: 0.27, type: 'carbohydrate' },
    { id: 'sweetPotato', name: '红薯', cal: 0.9, protein: 0.02, fat: 0.001, carb: 0.21, type: 'carbohydrate' },
    { id: 'potato', name: '土豆', cal: 0.77, protein: 0.02, fat: 0.001, carb: 0.17, type: 'carbohydrate' },
    { id: 'pumpkin', name: '南瓜', cal: 0.26, protein: 0.01, fat: 0.001, carb: 0.065, type: 'carbohydrate' },
    { id: 'pasta', name: '全麦意面', cal: 1.31, protein: 0.05, fat: 0.009, carb: 0.25, type: 'carbohydrate' },
    { id: 'buckwheat', name: '荞麦', cal: 3.43, protein: 0.13, fat: 0.034, carb: 0.71, type: 'carbohydrate' },
    { id: 'corn', name: '玉米', cal: 0.86, protein: 0.032, fat: 0.012, carb: 0.19, type: 'carbohydrate' }
  ],
  '蔬菜': [
    { id: 'broccoli', name: '西兰花', cal: 0.34, protein: 0.028, fat: 0.004, carb: 0.07, type: 'dietaryFiber' },
    { id: 'spinach', name: '菠菜', cal: 0.23, protein: 0.029, fat: 0.004, carb: 0.036, type: 'dietaryFiber' },
    { id: 'kale', name: '羽衣甘蓝', cal: 0.49, protein: 0.043, fat: 0.009, carb: 0.09, type: 'dietaryFiber' },
    { id: 'carrot', name: '胡萝卜', cal: 0.41, protein: 0.009, fat: 0.002, carb: 0.1, type: 'dietaryFiber' },
    { id: 'tomato', name: '番茄', cal: 0.18, protein: 0.009, fat: 0.002, carb: 0.039, type: 'dietaryFiber' },
    { id: 'bellPepper', name: '彩椒', cal: 0.31, protein: 0.013, fat: 0.003, carb: 0.06, type: 'dietaryFiber' },
    { id: 'cucumber', name: '黄瓜', cal: 0.15, protein: 0.0065, fat: 0.001, carb: 0.036, type: 'dietaryFiber' },
    { id: 'mushroom', name: '蘑菇', cal: 0.22, protein: 0.031, fat: 0.003, carb: 0.033, type: 'dietaryFiber' },
    { id: 'zucchini', name: '西葫芦', cal: 0.17, protein: 0.012, fat: 0.003, carb: 0.033, type: 'dietaryFiber' },
    { id: 'cauliflower', name: '菜花', cal: 0.25, protein: 0.019, fat: 0.003, carb: 0.05, type: 'dietaryFiber' },
    { id: 'asparagus', name: '芦笋', cal: 0.20, protein: 0.022, fat: 0.001, carb: 0.039, type: 'dietaryFiber' },
    { id: 'celery', name: '芹菜', cal: 0.16, protein: 0.007, fat: 0.002, carb: 0.03, type: 'dietaryFiber' },
    { id: 'cabbage', name: '卷心菜', cal: 0.25, protein: 0.013, fat: 0.002, carb: 0.058, type: 'dietaryFiber' }
  ],
  '健康脂肪': [
    { id: 'oliveOil', name: '橄榄油', cal: 8.84, protein: 0, fat: 1, carb: 0, type: 'fatty' },
    { id: 'coconutOil', name: '椰子油', cal: 8.62, protein: 0, fat: 1, carb: 0, type: 'fatty' },
    { id: 'avocadoOil', name: '牛油果油', cal: 8.84, protein: 0, fat: 1, carb: 0, type: 'fatty' },
    { id: 'almonds', name: '杏仁', cal: 5.78, protein: 0.21, fat: 0.49, carb: 0.22, type: 'fatty' },
    { id: 'walnuts', name: '核桃', cal: 6.54, protein: 0.15, fat: 0.65, carb: 0.14, type: 'fatty' }
  ]
};

// 全局变量存储当前饮食计划
let currentMealPlan = {
  breakfast: [],
  lunch: [],
  dinner: []
};

// 动态生成食物选择界面
function generateFoodCategories() {
  // 生成早餐食材选择界面
  const breakfastFoodCategoriesContainer = document.getElementById('breakfastFoodCategories');

  for (const category in breakfastFoodData) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'food-category';

    // 创建可展开/收起的标题
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'food-category-header';
    categoryHeader.innerHTML = `
          <h3>${category}</h3>
          <span class="toggle-icon">▶</span>
        `;
    categoryDiv.appendChild(categoryHeader);

    // 创建内容区域
    const categoryContent = document.createElement('div');
    categoryContent.className = 'food-category-content collapsed';

    breakfastFoodData[category].forEach(food => {
      const foodItemDiv = document.createElement('div');
      foodItemDiv.className = 'food-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'breakfast_' + food.id;
      checkbox.dataset.cal = food.cal;
      checkbox.dataset.protein = food.protein;
      checkbox.dataset.fat = food.fat;
      checkbox.dataset.carb = food.carb;
      checkbox.dataset.type = 'breakfast';
      checkbox.dataset.category = food.type;
      checkbox.dataset.unit = food.unit || 'g';

      // 如果有规格选项，存储选项数据
      if (food.options) {
        checkbox.dataset.options = JSON.stringify(food.options);
        checkbox.dataset.defaultOption = JSON.stringify(food.options[0]);
      }

      const label = document.createElement('label');
      label.htmlFor = 'breakfast_' + food.id;
      label.textContent = food.name;

      foodItemDiv.appendChild(checkbox);
      foodItemDiv.appendChild(label);
      categoryContent.appendChild(foodItemDiv);
    });

    categoryDiv.appendChild(categoryContent);
    breakfastFoodCategoriesContainer.appendChild(categoryDiv);
  }

  // 生成常规食材选择界面
  const regularFoodCategoriesContainer = document.getElementById('regularFoodCategories');

  for (const category in regularFoodData) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'food-category';

    // 创建可展开/收起的标题
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'food-category-header';
    categoryHeader.innerHTML = `
          <h3>${category}</h3>
          <span class="toggle-icon">▶</span>
        `;
    categoryDiv.appendChild(categoryHeader);

    // 创建内容区域
    const categoryContent = document.createElement('div');
    categoryContent.className = 'food-category-content collapsed';

    regularFoodData[category].forEach(food => {
      const foodItemDiv = document.createElement('div');
      foodItemDiv.className = 'food-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'regular_' + food.id;
      checkbox.dataset.cal = food.cal;
      checkbox.dataset.protein = food.protein;
      checkbox.dataset.fat = food.fat;
      checkbox.dataset.carb = food.carb;
      checkbox.dataset.type = 'regular';
      checkbox.dataset.category = food.type;

      // 如果有规格选项，存储选项数据
      if (food.options) {
        checkbox.dataset.options = JSON.stringify(food.options);
        checkbox.dataset.defaultOption = JSON.stringify(food.options[0]);
      }

      const label = document.createElement('label');
      label.htmlFor = 'regular_' + food.id;
      label.textContent = food.name;

      foodItemDiv.appendChild(checkbox);
      foodItemDiv.appendChild(label);
      categoryContent.appendChild(foodItemDiv);
    });

    categoryDiv.appendChild(categoryContent);
    regularFoodCategoriesContainer.appendChild(categoryDiv);
  }
}

// 页面加载完成后生成食物选择界面
document.addEventListener('DOMContentLoaded', function () {
  generateFoodCategories();

  // 为食物选择项添加选中效果
  document.querySelectorAll('.food-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        this.parentElement.classList.add('selected');

        // 如果有规格选项，弹出选择对话框
        if (this.dataset.options) {
          selectFoodOption(this);
        }
      } else {
        this.parentElement.classList.remove('selected');
      }
    });
  });

  // 为按钮添加点击效果
  const calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', function () {
    // 添加加载效果
    const btnText = this.querySelector('.btn-text');
    const originalText = btnText.textContent;
    btnText.innerHTML = '<span class="loading"></span>计算中...';

    // 模拟计算过程
    setTimeout(() => {
      calculateNutrition();
      btnText.textContent = originalText;
    }, 500);
  });

  // 为导出按钮添加点击事件
  const exportBtn = document.getElementById('exportBtn');
  exportBtn.addEventListener('click', function () {
    exportToImage();
  });

  // 为食材类别标题添加点击事件，实现展开/收起功能
  document.querySelectorAll('.food-category-header').forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.toggle-icon');

      if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        icon.textContent = '▼';
      } else {
        content.classList.add('collapsed');
        icon.textContent = '▶';
      }
    });
  });

  // 初始化计算
  calculateNutrition();
});

// 食物规格选择功能
function selectFoodOption(checkbox) {
  const options = JSON.parse(checkbox.dataset.options);
  const defaultOption = JSON.parse(checkbox.dataset.defaultOption);

  // 创建选择对话框
  const dialog = document.createElement('div');
  dialog.className = 'food-dialog';

  const content = document.createElement('div');
  content.className = 'food-dialog-content';

  content.innerHTML = `
        <h3>选择${checkbox.nextElementSibling.textContent}规格</h3>
        <p>请选择您使用的规格：</p>
        <div id="foodOptions">
          ${options.map((option, index) => `
            <div class="food-option ${option.name === defaultOption.name ? 'selected' : ''}" data-option='${JSON.stringify(option)}'>
              <strong>${option.name}</strong>
              <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">
                热量: ${option.cal}千卡 | 蛋白质: ${option.protein}g | 脂肪: ${option.fat}g
              </div>
            </div>
          `).join('')}
        </div>
        <div class="food-dialog-buttons">
          <button class="food-dialog-btn food-dialog-cancel">取消</button>
          <button class="food-dialog-btn food-dialog-confirm">确认</button>
        </div>
      `;

  dialog.appendChild(content);
  document.body.appendChild(dialog);

  // 选项点击事件
  document.querySelectorAll('#foodOptions .food-option').forEach(option => {
    option.addEventListener('click', function () {
      document.querySelectorAll('#foodOptions .food-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      this.classList.add('selected');
    });
  });

  // 确认按钮事件
  document.querySelector('.food-dialog-confirm').addEventListener('click', function () {
    const selectedOption = document.querySelector('#foodOptions .food-option.selected');
    if (selectedOption) {
      const foodData = JSON.parse(selectedOption.dataset.option);

      // 更新复选框的数据属性
      checkbox.dataset.cal = foodData.cal;
      checkbox.dataset.protein = foodData.protein;
      checkbox.dataset.fat = foodData.fat;
      checkbox.dataset.carb = foodData.carb;
      checkbox.dataset.defaultOption = JSON.stringify(foodData);

      // 移除对话框
      document.body.removeChild(dialog);
    }
  });

  // 取消按钮事件
  document.querySelector('.food-dialog-cancel').addEventListener('click', function () {
    // 如果取消，取消选择该食材
    checkbox.checked = false;
    checkbox.parentElement.classList.remove('selected');
    document.body.removeChild(dialog);
  });

  // 点击背景关闭对话框
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) {
      // 如果点击了背景，取消选择该食材
      checkbox.checked = false;
      checkbox.parentElement.classList.remove('selected');
      document.body.removeChild(dialog);
    }
  });
}

// 导出为图片功能 - 修复判断逻辑和泛白问题
function exportToImage() {
  // 检查是否有实际计算结果，而不是只检查结果区域是否显示
  const targetCalories = document.getElementById('targetCalories').textContent;
  if (targetCalories === '--') {
    alert('请先计算营养需求，然后再导出结果');
    return;
  }

  // 显示加载提示
  const exportBtn = document.getElementById('exportBtn');
  const originalText = exportBtn.querySelector('.btn-text').textContent;
  exportBtn.querySelector('.btn-text').innerHTML = '<span class="loading"></span>生成图片中...';
  exportBtn.disabled = true;

  // 临时调整固定汇总卡片位置
  const fixedSummary = document.getElementById('fixedSummary');
  const originalPosition = fixedSummary.style.position;
  fixedSummary.style.position = 'relative';
  fixedSummary.style.bottom = 'auto';

  // 使用html2canvas将结果区域转换为图片
  html2canvas(document.getElementById('resultsSection'), {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    allowTaint: true,
    removeContainer: true,
    // 优化设置
    width: document.getElementById('resultsSection').scrollWidth,
    height: document.getElementById('resultsSection').scrollHeight,
    // 修复透明背景问题
    onclone: function (clonedDoc) {
      // 确保所有背景都是不透明的
      const elements = clonedDoc.querySelectorAll('*');
      elements.forEach(el => {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg.includes('rgba') && !bg.includes('rgba(0, 0, 0, 0)')) {
          el.style.backgroundColor = '#ffffff';
        }
      });

      // 确保固定汇总卡片在正确位置
      const clonedFixedSummary = clonedDoc.getElementById('fixedSummary');
      if (clonedFixedSummary) {
        clonedFixedSummary.style.position = 'relative';
        clonedFixedSummary.style.bottom = 'auto';
      }
    }
  }).then(canvas => {
    // 将canvas转换为图片URL
    const imageURL = canvas.toDataURL('image/png');

    // 创建下载链接
    const downloadLink = document.createElement('a');
    downloadLink.href = imageURL;
    downloadLink.download = '营养计算结果.png';

    // 触发下载
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // 恢复按钮状态
    exportBtn.querySelector('.btn-text').textContent = originalText;
    exportBtn.disabled = false;

    // 恢复固定汇总卡片位置
    fixedSummary.style.position = originalPosition;
    fixedSummary.style.bottom = '20px';
  }).catch(error => {
    console.error('导出图片时出错:', error);
    alert('导出图片失败，请重试');

    // 恢复按钮状态
    exportBtn.querySelector('.btn-text').textContent = originalText;
    exportBtn.disabled = false;

    // 恢复固定汇总卡片位置
    fixedSummary.style.position = originalPosition;
    fixedSummary.style.bottom = '20px';
  });
}

function calculateNutrition() {
  // 获取用户输入
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activityLevel = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  // 验证输入
  if (!weight || !height || !age) {
    alert('请填写完整的个人信息');
    return;
  }

  // 计算BMR (Mifflin-St Jeor公式)
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // 计算TDEE
  const tdee = bmr * activityLevel;

  // 根据目标调整热量摄入
  let targetCalories;
  switch (goal) {
    case 'loss':
      targetCalories = tdee * 0.85; // 减少15%的热量用于减脂
      break;
    case 'gain':
      targetCalories = tdee * 1.15; // 增加15%的热量用于增肌
      break;
    default:
      targetCalories = tdee; // 维持体重
  }

  // 改进的蛋白质需求计算 (基于体重、目标和训练情况)
  let proteinPerKg;
  if (goal === 'loss') {
    // 减脂期间，根据活动水平调整蛋白质需求
    if (activityLevel >= 1.725) {
      proteinPerKg = 2.2; // 高活动水平减脂
    } else if (activityLevel >= 1.55) {
      proteinPerKg = 2.0; // 中等活动水平减脂
    } else {
      proteinPerKg = 1.8; // 低活动水平减脂
    }
  } else if (goal === 'gain') {
    // 增肌期间
    if (activityLevel >= 1.725) {
      proteinPerKg = 2.0; // 高活动水平增肌
    } else if (activityLevel >= 1.55) {
      proteinPerKg = 1.8; // 中等活动水平增肌
    } else {
      proteinPerKg = 1.6; // 低活动水平增肌
    }
  } else {
    // 维持期间
    proteinPerKg = 1.4 + (activityLevel - 1.2) * 0.2; // 基于活动水平线性调整
  }


  // 根据活动水平进一步调整蛋白质需求
  // 更高活动水平需要更多蛋白质
  // if (activityLevel >= 1.725) {
  //   proteinPerKg += 0.2;
  // }

  let proteinTarget = proteinPerKg * weight;

  // 脂肪需求 (根据目标调整)
  let fatPercentage;
  if (goal === 'loss') {
    fatPercentage = 0.25; // 减脂期间保持适量脂肪
  } else if (goal === 'gain') {
    fatPercentage = 0.30; // 增肌期间可以稍微增加脂肪摄入
  } else {
    fatPercentage = 0.25; // 维持期间适中脂肪
  }

  const fatCalories = targetCalories * fatPercentage;
  const fatTarget = fatCalories / 9; // 每克脂肪9千卡

  // 蛋白质热量不超过总热量的30%
  const maxProteinCalories = targetCalories * 0.3;
  const maxProteinTarget = maxProteinCalories / 4;

  // 如果蛋白质需求超过上限，则使用上限值
  if (proteinTarget > maxProteinTarget) {
    proteinTarget = maxProteinTarget;
  }

  // 碳水化合物需求 (剩余热量)
  const proteinCalories = proteinTarget * 4; // 每克蛋白质4千卡
  const remainingCalories = targetCalories - proteinCalories - fatCalories;
  const carbsTarget = remainingCalories / 4; // 每克碳水化合物4千卡

  // 计算宏量营养素百分比
  const carbsPercentage = Math.round((carbsTarget * 4 / targetCalories) * 100);
  const proteinPercentage = Math.round((proteinTarget * 4 / targetCalories) * 100);
  const fatPercentageValue = Math.round((fatTarget * 9 / targetCalories) * 100);

  // 更新UI
  document.getElementById('bmrValue').textContent = Math.round(bmr);
  document.getElementById('tdeeValue').textContent = Math.round(tdee);
  document.getElementById('targetCalories').textContent = Math.round(targetCalories);
  document.getElementById('proteinTarget').textContent = Math.round(proteinTarget);
  document.getElementById('proteinTarget2').textContent = Math.round(proteinTarget);
  document.getElementById('carbsTarget').textContent = Math.round(carbsTarget);
  document.getElementById('fatTarget').textContent = Math.round(fatTarget);

  document.getElementById('carbsProgress').style.width = `${carbsPercentage}%`;
  document.getElementById('proteinProgress').style.width = `${proteinPercentage}%`;
  document.getElementById('fatProgress').style.width = `${fatPercentageValue}%`;

  document.getElementById('carbsPercentage').textContent = `${carbsPercentage}%`;
  document.getElementById('proteinPercentage').textContent = `${proteinPercentage}%`;
  document.getElementById('fatPercentage').textContent = `${fatPercentageValue}%`;

  // 显示结果区域
  document.getElementById('resultsSection').classList.add('show');

  // 生成饮食计划
  generateMealPlan(targetCalories, proteinTarget, carbsTarget, fatTarget);

  // 生成个性化建议
  generateRecommendations(goal, proteinTarget, weight);
}

// 生成饮食计划的函数
function generateMealPlan(targetCalories, proteinTarget, carbsTarget, fatTarget) {
  const breakfastSelected = Array.from(document.querySelectorAll('input[type="checkbox"][data-type="breakfast"]:checked'));
  const regularSelected = Array.from(document.querySelectorAll('input[type="checkbox"][data-type="regular"]:checked'));

  if (breakfastSelected.length === 0 && regularSelected.length === 0) {
    document.getElementById('breakfastList').innerHTML = '<li>请选择至少一种食材</li>';
    document.getElementById('lunchList').innerHTML = '<li>请选择至少一种食材</li>';
    document.getElementById('dinnerList').innerHTML = '<li>请选择至少一种食材</li>';
    return;
  }

  const breakfastFoods = breakfastSelected.map(food => ({
    id: food.id,
    name: food.nextElementSibling.textContent,
    calories: parseFloat(food.dataset.cal),
    protein: parseFloat(food.dataset.protein),
    carbs: parseFloat(food.dataset.carb),
    fat: parseFloat(food.dataset.fat),
    category: food.dataset.category,
    unit: food.dataset.unit || 'g'
  }));

  const regularFoods = regularSelected.map(food => ({
    id: food.id,
    name: food.nextElementSibling.textContent,
    calories: parseFloat(food.dataset.cal),
    protein: parseFloat(food.dataset.protein),
    carbs: parseFloat(food.dataset.carb),
    fat: parseFloat(food.dataset.fat),
    category: food.dataset.category,
    unit: 'g'
  }));

  // 采用权重分配：早餐25%，午餐40%，晚餐35% - 增加早餐蛋白质比例
  const breakfastCalories = targetCalories * 0.25;
  const lunchCalories = targetCalories * 0.40;
  const dinnerCalories = targetCalories * 0.35;

  const breakfastProtein = proteinTarget * 0.30; // 早餐分配更多蛋白质
  const lunchProtein = proteinTarget * 0.40;
  const dinnerProtein = proteinTarget * 0.30;

  const breakfastCarbs = carbsTarget * 0.25;
  const lunchCarbs = carbsTarget * 0.45;
  const dinnerCarbs = carbsTarget * 0.30;

  const breakfastFat = fatTarget * 0.25;
  const lunchFat = fatTarget * 0.40;
  const dinnerFat = fatTarget * 0.35;

  const breakfastPlan = distributeFoodsSmart(breakfastFoods, breakfastCalories, breakfastProtein, breakfastCarbs, breakfastFat, true);
  const lunchPlan = distributeFoodsSmart(regularFoods, lunchCalories, lunchProtein, lunchCarbs, lunchFat, false);
  const dinnerPlan = distributeFoodsSmart(regularFoods, dinnerCalories, dinnerProtein, dinnerCarbs, dinnerFat, false);

  // 显示蛋白质达成情况
  const breakfastProteinActual = breakfastPlan.reduce((sum, item) => sum + item.protein, 0);
  const lunchProteinActual = lunchPlan.reduce((sum, item) => sum + item.protein, 0);
  const dinnerProteinActual = dinnerPlan.reduce((sum, item) => sum + item.protein, 0);
  const totalProteinActual = breakfastProteinActual + lunchProteinActual + dinnerProteinActual;

  console.log(`蛋白质目标: ${proteinTarget}g, 实际: ${totalProteinActual.toFixed(1)}g, 达成率: ${(totalProteinActual / proteinTarget * 100).toFixed(1)}%`);

  // 保存当前饮食计划到全局变量
  currentMealPlan.breakfast = breakfastPlan;
  currentMealPlan.lunch = lunchPlan;
  currentMealPlan.dinner = dinnerPlan;

  displayMealPlan('breakfastList', breakfastPlan, 'breakfast');
  displayMealPlan('lunchList', lunchPlan, 'lunch');
  displayMealPlan('dinnerList', dinnerPlan, 'dinner');

  // 更新总汇总
  updateTotalSummary();
}

// 修改displayMealPlan函数，添加可编辑的食材数量
function displayMealPlan(listId, mealPlan, mealType) {
  const listElement = document.getElementById(listId);
  listElement.innerHTML = '';

  if (mealPlan.length === 0) {
    listElement.innerHTML = '<li>无法生成合适的饮食计划，请选择更多种类的食材</li>';
    updateMealSummary(mealType, 0, 0, 0, 0);
    return;
  }

  // 计算餐次总营养
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  mealPlan.forEach((item, index) => {
    const li = document.createElement('li');
    li.style.animationDelay = `${index * 0.1}s`;
    li.style.animation = 'slideIn 0.5s ease-out forwards';
    li.style.opacity = '0';

    // 对于鸡蛋，显示为"个"，而不是克
    let displayAmount = item.amount;
    let displayUnit = item.unit;

    // 创建可编辑的数量输入框
    const amountInput = document.createElement('input');
    amountInput.type = 'number';
    amountInput.className = 'amount-input';
    amountInput.value = displayAmount;
    amountInput.min = 1;
    amountInput.dataset.foodId = item.id;
    amountInput.dataset.mealType = mealType;

    // 添加事件监听器，当用户修改数量时更新营养计算
    amountInput.addEventListener('change', function () {
      updateFoodAmount(this.dataset.mealType, this.dataset.foodId, parseFloat(this.value));
    });

    const amountContainer = document.createElement('div');
    amountContainer.className = 'food-amount';
    amountContainer.appendChild(amountInput);
    amountContainer.appendChild(document.createTextNode(displayUnit));

    li.innerHTML = `<span class="food-name">${item.name}</span>`;
    li.appendChild(amountContainer);
    listElement.appendChild(li);

    // 累加营养值
    totalCalories += item.calories;
    totalProtein += item.protein;
    totalCarbs += item.carbs;
    totalFat += item.fat;
  });

  // 更新餐次汇总
  updateMealSummary(mealType, totalCalories, totalCarbs, totalProtein, totalFat);
}

// 更新食材数量的函数
function updateFoodAmount(mealType, foodId, newAmount) {
  // 找到对应的食材
  const mealPlan = currentMealPlan[mealType];
  const foodItem = mealPlan.find(item => item.id === foodId);

  if (foodItem) {
    // 更新食材数量
    foodItem.amount = newAmount;

    // 重新计算该食材的营养值
    foodItem.calories = newAmount * foodItem.baseCalories;
    foodItem.protein = newAmount * foodItem.baseProtein;
    foodItem.carbs = newAmount * foodItem.baseCarbs;
    foodItem.fat = newAmount * foodItem.baseFat;

    // 重新计算餐次汇总和总汇总
    recalculateMealNutrition(mealType);
    updateTotalSummary();
  }
}

// 重新计算餐次营养
function recalculateMealNutrition(mealType) {
  const mealPlan = currentMealPlan[mealType];

  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  mealPlan.forEach(item => {
    totalCalories += item.calories;
    totalProtein += item.protein;
    totalCarbs += item.carbs;
    totalFat += item.fat;
  });

  // 更新餐次汇总
  updateMealSummary(mealType, totalCalories, totalCarbs, totalProtein, totalFat);
}

// 更新餐次汇总显示
function updateMealSummary(mealType, calories, carbs, protein, fat) {
  const caloriesElement = document.getElementById(`${mealType}Calories`);
  const carbsElement = document.getElementById(`${mealType}Carbs`);
  const proteinElement = document.getElementById(`${mealType}Protein`);
  const fatElement = document.getElementById(`${mealType}Fat`);

  if (caloriesElement) caloriesElement.textContent = Math.round(calories);
  if (carbsElement) carbsElement.textContent = Math.round(carbs);
  if (proteinElement) proteinElement.textContent = Math.round(protein);
  if (fatElement) fatElement.textContent = Math.round(fat);
}

// 更新总汇总显示
function updateTotalSummary() {
  // 获取各餐营养值
  const breakfastCalories = parseFloat(document.getElementById('breakfastCalories').textContent) || 0;
  const breakfastCarbs = parseFloat(document.getElementById('breakfastCarbs').textContent) || 0;
  const breakfastProtein = parseFloat(document.getElementById('breakfastProtein').textContent) || 0;
  const breakfastFat = parseFloat(document.getElementById('breakfastFat').textContent) || 0;

  const lunchCalories = parseFloat(document.getElementById('lunchCalories').textContent) || 0;
  const lunchCarbs = parseFloat(document.getElementById('lunchCarbs').textContent) || 0;
  const lunchProtein = parseFloat(document.getElementById('lunchProtein').textContent) || 0;
  const lunchFat = parseFloat(document.getElementById('lunchFat').textContent) || 0;

  const dinnerCalories = parseFloat(document.getElementById('dinnerCalories').textContent) || 0;
  const dinnerCarbs = parseFloat(document.getElementById('dinnerCarbs').textContent) || 0;
  const dinnerProtein = parseFloat(document.getElementById('dinnerProtein').textContent) || 0;
  const dinnerFat = parseFloat(document.getElementById('dinnerFat').textContent) || 0;

  // 计算总营养值
  const totalCalories = breakfastCalories + lunchCalories + dinnerCalories;
  const totalCarbs = breakfastCarbs + lunchCarbs + dinnerCarbs;
  const totalProtein = breakfastProtein + lunchProtein + dinnerProtein;
  const totalFat = breakfastFat + lunchFat + dinnerFat;

  // 获取目标值
  const targetCalories = parseFloat(document.getElementById('targetCalories').textContent) || 1;
  const targetCarbs = parseFloat(document.getElementById('carbsTarget').textContent) || 1;
  const targetProtein = parseFloat(document.getElementById('proteinTarget').textContent) || 1;
  const targetFat = parseFloat(document.getElementById('fatTarget').textContent) || 1;

  // 计算百分比
  const caloriesPercentage = Math.round((totalCalories / targetCalories) * 100);
  const carbsPercentage = Math.round((totalCarbs / targetCarbs) * 100);
  const proteinPercentage = Math.round((totalProtein / targetProtein) * 100);
  const fatPercentage = Math.round((totalFat / targetFat) * 100);

  // 更新总汇总显示
  document.getElementById('totalCalories').textContent = Math.round(totalCalories);
  document.getElementById('totalCarbs').textContent = Math.round(totalCarbs);
  document.getElementById('totalProtein').textContent = Math.round(totalProtein);
  document.getElementById('totalFat').textContent = Math.round(totalFat);

  // 更新进度条
  document.getElementById('totalCaloriesBar').style.width = `${Math.min(caloriesPercentage, 100)}%`;
  document.getElementById('totalCarbsBar').style.width = `${Math.min(carbsPercentage, 100)}%`;
  document.getElementById('totalProteinBar').style.width = `${Math.min(proteinPercentage, 100)}%`;
  document.getElementById('totalFatBar').style.width = `${Math.min(fatPercentage, 100)}%`;

  // 更新百分比显示
  document.getElementById('totalCaloriesPercentage').textContent = `${caloriesPercentage}%`;
  document.getElementById('totalCarbsPercentage').textContent = `${carbsPercentage}%`;
  document.getElementById('totalProteinPercentage').textContent = `${proteinPercentage}%`;
  document.getElementById('totalFatPercentage').textContent = `${fatPercentage}%`;
}

// 改进的食物分配算法
function distributeFoodsSmart(foods, targetCalories, targetProtein, targetCarbs, targetFat, isBreakfast) {
  if (!foods.length) return [];

  const mealPlan = [];
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  // 定义按单位类型的控制策略
  const unitControl = {
    '个': { min: 1, max: 2 }, // 按个的食物1-2个
    'ml': {
      '油类': { min: 5, max: 15 }, // 油类5-15ml
      '其他': { min: 100, max: 300 } // 其他液体100-300ml
    }
  };

  // 创建食材副本，确保每种食材只分配一次
  const availableFoods = [...foods];

  // 第一步：为每种食材分配基础份量
  for (const food of availableFoods) {
    let amount;
    let unit = food.unit || 'g';

    // 根据食物类型和单位设置基础份量
    if (unit === '个') {
      amount = unitControl['个'].min; // 默认1个
    } else if (unit === 'ml') {
      const isOil = food.name.includes('油');
      const range = isOil ? unitControl.ml.油类 : unitControl.ml.其他;
      amount = range.min; // 使用最小值作为基础份量
    } else {
      // 按g的食物：根据类别设置基础份量
      switch (food.category) {
        case 'protein':
          amount = 80; // 蛋白质类基础80g
          break;
        case 'fatty':
          amount = 10; // 脂肪类基础10g
          break;
        case 'carbohydrate':
          amount = 50; // 碳水类基础50g
          break;
        case 'dietaryFiber':
          amount = 80; // 蔬菜水果基础80g
          break;
        default:
          amount = 50; // 默认50g
      }
    }

    const caloriesFromFood = amount * food.calories;
    const proteinFromFood = amount * food.protein;
    const carbsFromFood = amount * food.carbs;
    const fatFromFood = amount * food.fat;

    // 检查添加后是否会超出脂肪目标
    if (totalFat + fatFromFood <= targetFat * 1.05) {
      mealPlan.push({
        id: food.id,
        name: food.name,
        amount: amount,
        unit: unit,
        calories: caloriesFromFood,
        protein: proteinFromFood,
        carbs: carbsFromFood,
        fat: fatFromFood,
        baseCalories: food.calories,
        baseProtein: food.protein,
        baseCarbs: food.carbs,
        baseFat: food.fat
      });

      totalCalories += caloriesFromFood;
      totalProtein += proteinFromFood;
      totalCarbs += carbsFromFood;
      totalFat += fatFromFood;
    }
  }

  // 第二步：计算当前营养值与目标的差距
  const calorieDeficit = targetCalories - totalCalories;
  const proteinDeficit = targetProtein - totalProtein;
  const carbsDeficit = targetCarbs - totalCarbs;
  const fatDeficit = targetFat - totalFat;

  // 第三步：精准调整，优先填补蛋白质和热量缺口，同时控制脂肪
  if (calorieDeficit > 0 || proteinDeficit > 0) {
    // 找出蛋白质密度高且脂肪密度低的食材
    const optimalProteinFoods = [...mealPlan]
      .filter(item => {
        const food = availableFoods.find(f => f.id === item.id);
        return food && food.protein > 0;
      })
      .sort((a, b) => {
        const foodA = availableFoods.find(f => f.id === a.id);
        const foodB = availableFoods.find(f => f.id === b.id);

        // 计算蛋白质效率（蛋白质/热量）和脂肪效率（脂肪/热量）
        const proteinEfficiencyA = foodA.protein / foodA.calories;
        const proteinEfficiencyB = foodB.protein / foodB.calories;
        const fatEfficiencyA = foodA.fat / foodA.calories;
        const fatEfficiencyB = foodB.fat / foodB.calories;

        // 优先选择蛋白质效率高且脂肪效率低的食材
        return (proteinEfficiencyB - fatEfficiencyB) - (proteinEfficiencyA - fatEfficiencyA);
      });

    // 优先增加高蛋白低脂肪食物的份量
    for (const mealItem of optimalProteinFoods) {
      if (calorieDeficit <= 0 && proteinDeficit <= 0) break;

      const food = availableFoods.find(f => f.id === mealItem.id);
      if (!food) continue;

      // 计算可以增加的最大份量
      let maxIncrease;
      const unit = food.unit || 'g';

      if (unit === '个') {
        maxIncrease = unitControl['个'].max - mealItem.amount;
      } else if (unit === 'ml') {
        const isOil = food.name.includes('油');
        const range = isOil ? unitControl.ml.油类 : unitControl.ml.其他;
        maxIncrease = range.max - mealItem.amount;
      } else {
        // 按g的食物：根据类别设置最大增加量
        switch (food.category) {
          case 'protein':
            maxIncrease = 50; // 蛋白质类最多增加50g
            break;
          case 'fatty':
            maxIncrease = 5; // 脂肪类最多增加5g
            break;
          case 'carbohydrate':
            maxIncrease = 100; // 碳水类最多增加100g
            break;
          case 'dietaryFiber':
            maxIncrease = 50; // 蔬菜水果最多增加50g
            break;
          default:
            maxIncrease = 30; // 默认最多增加30g
        }
      }

      if (maxIncrease <= 0) continue;

      // 计算基于热量和蛋白质缺口的增加量
      const increaseByCalories = Math.min(maxIncrease, Math.ceil(calorieDeficit / food.calories));
      const increaseByProtein = Math.min(maxIncrease, Math.ceil(proteinDeficit / food.protein));

      // 取两者中较小的值，避免过度增加
      let increaseAmount = Math.min(maxIncrease, Math.min(increaseByCalories, increaseByProtein));

      // 检查增加后脂肪是否会超标
      const additionalFat = increaseAmount * food.fat;
      if (totalFat + additionalFat > targetFat * 1.05) {
        // 如果会导致脂肪超标，减少增加量
        const maxFatIncrease = Math.max(0, targetFat * 1.05 - totalFat);
        const maxIncreaseByFat = Math.floor(maxFatIncrease / food.fat);
        increaseAmount = Math.min(increaseAmount, maxIncreaseByFat);
      }

      if (increaseAmount > 0) {
        // 更新餐单项
        mealItem.amount += increaseAmount;
        mealItem.calories += increaseAmount * food.calories;
        mealItem.protein += increaseAmount * food.protein;
        mealItem.carbs += increaseAmount * food.carbs;
        mealItem.fat += increaseAmount * food.fat;

        // 更新总营养值
        totalCalories += increaseAmount * food.calories;
        totalProtein += increaseAmount * food.protein;
        totalCarbs += increaseAmount * food.carbs;
        totalFat += increaseAmount * food.fat;
      }
    }
  }

  // 第四步：如果仍有热量缺口，使用低脂肪碳水化合物填补
  const remainingCalorieDeficit = targetCalories - totalCalories;
  if (remainingCalorieDeficit > 0) {
    // 找出低脂肪碳水化合物食材
    const lowFatCarbFoods = [...mealPlan]
      .filter(item => {
        const food = availableFoods.find(f => f.id === item.id);
        return food && food.carbs > 0 && food.fat < 0.1;
      })
      .sort((a, b) => {
        const foodA = availableFoods.find(f => f.id === a.id);
        const foodB = availableFoods.find(f => f.id === b.id);
        return (foodB.carbs / foodB.calories) - (foodA.carbs / foodA.calories);
      });

    // 如果没有低脂肪碳水食物，使用普通碳水食物但严格控制增加量
    const carbFoodsToUse = lowFatCarbFoods.length > 0 ? lowFatCarbFoods :
      [...mealPlan].filter(item => {
        const food = availableFoods.find(f => f.id === item.id);
        return food && food.carbs > 0;
      }).sort((a, b) => {
        const foodA = availableFoods.find(f => f.id === a.id);
        const foodB = availableFoods.find(f => f.id === b.id);
        return (foodB.carbs / foodB.calories) - (foodA.carbs / foodA.calories);
      });

    for (const mealItem of carbFoodsToUse) {
      if (remainingCalorieDeficit <= 0) break;

      const food = availableFoods.find(f => f.id === mealItem.id);
      if (!food) continue;

      // 计算可以增加的最大份量
      let maxIncrease;
      const unit = food.unit || 'g';

      if (unit === '个') {
        maxIncrease = unitControl['个'].max - mealItem.amount;
      } else if (unit === 'ml') {
        const isOil = food.name.includes('油');
        const range = isOil ? unitControl.ml.油类 : unitControl.ml.其他;
        maxIncrease = range.max - mealItem.amount;
      } else {
        // 按g的食物：根据类别设置最大增加量
        switch (food.category) {
          case 'carbohydrate':
            maxIncrease = 100; // 碳水类最多增加100g
            break;
          default:
            maxIncrease = 50; // 其他类别最多增加50g
        }
      }

      if (maxIncrease <= 0) continue;

      // 计算基于热量缺口的增加量
      let increaseAmount = Math.min(maxIncrease, Math.ceil(remainingCalorieDeficit / food.calories));

      // 检查增加后脂肪是否会超标
      const additionalFat = increaseAmount * food.fat;
      if (totalFat + additionalFat > targetFat * 1.05) {
        // 如果会导致脂肪超标，减少增加量
        const maxFatIncrease = Math.max(0, targetFat * 1.05 - totalFat);
        const maxIncreaseByFat = Math.floor(maxFatIncrease / food.fat);
        increaseAmount = Math.min(increaseAmount, maxIncreaseByFat);
      }

      if (increaseAmount > 0) {
        // 更新餐单项
        mealItem.amount += increaseAmount;
        mealItem.calories += increaseAmount * food.calories;
        mealItem.protein += increaseAmount * food.protein;
        mealItem.carbs += increaseAmount * food.carbs;
        mealItem.fat += increaseAmount * food.fat;

        // 更新总营养值
        totalCalories += increaseAmount * food.calories;
        totalProtein += increaseAmount * food.protein;
        totalCarbs += increaseAmount * food.carbs;
        totalFat += increaseAmount * food.fat;
      }
    }
  }

  return mealPlan;
}

function generateRecommendations(goal, proteinTarget, weight) {
  const recommendationsList = document.getElementById('recommendationsList');
  recommendationsList.innerHTML = '';

  const recommendations = [];

  // 通用建议
  recommendations.push('保持每日饮水量在2-3升之间');
  recommendations.push('每餐包含蛋白质来源以增加饱腹感');

  // 蛋白质摄入量说明
  const proteinPerKg = (proteinTarget / weight).toFixed(1);
  recommendations.push(`您的蛋白质摄入量为${proteinPerKg}克/公斤体重`);

  // 根据目标添加建议
  if (goal === 'loss') {
    recommendations.push('减脂期间建议控制总热量摄入，避免高糖高脂食物');
    recommendations.push('增加膳食纤维摄入，帮助控制食欲');
    recommendations.push('高蛋白饮食有助于在减脂期间保持肌肉');
  } else if (goal === 'gain') {
    recommendations.push('增肌期间确保充足的热量摄入，特别是训练前后');
    recommendations.push('训练后及时补充蛋白质和碳水化合物');
    recommendations.push('适量增加健康脂肪摄入以支持激素平衡');
  } else {
    recommendations.push('维持期间保持均衡饮食，注意营养多样化');
    recommendations.push('定期评估体重变化，适时调整热量摄入');
  }

  // 显示建议
  recommendations.forEach((rec, index) => {
    const li = document.createElement('li');
    li.style.animationDelay = `${index * 0.1}s`;
    li.style.animation = 'slideIn 0.5s ease-out forwards';
    li.style.opacity = '0';
    li.textContent = rec;
    recommendationsList.appendChild(li);
  });
}