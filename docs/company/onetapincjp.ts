import { CurriculumVitae, Project, TechnicalSkills } from "./types";

const os = ["Windows", "MacOS", "Linux"] as const
const phase = ["要件定義", "基本設計", "詳細設計", "単体テスト", "結合テスト", "運用保守"] as const
const responsibilities = ["担当者へのヒアリング", "仕様書作成", "システムの設計", "開発", "導入", "テスト", "運用", "保守メンテナンス"] as const

const projects: ReadonlyArray<Project> = [
	{
		dates: "2022年〜現在",
		title: "棚卸台帳機能の開発",
		summary: "複数のサービス上に存在するユーザーを一元管理するための機能の開発",
		phase: phase,
		responsibilities: responsibilities,
		languages: ["TypeScript", "Go"],
		frameworksAndOthers: ["Ruby on Rails", "React", "Next.js", "Material UI", "Yup", "Jest", "React Testing Library", "Playwright", "Puppeteer", "Cypress", "Rspec", "testify", "Github", "Docker", "Figma", "AWS Amplify", "AWS S3", "AWS EC2", "AWS Lambda", "AWS CloudWatch", "AWS System Manager", "AWS Route53"],
		os: os,
		role: "フロントエンド開発責任者",
		teamSize: "4人",
		achievements: `\
・CypressによるE2EテストのCI/CD環境を構築。他プロジェクトでは、個人のローカルでE2Eを実行しており、制度や速度にばらつきがあったため、CI/CD環境を構築し、個人の環境に依存しない形でのE2Eテストを構築した。
・AWS AmplifyによるCI/CD環境の構築
・React Testing Libraryによるユニットテスト環境の構築
・イベント・条件・アクションからなるワークフロー画面の作成
・ワークフローの一覧画面の作成
・ワークフローのログ画面の作成
・Yupによるバリデーションの実装
・useReducerによる状態管理の実装
・Prettier・ESLintによるコードフォーマットの構築
・エンドポイントの作成・Goのユニットテスト・結合テストの実装
・トランザクションによるロールバックの実装
・エンドポイントとの繋ぎこみ`
	},
	{
		dates: "2020年〜現在",
		title: "シングルサインオン管理画面開発",
		summary: "シングルサインオン機能を実現するための機能の開発",
		phase: phase,
		responsibilities: responsibilities,
		languages: ["TypeScript", "JavaScript", "Ruby"],
		frameworksAndOthers: ["Ruby on Rails", "React", "Gatsby", "Next.js", "Vue", "Nuxt", "Material UI", "Yup", "Jest", "React Testing Library", "Playwright", "Puppeteer", "Cypress", "Rspec", "Dynamoid", "Github", "Docker", "Figma", "AWS S3", "AWS EC2", "AWS Lambda", "AWS CloudWatch", "AWS System Manager", "AWS Route53", "AWS DynamoDB", ],
		os: os,
		role: "フロントエンド開発責任者",
		teamSize: "3人",
		achievements: `\
・PuppeteerによるE2Eテスト環境の構築
・Enzyme環境の構築
・EnzymeからReact Testing Libraryへの移行
・E2EテストからReact Testing Libraryへの移行
・一覧画面の作成(ユーザー、デバイス、イベント、ルール、アプリの一覧画面の作成)
・詳細画面の作成(ユーザー、デバイス、イベント、ルール、アプリの詳細画面の作成)
・React Apexchartsを使って折れ線グラフ、ヒートマップによるユーザー数の表示画面を作成
・時間や場所などに基づいて判定するルール機能をANDやORで組み合わせる動的なUIの作成
・ユーザーのCSV処理(一時確認画面・処理確定画面)の作成
・ルールの並び替え機能を作成
・メンバーの招待・招待の有効期限・パスワードルール(文字数や使える記号の選定)の作成
・グループにユーザーを追加・削除する画面の作成
・アプリごとに異なる接続方法を認識して必要な入力フォームを表示する画面の作成
・追加したメールアドレスに通知を行う機能の追加
・自分のメールアドレス・パスワードを変更する機能の追加
・Vue.jsを使って作成した管理画面をReactに移行した時、どうしても解決できないエラーがあり、あたりをつけるため原因となるファイルを特定し、原因箇所を絞りあとは半分ずつコメントアウトしていき原因を特定し修正した。
・Vue.jsからReactに移行した時はビックバンリリースを行った。利用するのが管理者のみ、テストが成功していた、利用者が多くない、などの理由から。
・JavaScriptで作成した管理画面をTypeScriptに移行
・Dockerによる開発環境の構築
・Prettier・ESLintによるコードフォーマットの構築
・エンドポイントの作成・Rspecによるテスト
・データベーステーブルの作成
・Rakeタスクの作成
・トランザクションによるロールバックの実装
・To Many Connectionになったエンドポイントをまとめた処理の作成
・エンドポイントとの繋ぎこみ`
	},
	{
		dates: "2020年〜現在",
		title: "シングルサインオン画面開発",
		summary: "シングルサインオン機能を実現するための機能の開発",
		phase: phase,
		responsibilities: responsibilities,
		languages: ["TypeScript", "JavaScript", "Ruby"],
		frameworksAndOthers: ["Ruby on Rails", "React", "Gatsby", "Material UI", "Yup", "Jest", "React Testing Library", "Playwright", "Puppeteer", "Cypress", "Rspec", "Dynamoid", "Github", "Docker", "Figma", "AWS S3", "AWS EC2", "AWS Lambda", "AWS CloudWatch", "AWS System Manager", "AWS Route53", "AWS DynamoDB"],
		os: os,
		role: "フロントエンド開発責任者",
		teamSize: "3人",
		achievements: `\
・PuppeteerによるE2Eテスト環境の構築
・Enzyme環境の構築
・EnzymeからReact Testing Libraryへの移行
・E2EテストからReact Testing Libraryへの移行
・シングルサインオン画面の作成
・秘密の質問画面の作成
・2段階認証画面の作成
・本人確認・許可・拒否画面の作成
・アプリ一覧画面の作成・サイズ変更機能の作成
・アプリ並び替え機能の作成
・アプリのログイン情報の追加・編集・削除機能の作成
・Railsで作成したシングルサインオン画面をReactに移行
・端末の申請画面の作成
・OIDCの認証画面の作成
・SAMLの認証画面の作成
・Dockerによる開発環境の構築
・Prettier・ESLintによるコードフォーマットの構築
・エンドポイントの作成・Rspecによるテスト
・データベーステーブルの作成
・Rakeタスクの作成
・トランザクションによるロールバックの実装
・To Many Connectionになったエンドポイントをまとめた処理の作成
・エンドポイントとの繋ぎこみ`
	},
	{
		dates: "2020年〜現在",
		title: "ブラウザ拡張機能の開発",
		summary: "他の認証方式では対応できない認証方式に対応するための拡張機能の開発",
		phase: phase,
		responsibilities: responsibilities,
		languages: ["TypeScript", "JavaScript", "Ruby"],
		frameworksAndOthers: ["Ruby on Rails", "React", "Material UI", "Jest", "React Testing Library", "Playwright", "Puppeteer", "Cypress", "Rspec", "Github", "Docker", "Figma"],
		os: os,
		role: "フロントエンド開発責任者",
		teamSize: "3人",
		achievements: `\
・PuppeteerによるE2Eテスト環境の構築
・React Testing Libraryによるユニットテスト環境の構築
・アプリ一覧画面の作成
・代理認証機能の作成
・パスワード代理更新機能の作成
・パスワード代理認証機能のバリデーション機能の作成
・代理認証の複数パターンへの対応
・Form submitに夜代理認証を行う機能の作成
・代理入力機能の作成
・代理クリック機能の作成
・エンドポイントとの繋ぎこみ
・URLが一致した場合に代理認証を行う機能の作成
・JavaScriptで作成したブラウザ拡張機能をTypeScriptに移行
・Manifest V2からManifest V3への移行
・エンドポイントの作成・Rspecによるテスト
・データベーステーブルの作成
・Rakeタスクの作成
・トランザクションによるロールバックの実装
・エンドポイントとの繋ぎこみ`
	},
	{
		dates: "2021年〜現在",
		title: "ネイティブアプリの開発",
		summary: "シングルサインオン機能をスマートフォンアプリでも実行できるようにするための開発",
		phase: phase,
		responsibilities: responsibilities,
		languages: ["Dart", "TypeScript", "Ruby"],
		frameworksAndOthers: ["Flutter", "Ruby on Rails", "React", "Material UI", "Jest", "React Testing Library", "Playwright", "Puppeteer", "Cypress", "Rspec", "Github", "Docker", "Figma"],
		os: os,
		role: "フロントエンド開発責任者",
		teamSize: "3人",
		achievements: `\
・PuppeteerによるE2Eテスト環境の構築
・React Testing Libraryによるユニットテスト環境の構築
・代理認証機能の作成
・代理入力機能の作成
・代理クリック機能の作成
・エンドポイントとの繋ぎこみ
・エンドポイントの作成・Rspecによるテスト
・データベーステーブルの作成
・Rakeタスクの作成
・トランザクションによるロールバックの実装
・エンドポイントとの繋ぎこみ`
	},
	{
		dates: "2019年〜2020年",
		title: "仮想通貨 システムトレード サービス",
		summary: "取引所APIを駆使し、プログラムで自動的に取引を行うシステムの開発",
		phase: phase,
		responsibilities: responsibilities,
		languages: ["JavaScript", "Ruby"],
		frameworksAndOthers: ["Vue", "React Native", "Jest", "Rspec", "Github", "Docker"],
		os: os,
		role: "フロントエンド開発責任者",
		teamSize: "4人",
		achievements: `\
・2段階認証機能の実装
・導入画面の作成`
	},
] as const

