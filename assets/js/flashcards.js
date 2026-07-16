// Flashcard Modal Functions and Content Data

const flashcardContents = {
    fullstack: `
        <h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-2xl">🌐</span> Full Stack Developer
        </h2>
        <p class="text-textMuted text-lg mb-6 leading-relaxed italic">
            Building seamless digital experiences from pixels to production — infinitely scalable.
        </p>
        
        <div class="mb-8">
            <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>📌</span> Summary
            </h3>
            <p class="text-textMuted leading-relaxed">
                Full Stack Developer with strong expertise in building responsive websites, modern front-end interfaces, backend APIs, and intuitive user experiences. Skilled in blending development with UI/UX design and creative branding to deliver polished, high-impact digital products.
            </p>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>💻</span> Core Skills
            </h3>
            
            <div class="space-y-6">
                <div class="border-l-2 border-purple-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🖥</span> Frontend Development
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>React.js / Next.js basics</li>
                        <li>Responsive, mobile-first design</li>
                        <li>Tailwind CSS / Bootstrap</li>
                        <li>Component-based UI development</li>
                        <li>State management fundamentals</li>
                    </ul>
                </div>

                <div class="border-l-2 border-purple-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🛠</span> Backend Development
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Node.js, Express.js</li>
                        <li>RESTful API design</li>
                        <li>Authentication (JWT / Sessions)</li>
                        <li>Basic database operations (MongoDB / SQL)</li>
                        <li>Server routing & middleware</li>
                        <li>Git, GitHub, version control workflow</li>
                    </ul>
                </div>

                <div class="border-l-2 border-purple-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🎨</span> UI & UX Design
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>User flow & wireframe creation</li>
                        <li>Design systems & style guides</li>
                        <li>Prototyping (Figma)</li>
                        <li>Accessibility-focused design</li>
                        <li>Usability testing & iteration</li>
                        <li>Interaction design fundamentals</li>
                    </ul>
                </div>

                <div class="border-l-2 border-purple-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>✨</span> Graphic Design
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Brand identity & logo creation</li>
                        <li>Poster, banner, and social media creatives</li>
                        <li>Typography layouts</li>
                        <li>Color theory & visual hierarchy</li>
                        <li>Adobe Photoshop / Illustrator basics</li>
                        <li>Creative asset building for web</li>
                    </ul>
                </div>

                <div class="border-l-2 border-purple-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🌐</span> Web Design
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Landing page design</li>
                        <li>Portfolio & corporate website layout</li>
                        <li>Modern visual aesthetics</li>
                        <li>CTA optimization</li>
                        <li>Layout spacing & composition</li>
                        <li>Converting designs to functional front end</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>⚙️</span> Tools & Technologies
            </h3>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">VS Code</span>
                <span class="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">Figma</span>
                <span class="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">Adobe Suite</span>
                <span class="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">Git & GitHub</span>
                <span class="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">Browser DevTools</span>
            </div>
        </div>
    `,
    'datascience-detailed': `
        <h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-2xl">🔹</span> Data Science
        </h2>
        <p class="text-textMuted text-lg mb-6 leading-relaxed italic">
            Turning raw data into infinite possibilities.
        </p>
        
        <div class="mb-8">
            <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>📌</span> Summary
            </h3>
            <p class="text-textMuted leading-relaxed">
                Data Science enthusiast skilled in extracting insights, building predictive models, and transforming data into intelligent business decisions. Strong foundation in statistics, machine learning, data cleaning, and visualization with hands-on experience in Python-based data workflows.
            </p>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>📘</span> Core Skills
            </h3>
            
            <div class="space-y-6">
                <div class="border-l-2 border-blue-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>📊</span> Data Analytics
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Exploratory Data Analysis (EDA)</li>
                        <li>Statistical analysis & hypothesis testing</li>
                        <li>Data wrangling & preprocessing</li>
                        <li>Feature engineering</li>
                        <li>Business insight generation</li>
                    </ul>
                </div>

                <div class="border-l-2 border-blue-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>📈</span> Data Visualization
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Matplotlib, Plotly, Seaborn</li>
                        <li>Dashboarding (Power BI / Tableau)</li>
                        <li>Storytelling with data</li>
                        <li>Designing clear, decision-driven visuals</li>
                    </ul>
                </div>

                <div class="border-l-2 border-blue-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🗂</span> Data Manipulation
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Pandas, NumPy</li>
                        <li>Handling missing values, outliers</li>
                        <li>Merging, grouping, transforming datasets</li>
                        <li>Working with large CSV, Excel, and JSON data</li>
                    </ul>
                </div>

                <div class="border-l-2 border-blue-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🤖</span> Machine Learning Basics
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Regression, Classification</li>
                        <li>Train-test-split, model tuning</li>
                        <li>Metrics: accuracy, RMSE, F1-score</li>
                        <li>Model evaluation & improvement</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🛠</span> Tools & Technologies
            </h3>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">Python</span>
                <span class="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">Jupyter Notebook</span>
                <span class="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">SQL basics</span>
                <span class="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">Excel for analytics</span>
                <span class="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">Git & GitHub</span>
            </div>
        </div>
    `,
    aiml: `
        <h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-2xl">🤖</span> Artificial Intelligence & Machine Learning
        </h2>
        <p class="text-textMuted text-lg mb-6 leading-relaxed italic">
            Designing systems that learn, adapt, and scale infinitely.
        </p>
        
        <div class="mb-8">
            <h3 class="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>📌</span> Summary
            </h3>
            <p class="text-textMuted leading-relaxed">
                AI/ML practitioner focused on building intelligent systems, training predictive models, and applying algorithms that enable machines to think, learn, and evolve. Strong understanding of model lifecycle, optimization, and deployment fundamentals.
            </p>
        </div>

        <div class="mb-8">
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🧠</span> Core Skills
            </h3>
            
            <div class="space-y-6">
                <div class="border-l-2 border-green-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>📐</span> Machine Learning
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Supervised & Unsupervised learning</li>
                        <li>Regression, Classification, Clustering</li>
                        <li>Feature selection & engineering</li>
                        <li>Model tuning: GridSearch, RandomizedSearch</li>
                        <li>Evaluation metrics (Accuracy, Precision, Recall, F1, AUC)</li>
                    </ul>
                </div>

                <div class="border-l-2 border-green-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🤖</span> Artificial Intelligence Concepts
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Neural Networks basics</li>
                        <li>Perceptron, activation functions</li>
                        <li>Computer vision fundamentals</li>
                        <li>Natural Language Processing (NLP) basics</li>
                        <li>Reinforcement learning intuition</li>
                    </ul>
                </div>

                <div class="border-l-2 border-green-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>📊</span> Model Development Workflow
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>Data preprocessing</li>
                        <li>Train–test split, cross-validation</li>
                        <li>Overfitting / underfitting handling</li>
                        <li>Bias–variance tradeoff</li>
                        <li>Model interpretation & explainability</li>
                    </ul>
                </div>

                <div class="border-l-2 border-green-500/50 pl-4">
                    <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span>🧪</span> Deep Learning Foundation
                    </h4>
                    <ul class="text-textMuted space-y-1.5 text-sm ml-6 list-disc">
                        <li>TensorFlow / Keras basics</li>
                        <li>ANN architecture understanding</li>
                        <li>Backpropagation intuition</li>
                        <li>Working with image & text datasets</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🛠</span> Tools & Technologies
            </h3>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">Python</span>
                <span class="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">Scikit-learn</span>
                <span class="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">TensorFlow / Keras</span>
                <span class="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">NumPy, Pandas</span>
                <span class="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">Jupyter Notebook</span>
                <span class="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm">Git & GitHub</span>
            </div>
        </div>
    `
};

function openFlashcard(type) {
    const overlay = document.getElementById('flashcard-overlay');
    const content = document.getElementById('flashcard-content');
    
    if (flashcardContents[type] && overlay && content) {
        content.innerHTML = flashcardContents[type];
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFlashcard() {
    const overlay = document.getElementById('flashcard-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeFlashcardOnOverlay(event) {
    if (event.target === event.currentTarget) {
        closeFlashcard();
    }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFlashcard();
    }
});
