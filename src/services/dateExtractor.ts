interface TodoUtility {
  execute(arg: string | number | []): string | Array<string> | string[][] | undefined
}

export class DateExtractor implements TodoUtility {
  execute(arg: string): string[] | undefined {
    const result = []
    const strPattern = [
      '\\d{2}-\\d{2}-\\d{4}',
      '[0-9]{2}/{1}[0-9]{2}/{1}[0-9]{4}',
      '\\d{1,2}-(January|February|March|April|May|June|July|August|September|October|November|December)-\\d{4}',
      '\\d{4}-\\d{1,2}-\\d{1,2}',
      '[0-9]{1,2}\\s(January|February|March|April|May|June|July|August|September|October|November|December)\\s\\d{4}',
      '\\d{1,2}-\\d{1,2}-\\d{4}',
    ]

    for (let i = 0; i < 6; i++) {
      const pattern = new RegExp(strPattern[i], 'g')

      result.push(Array.from(arg.matchAll(pattern), (m) => m[0]))
    }

    return result.flat()
  }
}