export const onetapincjp: CurriculumVitae = {
	projects: projects,
	employmentType: "正社員",
	companyName: "株式会社onetap",
	companyOverview: "社内のSaaSを一元管理するためのアプリケーション・ソフトウェアシステムの開発",
	enrollmentPeriod: "2019年4月〜現在",
}

export const convertTechnicalSkillKey = (k: keyof TechnicalSkills) => {
	return ({
		os: "OS",
		programLanguages: "言語",
		frameworksAndOthers: "フレームワーク・その他"
	} as const)[k];
}

export const convertMonthsToYearsMonths = (totalMonths: number) => {
  var years = Math.floor(totalMonths / 12);
  var months = totalMonths % 12;
  return { years: years, months: months };
}

export const technicalSkills: TechnicalSkills = {
	os: {
		Windows: {
			usageMonth: 60,
			level: "要件に応じた環境設計・構築が可能",
		},
		MacOS: {
			usageMonth: 60,
			level: "要件に応じた環境設計・構築が可能",
		},
		Linux: {
			usageMonth: 48,
			level: "要件に応じた環境設計・構築が可能",
		}
	},
	programLanguages: {
		TypeScript: {
			usageMonth: 48,
			level: "最適なコード記述と、指示、改修が可能",
		},
		JavaScript: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Ruby: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Dart: {
			usageMonth: 36,
			level: "最適なコード記述と、改修が可能",
		},
		Go: {
			usageMonth: 24,
			level: "コード記述と、改修が可能",
		}
	},
	frameworksAndOthers: {
		React: {
			usageMonth: 48,
			level: "最適なコード記述と、指示、改修が可能",
		},
		"Next.js": {
			usageMonth: 48,
			level: "最適なコード記述と、指示、改修が可能",
		},
		"Material UI": {
			usageMonth: 48,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Gatsby: {
			usageMonth: 48,
			level: "最適なコード記述と、改修が可能",
		},
		Vue: {
			usageMonth: 48,
			level: "最適なコード記述と、改修が可能",
		},
		Yup: {
			usageMonth: 48,
			level: "最適なコード記述と、改修が可能",
		},
		Vite: {
			usageMonth: 36,
			level: "コード記述と、改修が可能",
		},
		Jest: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Puppeteer: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Cypress: {
			usageMonth: 48,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Playwright: {
			usageMonth: 12,
			level: "コード記述と、改修が可能",
		},
		"React Testing Library": {
			usageMonth: 48,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Rspec: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		"Ruby on Rails": {
			usageMonth: 60,
			level: "最適なコード記述と、改修が可能",
		},
		Flutter: {
			usageMonth: 36,
			level: "コード記述と、改修が可能",
		},
		"React Native": {
			usageMonth: 12,
			level: "コード記述と、改修が可能",
		},
		Docker: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Github: {
			usageMonth: 60,
			level: "最適なコード記述と、指示、改修が可能",
		},
		Figma: {
			usageMonth: 36,
			level: "コード記述と、改修が可能",
		},
		"AWS S3": {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		"AWS Amplify": {
			usageMonth: 24,
			level: "UI上で操作や設定が可能",
		},
		"AWS Lambda": {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		"AWS Route53": {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		"AWS System Manager": {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		"AWS CloudWatch": {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		"AWS EC2": {
			usageMonth: 48,
			level: "UI上で操作や設定が可能",
		},
		"AWS WAF & Shield": {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		Nuxt: {
			usageMonth: 48,
			level: "コード記述と、改修が可能",
		},
		testify: {
			usageMonth: 24,
			level: "コード記述と、改修が可能",
		},
		"AWS DynamoDB": {
			usageMonth: 48,
			level: "UI上で操作や設定が可能",
		},
		Dynamoid: {
			usageMonth: 48,
			level: "コード記述と、改修が可能",
		},
		Slack: {
			usageMonth: 60,
			level: "UI上で操作や設定が可能",
		},
		Sentry: {
			usageMonth: 60,
			level: "UI上で操作や設定が可能",
		},
		"GPT-4": {
			usageMonth: 12,
			level: "UI上で操作や設定が可能",
		},
		DeepL: {
			usageMonth: 24,
			level: "UI上で操作や設定が可能",
		},
		Notion: {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		Zoom: {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		SequelAce: {
			usageMonth: 48,
			level: "UI上で操作や設定が可能",
		},
		SequelPro: {
			usageMonth: 48,
			level: "UI上で操作や設定が可能",
		},
		Postman: {
			usageMonth: 36,
			level: "UI上で操作や設定が可能",
		},
		"Google Chrome": {
			usageMonth: 60,
			level: "UI上で操作や設定が可能",
		},
		"Microsoft Edge": {
			usageMonth: 24,
			level: "UI上で操作や設定が可能",
		},
		Miro: {
			usageMonth: 48,
			level: "UI上で操作や設定が可能",
		}
	}
}

