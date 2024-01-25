import PouchDB from "pouchdb-browser";

// 扮演 Model

// 不做變動的基本功能，客製新增功能在擴展那邊增加。
class PouchDBComponent  {
  constructor() {

  }

  // --------------------------------------- 建立  ---------------------------------------
  // PunchDB不會重複寫入相同_id
  async writeData(dbName: string, data:JSON) {
    const selectedDB = new PouchDB(dbName);
    try {
      const response = await selectedDB.post(data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  //  --------------------------------------- 讀取  ---------------------------------------
  async readAllData(dbName: string) {
    const selectedDB = new PouchDB(dbName);
    try {
      const result = await selectedDB.allDocs({ include_docs: true });
      return result.rows.map((row: any) => row.doc);
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async findDataById(dbName: string, id: string) {
    const selectedDB = new PouchDB(dbName);
    try {
      const result = await selectedDB.get(id);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  //eg: .findDataById('my-db', 'my-doc-id');

  async findDataByContent(dbName: string, query?: object) {
    const selectedDB = new PouchDB(dbName);

    try {
      const selector: PouchDB.Find.Selector = query || {};
      const result = await selectedDB.find({ selector });
      return result.docs;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  // 一般查詢方法.findDataByContent('my-db', {name: 'John'}} );
  /* 進階查詢方法
      const query = {
        age: { $gt: 18, $lt: 30 },
        $or: [{ name: 'John' }, { name: 'Mary' }]
      };

      const component = new PouchDBComponent();
      await component.findDataByContent('my-db', query );
  */

  // --------------------------------------- 更新 ---------------------------------------
  async updateDataById(dbName: string, id: string, update: any) {
    const selectedDB = new PouchDB(dbName);
    try {
      const doc = await selectedDB.get(id);
      const updatedDoc = Object.assign(doc, update);
      const result = await selectedDB.put(updatedDoc);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  //eg: .updateDataById('my-db', 'my-doc-id', { foo: 'bar' });

  async updateDataByContent(dbName: string, query: any, update: any) {
    const selectedDB = new PouchDB(dbName);

    try {
      const selector: PouchDB.Find.Selector = query || {};
      const result = await selectedDB.find({ selector });
      const docs = result.docs.map((doc: any) => {
        return Object.assign(doc, update);
      });
      const response = await selectedDB.bulkDocs(docs);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  //eg: .updateDataByCustomContent('my-db', { foo: 'bar' }, { foo: 'baz' });
  /* 進階用法
  加入更多條件的查詢與更新
    const query = {
      age: { $gt: 18, $lt: 30 },
      $or: [{ name: 'John' }, { name: 'Mary' }]
    };

    const update = {
      $set: { status: 'active' }
    };

    const component = new PouchDBComponent();
    await component.updateDataByCustomContent('my-db', query, update);
  */

  // --------------------------------------- 刪除 ---------------------------------------
  async deleteDataById(dbName: string, id: string) {
    const selectedDB = new PouchDB(dbName);
    try {
      const doc = await selectedDB.get(id);
      const result = await selectedDB.remove(doc);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  // 一般刪除方法.deleteDataById('my-db', 'my-doc-id'} );

  async deleteDataByIds(dbName: string, ids: string[]) {
    const selectedDB = new PouchDB(dbName);
    try {
      const docs = ids.map((id) => ({ _id: id }));
      const result = await selectedDB.bulkDocs(docs);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  // 多筆ID刪除使用方法 await deleteDataByIds('my-db', ['doc-1', 'doc-2', 'doc-3']);

  async deleteDataByContent(dbName: string, query: any) {
    const selectedDB = new PouchDB(dbName);

    try {
      const selector: PouchDB.Find.Selector = query || {};
      const result = await selectedDB.find({ selector });
      const docs = result.docs.map((doc: any) => {
        return Object.assign(doc, { _deleted: true });
      });
      const response = await selectedDB.bulkDocs(docs);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  /*
  多筆刪除進階用法
    const query = {
      age: { $gt: 18, $lt: 30 },
      $or: [{ name: 'John' }, { name: 'Mary' }]
    };

    const component = new PouchDBComponent();
    await component.deleteDataByContent('my-db', query);
  */
}

// 定義可繼承的通用基類
export class PouchDBBaseComponent extends PouchDBComponent {
  // 這裡可以定義其他需要重寫的方法，或者添加其他方法
}

