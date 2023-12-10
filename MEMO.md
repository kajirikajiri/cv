このソフトウェアをまとめると、Skill SetからDocumentsを出力するものである。

```
Skill Set:
1. Hard Skills: 学んだ技術的なスキルや知識。プログラミング、会計、外国語など。
2. Soft Skills: 社会人スキルや人間関係スキル。コミュニケーション、チームワーク、問題解決など。

Hard Skills:
1. 技術知識 (Technical Knowledge)
2. プロジェクト管理 (Project Management)

Soft Skills:
1. 業務遂行能力 (Execution Skills)
2. コミュニケーション能力 (Communication Skills)
3. 問題解決力 (Problem-solving Skills)
4. チームワーク (Teamwork)
5. 創造力 (Creativity)
6. リーダーシップ (Leadership)
7. プロセス改善 (Process Improvement)
8. マルチタスキング能力 (Multitasking Ability)

Documents:
1. 職務経歴書(Curriculum Vitae)
2. 自己PR(Self Promotion)
3. カバーレター(Cover Letter)
```

上記より、Skill Setテーブルを作る。カラム:
- name
  - 
- affinity level
  - 好き度: {1: 嫌い, 10: 好き}
  - できるかどうか？は置いておいて
- skill level
  - できる: {1: できない, 10: できる}
  - 他のスキルとの相対評価になると思う
- usage month
  - 年数
- company id
  - companyテーブルのid

Companyテーブル
- name

やっていて苦ではないこと・苦手なことを書き出したい
例えば
- やっていて苦ではないこと
  - 調べること
    - 何に対してもちゃんと調べる
- 苦手なこと
  - 停滞すること
    - 変化することは重要と考えている

何かを想定して転職をする
- 例えば前回の転職で興味を持った点の目標が達成した、ひと段落したなど。市場の変化が起きていることなど。

提供できる価値をテーブルで作る
- ターゲットになる会社
- ターゲットの需要
- 私が提供できる価値
- 私が期待すること（見返り）

skill mapをQuadrant chartで作る

それぞれのスキルマップのギャラリービューを作る

希望する雇用形態

希望する業種・職種
- 業種: 特になし
- 職種: プログラマ
- 自社開発、自社サービス

希望しない業種
- 業種: 例えばゲーム・広告・アダルトとか書く
- 受託開発みたいな

希望しない職種

希望する勤務地・リモート

希望する年収

TuplifyUnion
https://stackoverflow.com/a/55128956
- 順序は保証されない。
- これを上手く使えば、Object形式で定義されているデータを配列にできそう。取り回しがしやすくなる想定。
  - 例えばTechnicalSkillsの方がObjectになっている。上から順に取り出すならいいが、例えば年数が一定以上のデータとかは取得に一手間かかる。配列の方がfilterですぐ取得できる。
```typescript
// oh boy don't do this
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

// TS4.0+
type Push<T extends any[], V> = [...T, V];

// TS4.1+
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
  true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>

type abc = 'a' | 'b' | 'c';
type t = TuplifyUnion<abc>; // ["a", "b", "c"] 
```
