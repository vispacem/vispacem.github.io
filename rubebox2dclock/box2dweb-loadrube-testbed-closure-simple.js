var Box2D = {};
(function(a, c) {
    function m() {}
    !(Object.prototype.defineProperty instanceof Function) && (Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function) && (Object.defineProperty = function(a, c, e) {
        e.get instanceof Function && a.__defineGetter__(c, e.get);
        e.set instanceof Function && a.__defineSetter__(c, e.set)
    }
    );
    a.inherit = function(a, c) {
        m.prototype = c.prototype;
        a.prototype = new m;
        a.prototype.constructor = a
    }
    ;
    a.generateCallback = function(a, c) {
        return function() {
            c.apply(a, arguments)
        }
    }
    ;
    a.NVector = function(a) {
        a === c && (a = 0);
        for (var m = Array(a || 0), e = 0; e < a; ++e)
            m[e] = 0;
        return m
    }
    ;
    a.is = function(a, m) {
        return null === a ? !1 : m instanceof Function && a instanceof m || a.constructor.__implements != c && a.constructor.__implements[m] ? !0 : !1
    }
    ;
    a.parseUInt = function(a) {
        return Math.abs(parseInt(a))
    }
}
)(Box2D);
var Vector = Array
  , Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
(function() {
    function a() {
        a.b2AABB.apply(this, arguments)
    }
    function c() {
        c.b2Bound.apply(this, arguments)
    }
    function m() {
        m.b2BoundValues.apply(this, arguments);
        this.constructor === m && this.b2BoundValues.apply(this, arguments)
    }
    function q() {
        q.b2Collision.apply(this, arguments)
    }
    function s() {
        s.b2ContactID.apply(this, arguments);
        this.constructor === s && this.b2ContactID.apply(this, arguments)
    }
    function e() {
        e.b2ContactPoint.apply(this, arguments)
    }
    function w() {
        w.b2Distance.apply(this, arguments)
    }
    function t() {
        t.b2DistanceInput.apply(this, arguments)
    }
    function u() {
        u.b2DistanceOutput.apply(this, arguments)
    }
    function C() {
        C.b2DistanceProxy.apply(this, arguments)
    }
    function F() {
        F.b2DynamicTree.apply(this, arguments);
        this.constructor === F && this.b2DynamicTree.apply(this, arguments)
    }
    function H() {
        H.b2DynamicTreeBroadPhase.apply(this, arguments)
    }
    function A() {
        A.b2DynamicTreeNode.apply(this, arguments)
    }
    function y() {
        y.b2DynamicTreePair.apply(this, arguments)
    }
    function T() {
        T.b2Manifold.apply(this, arguments);
        this.constructor === T && this.b2Manifold.apply(this, arguments)
    }
    function N() {
        N.b2ManifoldPoint.apply(this, arguments);
        this.constructor === N && this.b2ManifoldPoint.apply(this, arguments)
    }
    function l() {
        l.b2Point.apply(this, arguments)
    }
    function P() {
        P.b2RayCastInput.apply(this, arguments);
        this.constructor === P && this.b2RayCastInput.apply(this, arguments)
    }
    function J() {
        J.b2RayCastOutput.apply(this, arguments)
    }
    function L() {
        L.b2Segment.apply(this, arguments)
    }
    function B() {
        B.b2SeparationFunction.apply(this, arguments)
    }
    function O() {
        O.b2Simplex.apply(this, arguments);
        this.constructor === O && this.b2Simplex.apply(this, arguments)
    }
    function I() {
        I.b2SimplexCache.apply(this, arguments)
    }
    function R() {
        R.b2SimplexVertex.apply(this, arguments)
    }
    function K() {
        K.b2TimeOfImpact.apply(this, arguments)
    }
    function M() {
        M.b2TOIInput.apply(this, arguments)
    }
    function S() {
        S.b2WorldManifold.apply(this, arguments);
        this.constructor === S && this.b2WorldManifold.apply(this, arguments)
    }
    function Q() {
        Q.ClipVertex.apply(this, arguments)
    }
    function g() {
        g.Features.apply(this, arguments)
    }
    function p() {
        p.b2CircleShape.apply(this, arguments);
        this.constructor === p && this.b2CircleShape.apply(this, arguments)
    }
    function n() {
        n.b2EdgeChainDef.apply(this, arguments);
        this.constructor === n && this.b2EdgeChainDef.apply(this, arguments)
    }
    function h() {
        h.b2EdgeShape.apply(this, arguments);
        this.constructor === h && this.b2EdgeShape.apply(this, arguments)
    }
    function D() {
        D.b2MassData.apply(this, arguments)
    }
    function x() {
        x.b2PolygonShape.apply(this, arguments);
        this.constructor === x && this.b2PolygonShape.apply(this, arguments)
    }
    function E() {
        E.b2Shape.apply(this, arguments);
        this.constructor === E && this.b2Shape.apply(this, arguments)
    }
    function d() {
        d.b2Color.apply(this, arguments);
        this.constructor === d && this.b2Color.apply(this, arguments)
    }
    function r() {
        r.b2Settings.apply(this, arguments)
    }
    function z() {
        z.b2Mat22.apply(this, arguments);
        this.constructor === z && this.b2Mat22.apply(this, arguments)
    }
    function G() {
        G.b2Mat33.apply(this, arguments);
        this.constructor === G && this.b2Mat33.apply(this, arguments)
    }
    function Ea() {
        Ea.b2Math.apply(this, arguments)
    }
    function Fa() {
        Fa.b2Sweep.apply(this, arguments)
    }
    function U() {
        U.b2Transform.apply(this, arguments);
        this.constructor === U && this.b2Transform.apply(this, arguments)
    }
    function V() {
        V.b2Vec2.apply(this, arguments);
        this.constructor === V && this.b2Vec2.apply(this, arguments)
    }
    function W() {
        W.b2Vec3.apply(this, arguments);
        this.constructor === W && this.b2Vec3.apply(this, arguments)
    }
    function X() {
        X.b2Body.apply(this, arguments);
        this.constructor === X && this.b2Body.apply(this, arguments)
    }
    function Y() {
        Y.b2BodyDef.apply(this, arguments);
        this.constructor === Y && this.b2BodyDef.apply(this, arguments)
    }
    function Ga() {
        Ga.b2ContactFilter.apply(this, arguments)
    }
    function Ha() {
        Ha.b2ContactImpulse.apply(this, arguments)
    }
    function Ia() {
        Ia.b2ContactListener.apply(this, arguments)
    }
    function Z() {
        Z.b2ContactManager.apply(this, arguments);
        this.constructor === Z && this.b2ContactManager.apply(this, arguments)
    }
    function $() {
        $.b2DebugDraw.apply(this, arguments);
        this.constructor === $ && this.b2DebugDraw.apply(this, arguments)
    }
    function Ja() {
        Ja.b2DestructionListener.apply(this, arguments)
    }
    function Ka() {
        Ka.b2FilterData.apply(this, arguments)
    }
    function aa() {
        aa.b2Fixture.apply(this, arguments);
        this.constructor === aa && this.b2Fixture.apply(this, arguments)
    }
    function ba() {
        ba.b2FixtureDef.apply(this, arguments);
        this.constructor === ba && this.b2FixtureDef.apply(this, arguments)
    }
    function ca() {
        ca.b2Island.apply(this, arguments);
        this.constructor === ca && this.b2Island.apply(this, arguments)
    }
    function La() {
        La.b2TimeStep.apply(this, arguments)
    }
    function da() {
        da.b2World.apply(this, arguments);
        this.constructor === da && this.b2World.apply(this, arguments)
    }
    function Ma() {
        Ma.b2CircleContact.apply(this, arguments)
    }
    function ea() {
        ea.b2Contact.apply(this, arguments);
        this.constructor === ea && this.b2Contact.apply(this, arguments)
    }
    function fa() {
        fa.b2ContactConstraint.apply(this, arguments);
        this.constructor === fa && this.b2ContactConstraint.apply(this, arguments)
    }
    function Na() {
        Na.b2ContactConstraintPoint.apply(this, arguments)
    }
    function Oa() {
        Oa.b2ContactEdge.apply(this, arguments)
    }
    function ga() {
        ga.b2ContactFactory.apply(this, arguments);
        this.constructor === ga && this.b2ContactFactory.apply(this, arguments)
    }
    function Pa() {
        Pa.b2ContactRegister.apply(this, arguments)
    }
    function Qa() {
        Qa.b2ContactResult.apply(this, arguments)
    }
    function ha() {
        ha.b2ContactSolver.apply(this, arguments);
        this.constructor === ha && this.b2ContactSolver.apply(this, arguments)
    }
    function Ra() {
        Ra.b2EdgeAndCircleContact.apply(this, arguments)
    }
    function ia() {
        ia.b2NullContact.apply(this, arguments);
        this.constructor === ia && this.b2NullContact.apply(this, arguments)
    }
    function Sa() {
        Sa.b2PolyAndCircleContact.apply(this, arguments)
    }
    function Ta() {
        Ta.b2PolyAndEdgeContact.apply(this, arguments)
    }
    function Ua() {
        Ua.b2PolygonContact.apply(this, arguments)
    }
    function ja() {
        ja.b2PositionSolverManifold.apply(this, arguments);
        this.constructor === ja && this.b2PositionSolverManifold.apply(this, arguments)
    }
    function Va() {
        Va.b2BuoyancyController.apply(this, arguments)
    }
    function Wa() {
        Wa.b2ConstantAccelController.apply(this, arguments)
    }
    function Xa() {
        Xa.b2ConstantForceController.apply(this, arguments)
    }
    function Ya() {
        Ya.b2Controller.apply(this, arguments)
    }
    function Za() {
        Za.b2ControllerEdge.apply(this, arguments)
    }
    function $a() {
        $a.b2GravityController.apply(this, arguments)
    }
    function ab() {
        ab.b2TensorDampingController.apply(this, arguments)
    }
    function ka() {
        ka.b2DistanceJoint.apply(this, arguments);
        this.constructor === ka && this.b2DistanceJoint.apply(this, arguments)
    }
    function la() {
        la.b2DistanceJointDef.apply(this, arguments);
        this.constructor === la && this.b2DistanceJointDef.apply(this, arguments)
    }
    function ma() {
        ma.b2FrictionJoint.apply(this, arguments);
        this.constructor === ma && this.b2FrictionJoint.apply(this, arguments)
    }
    function na() {
        na.b2FrictionJointDef.apply(this, arguments);
        this.constructor === na && this.b2FrictionJointDef.apply(this, arguments)
    }
    function oa() {
        oa.b2GearJoint.apply(this, arguments);
        this.constructor === oa && this.b2GearJoint.apply(this, arguments)
    }
    function pa() {
        pa.b2GearJointDef.apply(this, arguments);
        this.constructor === pa && this.b2GearJointDef.apply(this, arguments)
    }
    function bb() {
        bb.b2Jacobian.apply(this, arguments)
    }
    function qa() {
        qa.b2Joint.apply(this, arguments);
        this.constructor === qa && this.b2Joint.apply(this, arguments)
    }
    function ra() {
        ra.b2JointDef.apply(this, arguments);
        this.constructor === ra && this.b2JointDef.apply(this, arguments)
    }
    function cb() {
        cb.b2JointEdge.apply(this, arguments)
    }
    function sa() {
        sa.b2LineJoint.apply(this, arguments);
        this.constructor === sa && this.b2LineJoint.apply(this, arguments)
    }
    function ta() {
        ta.b2LineJointDef.apply(this, arguments);
        this.constructor === ta && this.b2LineJointDef.apply(this, arguments)
    }
    function ua() {
        ua.b2MouseJoint.apply(this, arguments);
        this.constructor === ua && this.b2MouseJoint.apply(this, arguments)
    }
    function va() {
        va.b2MouseJointDef.apply(this, arguments);
        this.constructor === va && this.b2MouseJointDef.apply(this, arguments)
    }
    function wa() {
        wa.b2PrismaticJoint.apply(this, arguments);
        this.constructor === wa && this.b2PrismaticJoint.apply(this, arguments)
    }
    function xa() {
        xa.b2PrismaticJointDef.apply(this, arguments);
        this.constructor === xa && this.b2PrismaticJointDef.apply(this, arguments)
    }
    function ya() {
        ya.b2PulleyJoint.apply(this, arguments);
        this.constructor === ya && this.b2PulleyJoint.apply(this, arguments)
    }
    function za() {
        za.b2PulleyJointDef.apply(this, arguments);
        this.constructor === za && this.b2PulleyJointDef.apply(this, arguments)
    }
    function Aa() {
        Aa.b2RevoluteJoint.apply(this, arguments);
        this.constructor === Aa && this.b2RevoluteJoint.apply(this, arguments)
    }
    function Ba() {
        Ba.b2RevoluteJointDef.apply(this, arguments);
        this.constructor === Ba && this.b2RevoluteJointDef.apply(this, arguments)
    }
    function Ca() {
        Ca.b2WeldJoint.apply(this, arguments);
        this.constructor === Ca && this.b2WeldJoint.apply(this, arguments)
    }
    function Da() {
        Da.b2WeldJointDef.apply(this, arguments);
        this.constructor === Da && this.b2WeldJointDef.apply(this, arguments)
    }
    Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
    Box2D.Collision.b2AABB = a;
    Box2D.Collision.b2Bound = c;
    Box2D.Collision.b2BoundValues = m;
    Box2D.Collision.b2Collision = q;
    Box2D.Collision.b2ContactID = s;
    Box2D.Collision.b2ContactPoint = e;
    Box2D.Collision.b2Distance = w;
    Box2D.Collision.b2DistanceInput = t;
    Box2D.Collision.b2DistanceOutput = u;
    Box2D.Collision.b2DistanceProxy = C;
    Box2D.Collision.b2DynamicTree = F;
    Box2D.Collision.b2DynamicTreeBroadPhase = H;
    Box2D.Collision.b2DynamicTreeNode = A;
    Box2D.Collision.b2DynamicTreePair = y;
    Box2D.Collision.b2Manifold = T;
    Box2D.Collision.b2ManifoldPoint = N;
    Box2D.Collision.b2Point = l;
    Box2D.Collision.b2RayCastInput = P;
    Box2D.Collision.b2RayCastOutput = J;
    Box2D.Collision.b2Segment = L;
    Box2D.Collision.b2SeparationFunction = B;
    Box2D.Collision.b2Simplex = O;
    Box2D.Collision.b2SimplexCache = I;
    Box2D.Collision.b2SimplexVertex = R;
    Box2D.Collision.b2TimeOfImpact = K;
    Box2D.Collision.b2TOIInput = M;
    Box2D.Collision.b2WorldManifold = S;
    Box2D.Collision.ClipVertex = Q;
    Box2D.Collision.Features = g;
    Box2D.Collision.Shapes.b2CircleShape = p;
    Box2D.Collision.Shapes.b2EdgeChainDef = n;
    Box2D.Collision.Shapes.b2EdgeShape = h;
    Box2D.Collision.Shapes.b2MassData = D;
    Box2D.Collision.Shapes.b2PolygonShape = x;
    Box2D.Collision.Shapes.b2Shape = E;
    Box2D.Common.b2internal = "Box2D.Common.b2internal";
    Box2D.Common.b2Color = d;
    Box2D.Common.b2Settings = r;
    Box2D.Common.Math.b2Mat22 = z;
    Box2D.Common.Math.b2Mat33 = G;
    Box2D.Common.Math.b2Math = Ea;
    Box2D.Common.Math.b2Sweep = Fa;
    Box2D.Common.Math.b2Transform = U;
    Box2D.Common.Math.b2Vec2 = V;
    Box2D.Common.Math.b2Vec3 = W;
    Box2D.Dynamics.b2Body = X;
    Box2D.Dynamics.b2BodyDef = Y;
    Box2D.Dynamics.b2ContactFilter = Ga;
    Box2D.Dynamics.b2ContactImpulse = Ha;
    Box2D.Dynamics.b2ContactListener = Ia;
    Box2D.Dynamics.b2ContactManager = Z;
    Box2D.Dynamics.b2DebugDraw = $;
    Box2D.Dynamics.b2DestructionListener = Ja;
    Box2D.Dynamics.b2FilterData = Ka;
    Box2D.Dynamics.b2Fixture = aa;
    Box2D.Dynamics.b2FixtureDef = ba;
    Box2D.Dynamics.b2Island = ca;
    Box2D.Dynamics.b2TimeStep = La;
    Box2D.Dynamics.b2World = da;
    Box2D.Dynamics.Contacts.b2CircleContact = Ma;
    Box2D.Dynamics.Contacts.b2Contact = ea;
    Box2D.Dynamics.Contacts.b2ContactConstraint = fa;
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Na;
    Box2D.Dynamics.Contacts.b2ContactEdge = Oa;
    Box2D.Dynamics.Contacts.b2ContactFactory = ga;
    Box2D.Dynamics.Contacts.b2ContactRegister = Pa;
    Box2D.Dynamics.Contacts.b2ContactResult = Qa;
    Box2D.Dynamics.Contacts.b2ContactSolver = ha;
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = Ra;
    Box2D.Dynamics.Contacts.b2NullContact = ia;
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = Sa;
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = Ta;
    Box2D.Dynamics.Contacts.b2PolygonContact = Ua;
    Box2D.Dynamics.Contacts.b2PositionSolverManifold = ja;
    Box2D.Dynamics.Controllers.b2BuoyancyController = Va;
    Box2D.Dynamics.Controllers.b2ConstantAccelController = Wa;
    Box2D.Dynamics.Controllers.b2ConstantForceController = Xa;
    Box2D.Dynamics.Controllers.b2Controller = Ya;
    Box2D.Dynamics.Controllers.b2ControllerEdge = Za;
    Box2D.Dynamics.Controllers.b2GravityController = $a;
    Box2D.Dynamics.Controllers.b2TensorDampingController = ab;
    Box2D.Dynamics.Joints.b2DistanceJoint = ka;
    Box2D.Dynamics.Joints.b2DistanceJointDef = la;
    Box2D.Dynamics.Joints.b2FrictionJoint = ma;
    Box2D.Dynamics.Joints.b2FrictionJointDef = na;
    Box2D.Dynamics.Joints.b2GearJoint = oa;
    Box2D.Dynamics.Joints.b2GearJointDef = pa;
    Box2D.Dynamics.Joints.b2Jacobian = bb;
    Box2D.Dynamics.Joints.b2Joint = qa;
    Box2D.Dynamics.Joints.b2JointDef = ra;
    Box2D.Dynamics.Joints.b2JointEdge = cb;
    Box2D.Dynamics.Joints.b2LineJoint = sa;
    Box2D.Dynamics.Joints.b2LineJointDef = ta;
    Box2D.Dynamics.Joints.b2MouseJoint = ua;
    Box2D.Dynamics.Joints.b2MouseJointDef = va;
    Box2D.Dynamics.Joints.b2PrismaticJoint = wa;
    Box2D.Dynamics.Joints.b2PrismaticJointDef = xa;
    Box2D.Dynamics.Joints.b2PulleyJoint = ya;
    Box2D.Dynamics.Joints.b2PulleyJointDef = za;
    Box2D.Dynamics.Joints.b2RevoluteJoint = Aa;
    Box2D.Dynamics.Joints.b2RevoluteJointDef = Ba;
    Box2D.Dynamics.Joints.b2WeldJoint = Ca;
    Box2D.Dynamics.Joints.b2WeldJointDef = Da
}
)();
Box2D.postDefs = [];
(function() {
    var a = Box2D.Collision.Shapes.b2CircleShape
      , c = Box2D.Collision.Shapes.b2EdgeShape
      , m = Box2D.Collision.Shapes.b2PolygonShape
      , q = Box2D.Collision.Shapes.b2Shape
      , s = Box2D.Common.b2Settings
      , e = Box2D.Common.Math.b2Math
      , w = Box2D.Common.Math.b2Sweep
      , t = Box2D.Common.Math.b2Transform
      , u = Box2D.Common.Math.b2Vec2
      , C = Box2D.Collision.b2AABB
      , F = Box2D.Collision.b2Bound
      , H = Box2D.Collision.b2BoundValues
      , A = Box2D.Collision.b2Collision
      , y = Box2D.Collision.b2ContactID
      , T = Box2D.Collision.b2ContactPoint
      , N = Box2D.Collision.b2Distance
      , l = Box2D.Collision.b2DistanceInput
      , P = Box2D.Collision.b2DistanceOutput
      , J = Box2D.Collision.b2DistanceProxy
      , L = Box2D.Collision.b2DynamicTree
      , B = Box2D.Collision.b2DynamicTreeBroadPhase
      , O = Box2D.Collision.b2DynamicTreeNode
      , I = Box2D.Collision.b2DynamicTreePair
      , R = Box2D.Collision.b2Manifold
      , K = Box2D.Collision.b2ManifoldPoint
      , M = Box2D.Collision.b2Point
      , S = Box2D.Collision.b2RayCastInput
      , Q = Box2D.Collision.b2RayCastOutput
      , g = Box2D.Collision.b2Segment
      , p = Box2D.Collision.b2SeparationFunction
      , n = Box2D.Collision.b2Simplex
      , h = Box2D.Collision.b2SimplexCache
      , D = Box2D.Collision.b2SimplexVertex
      , x = Box2D.Collision.b2TimeOfImpact
      , E = Box2D.Collision.b2TOIInput
      , d = Box2D.Collision.b2WorldManifold
      , r = Box2D.Collision.ClipVertex
      , z = Box2D.Collision.Features
      , G = Box2D.Collision.IBroadPhase;
    C.b2AABB = function() {
        this.lowerBound = new u;
        this.upperBound = new u
    }
    ;
    C.prototype.IsValid = function() {
        var d = this.upperBound.y - this.lowerBound.y;
        return d = (d = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= d) && this.lowerBound.IsValid() && this.upperBound.IsValid()
    }
    ;
    C.prototype.GetCenter = function() {
        return new u((this.lowerBound.x + this.upperBound.x) / 2,(this.lowerBound.y + this.upperBound.y) / 2)
    }
    ;
    C.prototype.GetExtents = function() {
        return new u((this.upperBound.x - this.lowerBound.x) / 2,(this.upperBound.y - this.lowerBound.y) / 2)
    }
    ;
    C.prototype.Contains = function(d) {
        var r;
        return r = (r = (r = (r = this.lowerBound.x <= d.lowerBound.x) && this.lowerBound.y <= d.lowerBound.y) && d.upperBound.x <= this.upperBound.x) && d.upperBound.y <= this.upperBound.y
    }
    ;
    C.prototype.RayCast = function(d, r) {
        var g = -Number.MAX_VALUE
          , h = Number.MAX_VALUE
          , z = r.p1.x
          , p = r.p1.y
          , a = r.p2.x - r.p1.x
          , n = r.p2.y - r.p1.y
          , l = Math.abs(a)
          , E = Math.abs(n)
          , G = d.normal
          , x = 0
          , D = 0
          , t = x = 0
          , t = 0;
        if (l < Number.MIN_VALUE) {
            if (z < this.lowerBound.x || this.upperBound.x < z)
                return !1
        } else if (x = 1 / a,
        D = (this.lowerBound.x - z) * x,
        x *= this.upperBound.x - z,
        t = -1,
        D > x && (t = D,
        D = x,
        x = t,
        t = 1),
        D > g && (G.x = t,
        G.y = 0,
        g = D),
        h = Math.min(h, x),
        g > h)
            return !1;
        if (E < Number.MIN_VALUE) {
            if (p < this.lowerBound.y || this.upperBound.y < p)
                return !1
        } else if (x = 1 / n,
        D = (this.lowerBound.y - p) * x,
        x *= this.upperBound.y - p,
        t = -1,
        D > x && (t = D,
        D = x,
        x = t,
        t = 1),
        D > g && (G.y = t,
        G.x = 0,
        g = D),
        h = Math.min(h, x),
        g > h)
            return !1;
        d.fraction = g;
        return !0
    }
    ;
    C.prototype.TestOverlap = function(d) {
        var r = d.lowerBound.y - this.upperBound.y
          , g = this.lowerBound.y - d.upperBound.y;
        return 0 < d.lowerBound.x - this.upperBound.x || 0 < r || 0 < this.lowerBound.x - d.upperBound.x || 0 < g ? !1 : !0
    }
    ;
    C.Combine = function(d, r) {
        var g = new C;
        g.Combine(d, r);
        return g
    }
    ;
    C.prototype.Combine = function(d, r) {
        this.lowerBound.x = Math.min(d.lowerBound.x, r.lowerBound.x);
        this.lowerBound.y = Math.min(d.lowerBound.y, r.lowerBound.y);
        this.upperBound.x = Math.max(d.upperBound.x, r.upperBound.x);
        this.upperBound.y = Math.max(d.upperBound.y, r.upperBound.y)
    }
    ;
    F.b2Bound = function() {}
    ;
    F.prototype.IsLower = function() {
        return 0 == (this.value & 1)
    }
    ;
    F.prototype.IsUpper = function() {
        return 1 == (this.value & 1)
    }
    ;
    F.prototype.Swap = function(d) {
        var r = this.value
          , g = this.proxy
          , h = this.stabbingCount;
        this.value = d.value;
        this.proxy = d.proxy;
        this.stabbingCount = d.stabbingCount;
        d.value = r;
        d.proxy = g;
        d.stabbingCount = h
    }
    ;
    H.b2BoundValues = function() {}
    ;
    H.prototype.b2BoundValues = function() {
        this.lowerValues = new Vector_a2j_Number;
        this.lowerValues[0] = 0;
        this.lowerValues[1] = 0;
        this.upperValues = new Vector_a2j_Number;
        this.upperValues[0] = 0;
        this.upperValues[1] = 0
    }
    ;
    A.b2Collision = function() {}
    ;
    A.ClipSegmentToLine = function(d, r, g, h) {
        void 0 === h && (h = 0);
        var z, p = 0;
        z = r[0];
        var a = z.v;
        z = r[1];
        var n = z.v
          , l = g.x * a.x + g.y * a.y - h;
        z = g.x * n.x + g.y * n.y - h;
        0 >= l && d[p++].Set(r[0]);
        0 >= z && d[p++].Set(r[1]);
        0 > l * z && (g = l / (l - z),
        z = d[p],
        z = z.v,
        z.x = a.x + g * (n.x - a.x),
        z.y = a.y + g * (n.y - a.y),
        z = d[p],
        z.id = (0 < l ? r[0] : r[1]).id,
        ++p);
        return p
    }
    ;
    A.EdgeSeparation = function(d, r, g, z, h) {
        void 0 === g && (g = 0);
        parseInt(d.m_vertexCount);
        var p = d.m_vertices;
        d = d.m_normals;
        var a = parseInt(z.m_vertexCount), n = z.m_vertices, l, x;
        l = r.R;
        x = d[g];
        d = l.col1.x * x.x + l.col2.x * x.y;
        z = l.col1.y * x.x + l.col2.y * x.y;
        l = h.R;
        var G = l.col1.x * d + l.col1.y * z;
        l = l.col2.x * d + l.col2.y * z;
        for (var E = 0, D = Number.MAX_VALUE, t = 0; t < a; ++t)
            x = n[t],
            x = x.x * G + x.y * l,
            x < D && (D = x,
            E = t);
        x = p[g];
        l = r.R;
        g = r.position.x + (l.col1.x * x.x + l.col2.x * x.y);
        r = r.position.y + (l.col1.y * x.x + l.col2.y * x.y);
        x = n[E];
        l = h.R;
        p = h.position.x + (l.col1.x * x.x + l.col2.x * x.y);
        h = h.position.y + (l.col1.y * x.x + l.col2.y * x.y);
        return (p - g) * d + (h - r) * z
    }
    ;
    A.FindMaxSeparation = function(d, r, g, z, h) {
        var p = parseInt(r.m_vertexCount), a = r.m_normals, l, n;
        n = h.R;
        l = z.m_centroid;
        var x = h.position.x + (n.col1.x * l.x + n.col2.x * l.y)
          , E = h.position.y + (n.col1.y * l.x + n.col2.y * l.y);
        n = g.R;
        l = r.m_centroid;
        x -= g.position.x + (n.col1.x * l.x + n.col2.x * l.y);
        E -= g.position.y + (n.col1.y * l.x + n.col2.y * l.y);
        n = x * g.R.col1.x + E * g.R.col1.y;
        for (var E = x * g.R.col2.x + E * g.R.col2.y, x = 0, G = -Number.MAX_VALUE, D = 0; D < p; ++D)
            l = a[D],
            l = l.x * n + l.y * E,
            l > G && (G = l,
            x = D);
        a = A.EdgeSeparation(r, g, x, z, h);
        l = parseInt(0 <= x - 1 ? x - 1 : p - 1);
        n = A.EdgeSeparation(r, g, l, z, h);
        var E = parseInt(x + 1 < p ? x + 1 : 0)
          , G = A.EdgeSeparation(r, g, E, z, h)
          , t = D = 0
          , c = 0;
        if (n > a && n > G)
            c = -1,
            D = l,
            t = n;
        else if (G > a)
            c = 1,
            D = E,
            t = G;
        else
            return d[0] = x,
            a;
        for (; ; )
            if (x = -1 == c ? 0 <= D - 1 ? D - 1 : p - 1 : D + 1 < p ? D + 1 : 0,
            a = A.EdgeSeparation(r, g, x, z, h),
            a > t)
                D = x,
                t = a;
            else
                break;
        d[0] = D;
        return t
    }
    ;
    A.FindIncidentEdge = function(d, r, g, z, h, p) {
        void 0 === z && (z = 0);
        parseInt(r.m_vertexCount);
        var l = r.m_normals
          , a = parseInt(h.m_vertexCount);
        r = h.m_vertices;
        h = h.m_normals;
        var n;
        n = g.R;
        g = l[z];
        var l = n.col1.x * g.x + n.col2.x * g.y
          , x = n.col1.y * g.x + n.col2.y * g.y;
        n = p.R;
        g = n.col1.x * l + n.col1.y * x;
        x = n.col2.x * l + n.col2.y * x;
        l = g;
        n = 0;
        for (var E = Number.MAX_VALUE, G = 0; G < a; ++G)
            g = h[G],
            g = l * g.x + x * g.y,
            g < E && (E = g,
            n = G);
        h = parseInt(n);
        l = parseInt(h + 1 < a ? h + 1 : 0);
        a = d[0];
        g = r[h];
        n = p.R;
        a.v.x = p.position.x + (n.col1.x * g.x + n.col2.x * g.y);
        a.v.y = p.position.y + (n.col1.y * g.x + n.col2.y * g.y);
        a.id.features.referenceEdge = z;
        a.id.features.incidentEdge = h;
        a.id.features.incidentVertex = 0;
        a = d[1];
        g = r[l];
        n = p.R;
        a.v.x = p.position.x + (n.col1.x * g.x + n.col2.x * g.y);
        a.v.y = p.position.y + (n.col1.y * g.x + n.col2.y * g.y);
        a.id.features.referenceEdge = z;
        a.id.features.incidentEdge = l;
        a.id.features.incidentVertex = 1
    }
    ;
    A.MakeClipPointVector = function() {
        var d = new Vector(2);
        d[0] = new r;
        d[1] = new r;
        return d
    }
    ;
    A.CollidePolygons = function(d, r, g, h, z) {
        var p;
        d.m_pointCount = 0;
        var n = r.m_radius + h.m_radius;
        A.s_edgeAO[0] = 0;
        var a = A.FindMaxSeparation(A.s_edgeAO, r, g, h, z);
        p = A.s_edgeAO[0];
        if (!(a > n)) {
            var l;
            A.s_edgeBO[0] = 0;
            var x = A.FindMaxSeparation(A.s_edgeBO, h, z, r, g);
            l = A.s_edgeBO[0];
            if (!(x > n)) {
                var E = 0
                  , G = 0;
                x > 0.98 * a + 0.001 ? (a = h,
                h = r,
                r = z,
                E = l,
                d.m_type = R.e_faceB,
                G = 1) : (a = r,
                r = g,
                g = z,
                E = p,
                d.m_type = R.e_faceA,
                G = 0);
                p = A.s_incidentEdge;
                A.FindIncidentEdge(p, a, r, E, h, g);
                l = parseInt(a.m_vertexCount);
                z = a.m_vertices;
                var a = z[E], D;
                D = E + 1 < l ? z[parseInt(E + 1)] : z[0];
                E = A.s_localTangent;
                E.Set(D.x - a.x, D.y - a.y);
                E.Normalize();
                z = A.s_localNormal;
                z.x = E.y;
                z.y = -E.x;
                h = A.s_planePoint;
                h.Set(0.5 * (a.x + D.x), 0.5 * (a.y + D.y));
                x = A.s_tangent;
                l = r.R;
                x.x = l.col1.x * E.x + l.col2.x * E.y;
                x.y = l.col1.y * E.x + l.col2.y * E.y;
                var t = A.s_tangent2;
                t.x = -x.x;
                t.y = -x.y;
                E = A.s_normal;
                E.x = x.y;
                E.y = -x.x;
                var c = A.s_v11
                  , e = A.s_v12;
                c.x = r.position.x + (l.col1.x * a.x + l.col2.x * a.y);
                c.y = r.position.y + (l.col1.y * a.x + l.col2.y * a.y);
                e.x = r.position.x + (l.col1.x * D.x + l.col2.x * D.y);
                e.y = r.position.y + (l.col1.y * D.x + l.col2.y * D.y);
                r = E.x * c.x + E.y * c.y;
                l = x.x * e.x + x.y * e.y + n;
                D = A.s_clipPoints1;
                a = A.s_clipPoints2;
                e = 0;
                e = A.ClipSegmentToLine(D, p, t, -x.x * c.x - x.y * c.y + n);
                if (!(2 > e) && (e = A.ClipSegmentToLine(a, D, x, l),
                !(2 > e))) {
                    d.m_localPlaneNormal.SetV(z);
                    d.m_localPoint.SetV(h);
                    for (h = z = 0; h < s.b2_maxManifoldPoints; ++h)
                        p = a[h],
                        E.x * p.v.x + E.y * p.v.y - r <= n && (x = d.m_points[z],
                        l = g.R,
                        t = p.v.x - g.position.x,
                        c = p.v.y - g.position.y,
                        x.m_localPoint.x = t * l.col1.x + c * l.col1.y,
                        x.m_localPoint.y = t * l.col2.x + c * l.col2.y,
                        x.m_id.Set(p.id),
                        x.m_id.features.flip = G,
                        ++z);
                    d.m_pointCount = z
                }
            }
        }
    }
    ;
    A.CollideCircles = function(d, r, g, h, z) {
        d.m_pointCount = 0;
        var p, l;
        p = g.R;
        l = r.m_p;
        var a = g.position.x + (p.col1.x * l.x + p.col2.x * l.y);
        g = g.position.y + (p.col1.y * l.x + p.col2.y * l.y);
        p = z.R;
        l = h.m_p;
        a = z.position.x + (p.col1.x * l.x + p.col2.x * l.y) - a;
        z = z.position.y + (p.col1.y * l.x + p.col2.y * l.y) - g;
        p = r.m_radius + h.m_radius;
        a * a + z * z > p * p || (d.m_type = R.e_circles,
        d.m_localPoint.SetV(r.m_p),
        d.m_localPlaneNormal.SetZero(),
        d.m_pointCount = 1,
        d.m_points[0].m_localPoint.SetV(h.m_p),
        d.m_points[0].m_id.key = 0)
    }
    ;
    A.CollidePolygonAndCircle = function(d, r, g, z, h) {
        var p = d.m_pointCount = 0, l = 0, a, n;
        n = h.R;
        a = z.m_p;
        var x = h.position.y + (n.col1.y * a.x + n.col2.y * a.y)
          , p = h.position.x + (n.col1.x * a.x + n.col2.x * a.y) - g.position.x
          , l = x - g.position.y;
        n = g.R;
        g = p * n.col1.x + l * n.col1.y;
        n = p * n.col2.x + l * n.col2.y;
        var E = 0
          , x = -Number.MAX_VALUE;
        h = r.m_radius + z.m_radius;
        var G = parseInt(r.m_vertexCount)
          , D = r.m_vertices;
        r = r.m_normals;
        for (var t = 0; t < G; ++t) {
            a = D[t];
            p = g - a.x;
            l = n - a.y;
            a = r[t];
            p = a.x * p + a.y * l;
            if (p > h)
                return;
            p > x && (x = p,
            E = t)
        }
        p = parseInt(E);
        l = parseInt(p + 1 < G ? p + 1 : 0);
        a = D[p];
        D = D[l];
        x < Number.MIN_VALUE ? (d.m_pointCount = 1,
        d.m_type = R.e_faceA,
        d.m_localPlaneNormal.SetV(r[E]),
        d.m_localPoint.x = 0.5 * (a.x + D.x),
        d.m_localPoint.y = 0.5 * (a.y + D.y),
        d.m_points[0].m_localPoint.SetV(z.m_p),
        d.m_points[0].m_id.key = 0) : (x = (g - D.x) * (a.x - D.x) + (n - D.y) * (a.y - D.y),
        0 >= (g - a.x) * (D.x - a.x) + (n - a.y) * (D.y - a.y) ? (g - a.x) * (g - a.x) + (n - a.y) * (n - a.y) > h * h || (d.m_pointCount = 1,
        d.m_type = R.e_faceA,
        d.m_localPlaneNormal.x = g - a.x,
        d.m_localPlaneNormal.y = n - a.y,
        d.m_localPlaneNormal.Normalize(),
        d.m_localPoint.SetV(a),
        d.m_points[0].m_localPoint.SetV(z.m_p),
        d.m_points[0].m_id.key = 0) : 0 >= x ? (g - D.x) * (g - D.x) + (n - D.y) * (n - D.y) > h * h || (d.m_pointCount = 1,
        d.m_type = R.e_faceA,
        d.m_localPlaneNormal.x = g - D.x,
        d.m_localPlaneNormal.y = n - D.y,
        d.m_localPlaneNormal.Normalize(),
        d.m_localPoint.SetV(D),
        d.m_points[0].m_localPoint.SetV(z.m_p),
        d.m_points[0].m_id.key = 0) : (E = 0.5 * (a.x + D.x),
        a = 0.5 * (a.y + D.y),
        x = (g - E) * r[p].x + (n - a) * r[p].y,
        x > h || (d.m_pointCount = 1,
        d.m_type = R.e_faceA,
        d.m_localPlaneNormal.x = r[p].x,
        d.m_localPlaneNormal.y = r[p].y,
        d.m_localPlaneNormal.Normalize(),
        d.m_localPoint.Set(E, a),
        d.m_points[0].m_localPoint.SetV(z.m_p),
        d.m_points[0].m_id.key = 0)))
    }
    ;
    A.TestOverlap = function(d, r) {
        var g = r.lowerBound
          , h = d.upperBound
          , z = g.x - h.x
          , p = g.y - h.y
          , g = d.lowerBound
          , h = r.upperBound
          , a = g.y - h.y;
        return 0 < z || 0 < p || 0 < g.x - h.x || 0 < a ? !1 : !0
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Collision.s_incidentEdge = A.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints1 = A.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints2 = A.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_localTangent = new u;
        Box2D.Collision.b2Collision.s_localNormal = new u;
        Box2D.Collision.b2Collision.s_planePoint = new u;
        Box2D.Collision.b2Collision.s_normal = new u;
        Box2D.Collision.b2Collision.s_tangent = new u;
        Box2D.Collision.b2Collision.s_tangent2 = new u;
        Box2D.Collision.b2Collision.s_v11 = new u;
        Box2D.Collision.b2Collision.s_v12 = new u;
        Box2D.Collision.b2Collision.b2CollidePolyTempVec = new u;
        Box2D.Collision.b2Collision.b2_nullFeature = 255
    });
    y.b2ContactID = function() {
        this.features = new z
    }
    ;
    y.prototype.b2ContactID = function() {
        this.features._m_id = this
    }
    ;
    y.prototype.Set = function(d) {
        this.key = d._key
    }
    ;
    y.prototype.Copy = function() {
        var d = new y;
        d.key = this.key;
        return d
    }
    ;
    Object.defineProperty(y.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._key
        }
    });
    Object.defineProperty(y.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        set: function(d) {
            void 0 === d && (d = 0);
            this._key = d;
            this.features._referenceEdge = this._key & 255;
            this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
            this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
            this.features._flip = (this._key & 4278190080) >> 24 & 255
        }
    });
    T.b2ContactPoint = function() {
        this.position = new u;
        this.velocity = new u;
        this.normal = new u;
        this.id = new y
    }
    ;
    N.b2Distance = function() {}
    ;
    N.Distance = function(d, r, g) {
        ++N.b2_gjkCalls;
        var h = g.proxyA
          , z = g.proxyB
          , p = g.transformA
          , a = g.transformB
          , l = N.s_simplex;
        l.ReadCache(r, h, p, z, a);
        var n = l.m_vertices
          , x = N.s_saveA
          , E = N.s_saveB
          , D = 0;
        l.GetClosestPoint().LengthSquared();
        for (var G = 0, t, c = 0; 20 > c; ) {
            D = l.m_count;
            for (G = 0; G < D; G++)
                x[G] = n[G].indexA,
                E[G] = n[G].indexB;
            switch (l.m_count) {
            case 1:
                break;
            case 2:
                l.Solve2();
                break;
            case 3:
                l.Solve3();
                break;
            default:
                s.b2Assert(!1)
            }
            if (3 == l.m_count)
                break;
            t = l.GetClosestPoint();
            t.LengthSquared();
            G = l.GetSearchDirection();
            if (G.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE)
                break;
            t = n[l.m_count];
            t.indexA = h.GetSupport(e.MulTMV(p.R, G.GetNegative()));
            t.wA = e.MulX(p, h.GetVertex(t.indexA));
            t.indexB = z.GetSupport(e.MulTMV(a.R, G));
            t.wB = e.MulX(a, z.GetVertex(t.indexB));
            t.w = e.SubtractVV(t.wB, t.wA);
            ++c;
            ++N.b2_gjkIters;
            for (var q = !1, G = 0; G < D; G++)
                if (t.indexA == x[G] && t.indexB == E[G]) {
                    q = !0;
                    break
                }
            if (q)
                break;
            ++l.m_count
        }
        N.b2_gjkMaxIters = e.Max(N.b2_gjkMaxIters, c);
        l.GetWitnessPoints(d.pointA, d.pointB);
        d.distance = e.SubtractVV(d.pointA, d.pointB).Length();
        d.iterations = c;
        l.WriteCache(r);
        g.useRadii && (r = h.m_radius,
        z = z.m_radius,
        d.distance > r + z && d.distance > Number.MIN_VALUE ? (d.distance -= r + z,
        g = e.SubtractVV(d.pointB, d.pointA),
        g.Normalize(),
        d.pointA.x += r * g.x,
        d.pointA.y += r * g.y,
        d.pointB.x -= z * g.x,
        d.pointB.y -= z * g.y) : (t = new u,
        t.x = 0.5 * (d.pointA.x + d.pointB.x),
        t.y = 0.5 * (d.pointA.y + d.pointB.y),
        d.pointA.x = d.pointB.x = t.x,
        d.pointA.y = d.pointB.y = t.y,
        d.distance = 0))
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Distance.s_simplex = new n;
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
    });
    l.b2DistanceInput = function() {}
    ;
    P.b2DistanceOutput = function() {
        this.pointA = new u;
        this.pointB = new u
    }
    ;
    J.b2DistanceProxy = function() {}
    ;
    J.prototype.Set = function(d) {
        switch (d.GetType()) {
        case q.e_circleShape:
            d = d instanceof a ? d : null;
            this.m_vertices = new Vector(1,!0);
            this.m_vertices[0] = d.m_p;
            this.m_count = 1;
            this.m_radius = d.m_radius;
            break;
        case q.e_polygonShape:
            d = d instanceof m ? d : null;
            this.m_vertices = d.m_vertices;
            this.m_count = d.m_vertexCount;
            this.m_radius = d.m_radius;
            break;
        case q.e_edgeShape:
            d = d instanceof c ? d : null;
            this.m_vertices = new Vector(2,!0);
            this.m_vertices[0] = d.m_v1;
            this.m_vertices[1] = d.m_v2;
            this.m_count = 2;
            this.m_radius = d.m_radius;
            break;
        default:
            s.b2Assert(!1)
        }
    }
    ;
    J.prototype.GetSupport = function(d) {
        for (var r = 0, g = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y, h = 1; h < this.m_count; ++h) {
            var z = this.m_vertices[h].x * d.x + this.m_vertices[h].y * d.y;
            z > g && (r = h,
            g = z)
        }
        return r
    }
    ;
    J.prototype.GetSupportVertex = function(d) {
        for (var r = 0, g = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y, h = 1; h < this.m_count; ++h) {
            var z = this.m_vertices[h].x * d.x + this.m_vertices[h].y * d.y;
            z > g && (r = h,
            g = z)
        }
        return this.m_vertices[r]
    }
    ;
    J.prototype.GetVertexCount = function() {
        return this.m_count
    }
    ;
    J.prototype.GetVertex = function(d) {
        void 0 === d && (d = 0);
        s.b2Assert(0 <= d && d < this.m_count);
        return this.m_vertices[d]
    }
    ;
    L.b2DynamicTree = function() {}
    ;
    L.prototype.b2DynamicTree = function() {
        this.m_freeList = this.m_root = null;
        this.m_insertionCount = this.m_path = 0
    }
    ;
    L.prototype.CreateProxy = function(d, r) {
        var g = this.AllocateNode()
          , h = s.b2_aabbExtension
          , z = s.b2_aabbExtension;
        g.aabb.lowerBound.x = d.lowerBound.x - h;
        g.aabb.lowerBound.y = d.lowerBound.y - z;
        g.aabb.upperBound.x = d.upperBound.x + h;
        g.aabb.upperBound.y = d.upperBound.y + z;
        g.userData = r;
        this.InsertLeaf(g);
        return g
    }
    ;
    L.prototype.DestroyProxy = function(d) {
        this.RemoveLeaf(d);
        this.FreeNode(d)
    }
    ;
    L.prototype.MoveProxy = function(d, g, r) {
        s.b2Assert(d.IsLeaf());
        if (d.aabb.Contains(g))
            return !1;
        this.RemoveLeaf(d);
        var h = s.b2_aabbExtension + s.b2_aabbMultiplier * (0 < r.x ? r.x : -r.x);
        r = s.b2_aabbExtension + s.b2_aabbMultiplier * (0 < r.y ? r.y : -r.y);
        d.aabb.lowerBound.x = g.lowerBound.x - h;
        d.aabb.lowerBound.y = g.lowerBound.y - r;
        d.aabb.upperBound.x = g.upperBound.x + h;
        d.aabb.upperBound.y = g.upperBound.y + r;
        this.InsertLeaf(d);
        return !0
    }
    ;
    L.prototype.Rebalance = function(d) {
        void 0 === d && (d = 0);
        if (null != this.m_root)
            for (var r = 0; r < d; r++) {
                for (var g = this.m_root, h = 0; !1 == g.IsLeaf(); )
                    g = this.m_path >> h & 1 ? g.child2 : g.child1,
                    h = h + 1 & 31;
                ++this.m_path;
                this.RemoveLeaf(g);
                this.InsertLeaf(g)
            }
    }
    ;
    L.prototype.GetFatAABB = function(d) {
        return d.aabb
    }
    ;
    L.prototype.GetUserData = function(d) {
        return d.userData
    }
    ;
    L.prototype.Query = function(d, g) {
        if (null != this.m_root) {
            var r = new Vector
              , h = 0;
            for (r[h++] = this.m_root; 0 < h; ) {
                var z = r[--h];
                if (z.aabb.TestOverlap(g))
                    if (z.IsLeaf()) {
                        if (!d(z))
                            break
                    } else
                        r[h++] = z.child1,
                        r[h++] = z.child2
            }
        }
    }
    ;
    L.prototype.RayCast = function(d, r) {
        if (null != this.m_root) {
            var g = r.p1
              , h = r.p2
              , z = e.SubtractVV(g, h);
            z.Normalize();
            var z = e.CrossFV(1, z)
              , p = e.AbsV(z)
              , a = r.maxFraction
              , l = new C
              , n = 0
              , x = 0
              , n = g.x + a * (h.x - g.x)
              , x = g.y + a * (h.y - g.y);
            l.lowerBound.x = Math.min(g.x, n);
            l.lowerBound.y = Math.min(g.y, x);
            l.upperBound.x = Math.max(g.x, n);
            l.upperBound.y = Math.max(g.y, x);
            var E = new Vector
              , G = 0;
            for (E[G++] = this.m_root; 0 < G; )
                if (a = E[--G],
                !1 != a.aabb.TestOverlap(l) && (n = a.aabb.GetCenter(),
                x = a.aabb.GetExtents(),
                !(0 < Math.abs(z.x * (g.x - n.x) + z.y * (g.y - n.y)) - p.x * x.x - p.y * x.y)))
                    if (a.IsLeaf()) {
                        n = new S;
                        n.p1 = r.p1;
                        n.p2 = r.p2;
                        n.maxFraction = r.maxFraction;
                        a = d(n, a);
                        if (0 == a)
                            break;
                        0 < a && (n = g.x + a * (h.x - g.x),
                        x = g.y + a * (h.y - g.y),
                        l.lowerBound.x = Math.min(g.x, n),
                        l.lowerBound.y = Math.min(g.y, x),
                        l.upperBound.x = Math.max(g.x, n),
                        l.upperBound.y = Math.max(g.y, x))
                    } else
                        E[G++] = a.child1,
                        E[G++] = a.child2
        }
    }
    ;
    L.prototype.AllocateNode = function() {
        if (this.m_freeList) {
            var d = this.m_freeList;
            this.m_freeList = d.parent;
            d.parent = null;
            d.child1 = null;
            d.child2 = null;
            return d
        }
        return new O
    }
    ;
    L.prototype.FreeNode = function(d) {
        d.parent = this.m_freeList;
        this.m_freeList = d
    }
    ;
    L.prototype.InsertLeaf = function(d) {
        ++this.m_insertionCount;
        if (null == this.m_root)
            this.m_root = d,
            this.m_root.parent = null;
        else {
            var g = d.aabb.GetCenter()
              , r = this.m_root;
            if (!1 == r.IsLeaf()) {
                do
                    var h = r.child1
                      , r = r.child2
                      , z = Math.abs((h.aabb.lowerBound.x + h.aabb.upperBound.x) / 2 - g.x) + Math.abs((h.aabb.lowerBound.y + h.aabb.upperBound.y) / 2 - g.y)
                      , p = Math.abs((r.aabb.lowerBound.x + r.aabb.upperBound.x) / 2 - g.x) + Math.abs((r.aabb.lowerBound.y + r.aabb.upperBound.y) / 2 - g.y)
                      , r = z < p ? h : r;
                while (!1 == r.IsLeaf())
            }
            g = r.parent;
            h = this.AllocateNode();
            h.parent = g;
            h.userData = null;
            h.aabb.Combine(d.aabb, r.aabb);
            if (g) {
                r.parent.child1 == r ? g.child1 = h : g.child2 = h;
                h.child1 = r;
                h.child2 = d;
                r.parent = h;
                d.parent = h;
                do {
                    if (g.aabb.Contains(h.aabb))
                        break;
                    g.aabb.Combine(g.child1.aabb, g.child2.aabb);
                    h = g;
                    g = g.parent
                } while (g)
            } else
                h.child1 = r,
                h.child2 = d,
                r.parent = h,
                this.m_root = d.parent = h
        }
    }
    ;
    L.prototype.RemoveLeaf = function(d) {
        if (d == this.m_root)
            this.m_root = null;
        else {
            var g = d.parent
              , r = g.parent;
            d = g.child1 == d ? g.child2 : g.child1;
            if (r) {
                r.child1 == g ? r.child1 = d : r.child2 = d;
                d.parent = r;
                for (this.FreeNode(g); r; ) {
                    g = r.aabb;
                    r.aabb = C.Combine(r.child1.aabb, r.child2.aabb);
                    if (g.Contains(r.aabb))
                        break;
                    r = r.parent
                }
            } else
                this.m_root = d,
                d.parent = null,
                this.FreeNode(g)
        }
    }
    ;
    B.b2DynamicTreeBroadPhase = function() {
        this.m_tree = new L;
        this.m_moveBuffer = new Vector;
        this.m_pairBuffer = new Vector;
        this.m_pairCount = 0
    }
    ;
    B.prototype.CreateProxy = function(d, g) {
        var r = this.m_tree.CreateProxy(d, g);
        ++this.m_proxyCount;
        this.BufferMove(r);
        return r
    }
    ;
    B.prototype.DestroyProxy = function(d) {
        this.UnBufferMove(d);
        --this.m_proxyCount;
        this.m_tree.DestroyProxy(d)
    }
    ;
    B.prototype.MoveProxy = function(d, g, r) {
        this.m_tree.MoveProxy(d, g, r) && this.BufferMove(d)
    }
    ;
    B.prototype.TestOverlap = function(d, g) {
        var r = this.m_tree.GetFatAABB(d)
          , h = this.m_tree.GetFatAABB(g);
        return r.TestOverlap(h)
    }
    ;
    B.prototype.GetUserData = function(d) {
        return this.m_tree.GetUserData(d)
    }
    ;
    B.prototype.GetFatAABB = function(d) {
        return this.m_tree.GetFatAABB(d)
    }
    ;
    B.prototype.GetProxyCount = function() {
        return this.m_proxyCount
    }
    ;
    B.prototype.UpdatePairs = function(d) {
        for (var g = this, r = g.m_pairCount = 0, h, r = 0; r < g.m_moveBuffer.length; ++r) {
            h = g.m_moveBuffer[r];
            var z = g.m_tree.GetFatAABB(h);
            g.m_tree.Query(function(d) {
                if (d == h)
                    return !0;
                g.m_pairCount == g.m_pairBuffer.length && (g.m_pairBuffer[g.m_pairCount] = new I);
                var r = g.m_pairBuffer[g.m_pairCount];
                r.proxyA = d < h ? d : h;
                r.proxyB = d >= h ? d : h;
                ++g.m_pairCount;
                return !0
            }, z)
        }
        for (r = g.m_moveBuffer.length = 0; r < g.m_pairCount; ) {
            var z = g.m_pairBuffer[r]
              , p = g.m_tree.GetUserData(z.proxyA)
              , a = g.m_tree.GetUserData(z.proxyB);
            d(p, a);
            for (++r; r < g.m_pairCount; ) {
                p = g.m_pairBuffer[r];
                if (p.proxyA != z.proxyA || p.proxyB != z.proxyB)
                    break;
                ++r
            }
        }
    }
    ;
    B.prototype.Query = function(d, g) {
        this.m_tree.Query(d, g)
    }
    ;
    B.prototype.RayCast = function(d, g) {
        this.m_tree.RayCast(d, g)
    }
    ;
    B.prototype.Validate = function() {}
    ;
    B.prototype.Rebalance = function(d) {
        void 0 === d && (d = 0);
        this.m_tree.Rebalance(d)
    }
    ;
    B.prototype.BufferMove = function(d) {
        this.m_moveBuffer[this.m_moveBuffer.length] = d
    }
    ;
    B.prototype.UnBufferMove = function(d) {
        d = parseInt(this.m_moveBuffer.indexOf(d));
        this.m_moveBuffer.splice(d, 1)
    }
    ;
    B.prototype.ComparePairs = function() {
        return 0
    }
    ;
    B.__implements = {};
    B.__implements[G] = !0;
    O.b2DynamicTreeNode = function() {
        this.aabb = new C
    }
    ;
    O.prototype.IsLeaf = function() {
        return null == this.child1
    }
    ;
    I.b2DynamicTreePair = function() {}
    ;
    R.b2Manifold = function() {
        this.m_pointCount = 0
    }
    ;
    R.prototype.b2Manifold = function() {
        this.m_points = new Vector(s.b2_maxManifoldPoints);
        for (var d = 0; d < s.b2_maxManifoldPoints; d++)
            this.m_points[d] = new K;
        this.m_localPlaneNormal = new u;
        this.m_localPoint = new u
    }
    ;
    R.prototype.Reset = function() {
        for (var d = 0; d < s.b2_maxManifoldPoints; d++)
            (this.m_points[d]instanceof K ? this.m_points[d] : null).Reset();
        this.m_localPlaneNormal.SetZero();
        this.m_localPoint.SetZero();
        this.m_pointCount = this.m_type = 0
    }
    ;
    R.prototype.Set = function(d) {
        this.m_pointCount = d.m_pointCount;
        for (var g = 0; g < s.b2_maxManifoldPoints; g++)
            (this.m_points[g]instanceof K ? this.m_points[g] : null).Set(d.m_points[g]);
        this.m_localPlaneNormal.SetV(d.m_localPlaneNormal);
        this.m_localPoint.SetV(d.m_localPoint);
        this.m_type = d.m_type
    }
    ;
    R.prototype.Copy = function() {
        var d = new R;
        d.Set(this);
        return d
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Manifold.e_circles = 1;
        Box2D.Collision.b2Manifold.e_faceA = 2;
        Box2D.Collision.b2Manifold.e_faceB = 4
    });
    K.b2ManifoldPoint = function() {
        this.m_localPoint = new u;
        this.m_id = new y
    }
    ;
    K.prototype.b2ManifoldPoint = function() {
        this.Reset()
    }
    ;
    K.prototype.Reset = function() {
        this.m_localPoint.SetZero();
        this.m_tangentImpulse = this.m_normalImpulse = 0;
        this.m_id.key = 0
    }
    ;
    K.prototype.Set = function(d) {
        this.m_localPoint.SetV(d.m_localPoint);
        this.m_normalImpulse = d.m_normalImpulse;
        this.m_tangentImpulse = d.m_tangentImpulse;
        this.m_id.Set(d.m_id)
    }
    ;
    M.b2Point = function() {
        this.p = new u
    }
    ;
    M.prototype.Support = function() {
        return this.p
    }
    ;
    M.prototype.GetFirstVertex = function() {
        return this.p
    }
    ;
    S.b2RayCastInput = function() {
        this.p1 = new u;
        this.p2 = new u
    }
    ;
    S.prototype.b2RayCastInput = function(d, g, r) {
        void 0 === d && (d = null);
        void 0 === g && (g = null);
        void 0 === r && (r = 1);
        d && this.p1.SetV(d);
        g && this.p2.SetV(g);
        this.maxFraction = r
    }
    ;
    Q.b2RayCastOutput = function() {
        this.normal = new u
    }
    ;
    g.b2Segment = function() {
        this.p1 = new u;
        this.p2 = new u
    }
    ;
    g.prototype.TestSegment = function(d, g, r, h) {
        void 0 === h && (h = 0);
        var z = r.p1
          , p = r.p2.x - z.x
          , a = r.p2.y - z.y;
        r = this.p2.y - this.p1.y;
        var l = -(this.p2.x - this.p1.x)
          , n = 100 * Number.MIN_VALUE
          , x = -(p * r + a * l);
        if (x > n) {
            var E = z.x - this.p1.x
              , G = z.y - this.p1.y
              , z = E * r + G * l;
            if (0 <= z && z <= h * x && (h = -p * G + a * E,
            -n * x <= h && h <= x * (1 + n)))
                return z /= x,
                h = Math.sqrt(r * r + l * l),
                d[0] = z,
                g.Set(r / h, l / h),
                !0
        }
        return !1
    }
    ;
    g.prototype.Extend = function(d) {
        this.ExtendForward(d);
        this.ExtendBackward(d)
    }
    ;
    g.prototype.ExtendForward = function(d) {
        var g = this.p2.x - this.p1.x
          , r = this.p2.y - this.p1.y;
        d = Math.min(0 < g ? (d.upperBound.x - this.p1.x) / g : 0 > g ? (d.lowerBound.x - this.p1.x) / g : Number.POSITIVE_INFINITY, 0 < r ? (d.upperBound.y - this.p1.y) / r : 0 > r ? (d.lowerBound.y - this.p1.y) / r : Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + g * d;
        this.p2.y = this.p1.y + r * d
    }
    ;
    g.prototype.ExtendBackward = function(d) {
        var g = -this.p2.x + this.p1.x
          , r = -this.p2.y + this.p1.y;
        d = Math.min(0 < g ? (d.upperBound.x - this.p2.x) / g : 0 > g ? (d.lowerBound.x - this.p2.x) / g : Number.POSITIVE_INFINITY, 0 < r ? (d.upperBound.y - this.p2.y) / r : 0 > r ? (d.lowerBound.y - this.p2.y) / r : Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + g * d;
        this.p1.y = this.p2.y + r * d
    }
    ;
    p.b2SeparationFunction = function() {
        this.m_localPoint = new u;
        this.m_axis = new u
    }
    ;
    p.prototype.Initialize = function(d, g, r, h, z) {
        this.m_proxyA = g;
        this.m_proxyB = h;
        var a = parseInt(d.count);
        s.b2Assert(0 < a && 3 > a);
        var l, n, x, E, G = E = x = h = g = 0, D = 0, G = 0;
        1 == a ? (this.m_type = p.e_points,
        l = this.m_proxyA.GetVertex(d.indexA[0]),
        n = this.m_proxyB.GetVertex(d.indexB[0]),
        a = l,
        d = r.R,
        g = r.position.x + (d.col1.x * a.x + d.col2.x * a.y),
        h = r.position.y + (d.col1.y * a.x + d.col2.y * a.y),
        a = n,
        d = z.R,
        x = z.position.x + (d.col1.x * a.x + d.col2.x * a.y),
        E = z.position.y + (d.col1.y * a.x + d.col2.y * a.y),
        this.m_axis.x = x - g,
        this.m_axis.y = E - h,
        this.m_axis.Normalize()) : (d.indexB[0] == d.indexB[1] ? (this.m_type = p.e_faceA,
        g = this.m_proxyA.GetVertex(d.indexA[0]),
        h = this.m_proxyA.GetVertex(d.indexA[1]),
        n = this.m_proxyB.GetVertex(d.indexB[0]),
        this.m_localPoint.x = 0.5 * (g.x + h.x),
        this.m_localPoint.y = 0.5 * (g.y + h.y),
        this.m_axis = e.CrossVF(e.SubtractVV(h, g), 1),
        this.m_axis.Normalize(),
        a = this.m_axis,
        d = r.R,
        G = d.col1.x * a.x + d.col2.x * a.y,
        D = d.col1.y * a.x + d.col2.y * a.y,
        a = this.m_localPoint,
        d = r.R,
        g = r.position.x + (d.col1.x * a.x + d.col2.x * a.y),
        h = r.position.y + (d.col1.y * a.x + d.col2.y * a.y),
        a = n,
        d = z.R,
        x = z.position.x + (d.col1.x * a.x + d.col2.x * a.y),
        E = z.position.y + (d.col1.y * a.x + d.col2.y * a.y),
        G = (x - g) * G + (E - h) * D) : d.indexA[0] == d.indexA[0] ? (this.m_type = p.e_faceB,
        x = this.m_proxyB.GetVertex(d.indexB[0]),
        E = this.m_proxyB.GetVertex(d.indexB[1]),
        l = this.m_proxyA.GetVertex(d.indexA[0]),
        this.m_localPoint.x = 0.5 * (x.x + E.x),
        this.m_localPoint.y = 0.5 * (x.y + E.y),
        this.m_axis = e.CrossVF(e.SubtractVV(E, x), 1),
        this.m_axis.Normalize(),
        a = this.m_axis,
        d = z.R,
        G = d.col1.x * a.x + d.col2.x * a.y,
        D = d.col1.y * a.x + d.col2.y * a.y,
        a = this.m_localPoint,
        d = z.R,
        x = z.position.x + (d.col1.x * a.x + d.col2.x * a.y),
        E = z.position.y + (d.col1.y * a.x + d.col2.y * a.y),
        a = l,
        d = r.R,
        g = r.position.x + (d.col1.x * a.x + d.col2.x * a.y),
        h = r.position.y + (d.col1.y * a.x + d.col2.y * a.y),
        G = (g - x) * G + (h - E) * D) : (g = this.m_proxyA.GetVertex(d.indexA[0]),
        h = this.m_proxyA.GetVertex(d.indexA[1]),
        x = this.m_proxyB.GetVertex(d.indexB[0]),
        E = this.m_proxyB.GetVertex(d.indexB[1]),
        e.MulX(r, l),
        l = e.MulMV(r.R, e.SubtractVV(h, g)),
        e.MulX(z, n),
        G = e.MulMV(z.R, e.SubtractVV(E, x)),
        z = l.x * l.x + l.y * l.y,
        n = G.x * G.x + G.y * G.y,
        d = e.SubtractVV(G, l),
        r = l.x * d.x + l.y * d.y,
        d = G.x * d.x + G.y * d.y,
        l = l.x * G.x + l.y * G.y,
        D = z * n - l * l,
        G = 0,
        0 != D && (G = e.Clamp((l * d - r * n) / D, 0, 1)),
        0 > (l * G + d) / n && (G = e.Clamp((l - r) / z, 0, 1)),
        l = new u,
        l.x = g.x + G * (h.x - g.x),
        l.y = g.y + G * (h.y - g.y),
        n = new u,
        n.x = x.x + G * (E.x - x.x),
        n.y = x.y + G * (E.y - x.y),
        0 == G || 1 == G ? (this.m_type = p.e_faceB,
        this.m_axis = e.CrossVF(e.SubtractVV(E, x), 1),
        this.m_axis.Normalize(),
        this.m_localPoint = n) : (this.m_type = p.e_faceA,
        this.m_axis = e.CrossVF(e.SubtractVV(h, g), 1),
        this.m_localPoint = l)),
        0 > G && this.m_axis.NegativeSelf())
    }
    ;
    p.prototype.Evaluate = function(d, g) {
        var r, h, z = 0;
        switch (this.m_type) {
        case p.e_points:
            return r = e.MulTMV(d.R, this.m_axis),
            h = e.MulTMV(g.R, this.m_axis.GetNegative()),
            r = this.m_proxyA.GetSupportVertex(r),
            h = this.m_proxyB.GetSupportVertex(h),
            r = e.MulX(d, r),
            h = e.MulX(g, h),
            z = (h.x - r.x) * this.m_axis.x + (h.y - r.y) * this.m_axis.y;
        case p.e_faceA:
            return z = e.MulMV(d.R, this.m_axis),
            r = e.MulX(d, this.m_localPoint),
            h = e.MulTMV(g.R, z.GetNegative()),
            h = this.m_proxyB.GetSupportVertex(h),
            h = e.MulX(g, h),
            z = (h.x - r.x) * z.x + (h.y - r.y) * z.y;
        case p.e_faceB:
            return z = e.MulMV(g.R, this.m_axis),
            h = e.MulX(g, this.m_localPoint),
            r = e.MulTMV(d.R, z.GetNegative()),
            r = this.m_proxyA.GetSupportVertex(r),
            r = e.MulX(d, r),
            z = (r.x - h.x) * z.x + (r.y - h.y) * z.y;
        default:
            return s.b2Assert(!1),
            0
        }
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2SeparationFunction.e_points = 1;
        Box2D.Collision.b2SeparationFunction.e_faceA = 2;
        Box2D.Collision.b2SeparationFunction.e_faceB = 4
    });
    n.b2Simplex = function() {
        this.m_v1 = new D;
        this.m_v2 = new D;
        this.m_v3 = new D;
        this.m_vertices = new Vector(3)
    }
    ;
    n.prototype.b2Simplex = function() {
        this.m_vertices[0] = this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3
    }
    ;
    n.prototype.ReadCache = function(d, g, r, h, z) {
        s.b2Assert(0 <= d.count && 3 >= d.count);
        var a, p;
        this.m_count = d.count;
        for (var l = this.m_vertices, n = 0; n < this.m_count; n++) {
            var x = l[n];
            x.indexA = d.indexA[n];
            x.indexB = d.indexB[n];
            a = g.GetVertex(x.indexA);
            p = h.GetVertex(x.indexB);
            x.wA = e.MulX(r, a);
            x.wB = e.MulX(z, p);
            x.w = e.SubtractVV(x.wB, x.wA);
            x.a = 0
        }
        if (1 < this.m_count && (d = d.metric,
        a = this.GetMetric(),
        a < 0.5 * d || 2 * d < a || a < Number.MIN_VALUE))
            this.m_count = 0;
        0 == this.m_count && (x = l[0],
        x.indexA = 0,
        x.indexB = 0,
        a = g.GetVertex(0),
        p = h.GetVertex(0),
        x.wA = e.MulX(r, a),
        x.wB = e.MulX(z, p),
        x.w = e.SubtractVV(x.wB, x.wA),
        this.m_count = 1)
    }
    ;
    n.prototype.WriteCache = function(d) {
        d.metric = this.GetMetric();
        d.count = Box2D.parseUInt(this.m_count);
        for (var g = this.m_vertices, r = 0; r < this.m_count; r++)
            d.indexA[r] = Box2D.parseUInt(g[r].indexA),
            d.indexB[r] = Box2D.parseUInt(g[r].indexB)
    }
    ;
    n.prototype.GetSearchDirection = function() {
        switch (this.m_count) {
        case 1:
            return this.m_v1.w.GetNegative();
        case 2:
            var d = e.SubtractVV(this.m_v2.w, this.m_v1.w);
            return 0 < e.CrossVV(d, this.m_v1.w.GetNegative()) ? e.CrossFV(1, d) : e.CrossVF(d, 1);
        default:
            return s.b2Assert(!1),
            new u
        }
    }
    ;
    n.prototype.GetClosestPoint = function() {
        switch (this.m_count) {
        case 0:
            return s.b2Assert(!1),
            new u;
        case 1:
            return this.m_v1.w;
        case 2:
            return new u(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
        default:
            return s.b2Assert(!1),
            new u
        }
    }
    ;
    n.prototype.GetWitnessPoints = function(d, g) {
        switch (this.m_count) {
        case 0:
            s.b2Assert(!1);
            break;
        case 1:
            d.SetV(this.m_v1.wA);
            g.SetV(this.m_v1.wB);
            break;
        case 2:
            d.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
            d.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
            g.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
            g.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
            break;
        case 3:
            g.x = d.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
            g.y = d.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
            break;
        default:
            s.b2Assert(!1)
        }
    }
    ;
    n.prototype.GetMetric = function() {
        switch (this.m_count) {
        case 0:
            return s.b2Assert(!1),
            0;
        case 1:
            return 0;
        case 2:
            return e.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
        case 3:
            return e.CrossVV(e.SubtractVV(this.m_v2.w, this.m_v1.w), e.SubtractVV(this.m_v3.w, this.m_v1.w));
        default:
            return s.b2Assert(!1),
            0
        }
    }
    ;
    n.prototype.Solve2 = function() {
        var d = this.m_v1.w
          , g = this.m_v2.w
          , r = e.SubtractVV(g, d)
          , d = -(d.x * r.x + d.y * r.y);
        0 >= d ? this.m_count = this.m_v1.a = 1 : (g = g.x * r.x + g.y * r.y,
        0 >= g ? (this.m_count = this.m_v2.a = 1,
        this.m_v1.Set(this.m_v2)) : (r = 1 / (g + d),
        this.m_v1.a = g * r,
        this.m_v2.a = d * r,
        this.m_count = 2))
    }
    ;
    n.prototype.Solve3 = function() {
        var d = this.m_v1.w
          , g = this.m_v2.w
          , r = this.m_v3.w
          , h = e.SubtractVV(g, d)
          , z = e.Dot(d, h)
          , a = e.Dot(g, h)
          , z = -z
          , p = e.SubtractVV(r, d)
          , l = e.Dot(d, p)
          , n = e.Dot(r, p)
          , l = -l
          , x = e.SubtractVV(r, g)
          , G = e.Dot(g, x)
          , x = e.Dot(r, x)
          , G = -G
          , p = e.CrossVV(h, p)
          , h = p * e.CrossVV(g, r)
          , r = p * e.CrossVV(r, d)
          , d = p * e.CrossVV(d, g);
        0 >= z && 0 >= l ? this.m_count = this.m_v1.a = 1 : 0 < a && 0 < z && 0 >= d ? (n = 1 / (a + z),
        this.m_v1.a = a * n,
        this.m_v2.a = z * n,
        this.m_count = 2) : 0 < n && 0 < l && 0 >= r ? (a = 1 / (n + l),
        this.m_v1.a = n * a,
        this.m_v3.a = l * a,
        this.m_count = 2,
        this.m_v2.Set(this.m_v3)) : 0 >= a && 0 >= G ? (this.m_count = this.m_v2.a = 1,
        this.m_v1.Set(this.m_v2)) : 0 >= n && 0 >= x ? (this.m_count = this.m_v3.a = 1,
        this.m_v1.Set(this.m_v3)) : 0 < x && 0 < G && 0 >= h ? (a = 1 / (x + G),
        this.m_v2.a = x * a,
        this.m_v3.a = G * a,
        this.m_count = 2,
        this.m_v1.Set(this.m_v3)) : (a = 1 / (h + r + d),
        this.m_v1.a = h * a,
        this.m_v2.a = r * a,
        this.m_v3.a = d * a,
        this.m_count = 3)
    }
    ;
    h.b2SimplexCache = function() {
        this.indexA = new Vector_a2j_Number(3);
        this.indexB = new Vector_a2j_Number(3)
    }
    ;
    D.b2SimplexVertex = function() {}
    ;
    D.prototype.Set = function(d) {
        this.wA.SetV(d.wA);
        this.wB.SetV(d.wB);
        this.w.SetV(d.w);
        this.a = d.a;
        this.indexA = d.indexA;
        this.indexB = d.indexB
    }
    ;
    x.b2TimeOfImpact = function() {}
    ;
    x.TimeOfImpact = function(d) {
        ++x.b2_toiCalls;
        var g = d.proxyA
          , r = d.proxyB
          , h = d.sweepA
          , z = d.sweepB;
        s.b2Assert(h.t0 == z.t0);
        s.b2Assert(1 - h.t0 > Number.MIN_VALUE);
        var a = g.m_radius + r.m_radius;
        d = d.tolerance;
        var p = 0
          , l = 0
          , n = 0;
        x.s_cache.count = 0;
        for (x.s_distanceInput.useRadii = !1; ; ) {
            h.GetTransform(x.s_xfA, p);
            z.GetTransform(x.s_xfB, p);
            x.s_distanceInput.proxyA = g;
            x.s_distanceInput.proxyB = r;
            x.s_distanceInput.transformA = x.s_xfA;
            x.s_distanceInput.transformB = x.s_xfB;
            N.Distance(x.s_distanceOutput, x.s_cache, x.s_distanceInput);
            if (0 >= x.s_distanceOutput.distance) {
                p = 1;
                break
            }
            x.s_fcn.Initialize(x.s_cache, g, x.s_xfA, r, x.s_xfB);
            var G = x.s_fcn.Evaluate(x.s_xfA, x.s_xfB);
            if (0 >= G) {
                p = 1;
                break
            }
            0 == l && (n = G > a ? e.Max(a - d, 0.75 * a) : e.Max(G - d, 0.02 * a));
            if (G - n < 0.5 * d) {
                if (0 == l) {
                    p = 1;
                    break
                }
                break
            }
            var E = p
              , D = p
              , t = 1;
            h.GetTransform(x.s_xfA, t);
            z.GetTransform(x.s_xfB, t);
            var c = x.s_fcn.Evaluate(x.s_xfA, x.s_xfB);
            if (c >= n) {
                p = 1;
                break
            }
            for (var q = 0; ; ) {
                var m = 0
                  , m = q & 1 ? D + (n - G) * (t - D) / (c - G) : 0.5 * (D + t);
                h.GetTransform(x.s_xfA, m);
                z.GetTransform(x.s_xfB, m);
                var J = x.s_fcn.Evaluate(x.s_xfA, x.s_xfB);
                if (e.Abs(J - n) < 0.025 * d) {
                    E = m;
                    break
                }
                J > n ? (D = m,
                G = J) : (t = m,
                c = J);
                ++q;
                ++x.b2_toiRootIters;
                if (50 == q)
                    break
            }
            x.b2_toiMaxRootIters = e.Max(x.b2_toiMaxRootIters, q);
            if (E < (1 + 100 * Number.MIN_VALUE) * p)
                break;
            p = E;
            l++;
            ++x.b2_toiIters;
            if (1E3 == l)
                break
        }
        x.b2_toiMaxIters = e.Max(x.b2_toiMaxIters, l);
        return p
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.s_cache = new h;
        Box2D.Collision.b2TimeOfImpact.s_distanceInput = new l;
        Box2D.Collision.b2TimeOfImpact.s_xfA = new t;
        Box2D.Collision.b2TimeOfImpact.s_xfB = new t;
        Box2D.Collision.b2TimeOfImpact.s_fcn = new p;
        Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new P
    });
    E.b2TOIInput = function() {
        this.proxyA = new J;
        this.proxyB = new J;
        this.sweepA = new w;
        this.sweepB = new w
    }
    ;
    d.b2WorldManifold = function() {
        this.m_normal = new u
    }
    ;
    d.prototype.b2WorldManifold = function() {
        this.m_points = new Vector(s.b2_maxManifoldPoints);
        for (var d = 0; d < s.b2_maxManifoldPoints; d++)
            this.m_points[d] = new u
    }
    ;
    d.prototype.Initialize = function(d, g, r, h, z) {
        void 0 === r && (r = 0);
        void 0 === z && (z = 0);
        if (0 != d.m_pointCount) {
            var a = 0, p, l, n = 0, x = 0, G = 0, E = 0, D = 0;
            p = 0;
            switch (d.m_type) {
            case R.e_circles:
                l = g.R;
                p = d.m_localPoint;
                a = g.position.x + l.col1.x * p.x + l.col2.x * p.y;
                g = g.position.y + l.col1.y * p.x + l.col2.y * p.y;
                l = h.R;
                p = d.m_points[0].m_localPoint;
                d = h.position.x + l.col1.x * p.x + l.col2.x * p.y;
                h = h.position.y + l.col1.y * p.x + l.col2.y * p.y;
                p = d - a;
                l = h - g;
                n = p * p + l * l;
                n > Number.MIN_VALUE * Number.MIN_VALUE ? (n = Math.sqrt(n),
                this.m_normal.x = p / n,
                this.m_normal.y = l / n) : (this.m_normal.x = 1,
                this.m_normal.y = 0);
                p = g + r * this.m_normal.y;
                h -= z * this.m_normal.y;
                this.m_points[0].x = 0.5 * (a + r * this.m_normal.x + (d - z * this.m_normal.x));
                this.m_points[0].y = 0.5 * (p + h);
                break;
            case R.e_faceA:
                l = g.R;
                p = d.m_localPlaneNormal;
                n = l.col1.x * p.x + l.col2.x * p.y;
                x = l.col1.y * p.x + l.col2.y * p.y;
                l = g.R;
                p = d.m_localPoint;
                G = g.position.x + l.col1.x * p.x + l.col2.x * p.y;
                E = g.position.y + l.col1.y * p.x + l.col2.y * p.y;
                this.m_normal.x = n;
                this.m_normal.y = x;
                for (a = 0; a < d.m_pointCount; a++)
                    l = h.R,
                    p = d.m_points[a].m_localPoint,
                    D = h.position.x + l.col1.x * p.x + l.col2.x * p.y,
                    p = h.position.y + l.col1.y * p.x + l.col2.y * p.y,
                    this.m_points[a].x = D + 0.5 * (r - (D - G) * n - (p - E) * x - z) * n,
                    this.m_points[a].y = p + 0.5 * (r - (D - G) * n - (p - E) * x - z) * x;
                break;
            case R.e_faceB:
                l = h.R;
                p = d.m_localPlaneNormal;
                n = l.col1.x * p.x + l.col2.x * p.y;
                x = l.col1.y * p.x + l.col2.y * p.y;
                l = h.R;
                p = d.m_localPoint;
                G = h.position.x + l.col1.x * p.x + l.col2.x * p.y;
                E = h.position.y + l.col1.y * p.x + l.col2.y * p.y;
                this.m_normal.x = -n;
                this.m_normal.y = -x;
                for (a = 0; a < d.m_pointCount; a++)
                    l = g.R,
                    p = d.m_points[a].m_localPoint,
                    D = g.position.x + l.col1.x * p.x + l.col2.x * p.y,
                    p = g.position.y + l.col1.y * p.x + l.col2.y * p.y,
                    this.m_points[a].x = D + 0.5 * (z - (D - G) * n - (p - E) * x - r) * n,
                    this.m_points[a].y = p + 0.5 * (z - (D - G) * n - (p - E) * x - r) * x
            }
        }
    }
    ;
    r.ClipVertex = function() {
        this.v = new u;
        this.id = new y
    }
    ;
    r.prototype.Set = function(d) {
        this.v.SetV(d.v);
        this.id.Set(d.id)
    }
    ;
    z.Features = function() {}
    ;
    Object.defineProperty(z.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._referenceEdge
        }
    });
    Object.defineProperty(z.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(d) {
            void 0 === d && (d = 0);
            this._referenceEdge = d;
            this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
        }
    });
    Object.defineProperty(z.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentEdge
        }
    });
    Object.defineProperty(z.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(d) {
            void 0 === d && (d = 0);
            this._incidentEdge = d;
            this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
        }
    });
    Object.defineProperty(z.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentVertex
        }
    });
    Object.defineProperty(z.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        set: function(d) {
            void 0 === d && (d = 0);
            this._incidentVertex = d;
            this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680
        }
    });
    Object.defineProperty(z.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._flip
        }
    });
    Object.defineProperty(z.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        set: function(d) {
            void 0 === d && (d = 0);
            this._flip = d;
            this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
        }
    })
}
)();
(function() {
    var a = Box2D.Common.b2Settings
      , c = Box2D.Collision.Shapes.b2CircleShape
      , m = Box2D.Collision.Shapes.b2EdgeChainDef
      , q = Box2D.Collision.Shapes.b2EdgeShape
      , s = Box2D.Collision.Shapes.b2MassData
      , e = Box2D.Collision.Shapes.b2PolygonShape
      , w = Box2D.Collision.Shapes.b2Shape
      , t = Box2D.Common.Math.b2Mat22
      , u = Box2D.Common.Math.b2Math
      , C = Box2D.Common.Math.b2Transform
      , F = Box2D.Common.Math.b2Vec2
      , H = Box2D.Collision.b2Distance
      , A = Box2D.Collision.b2DistanceInput
      , y = Box2D.Collision.b2DistanceOutput
      , T = Box2D.Collision.b2DistanceProxy
      , N = Box2D.Collision.b2SimplexCache;
    Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
    c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    c.b2CircleShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.m_p = new F
    }
    ;
    c.prototype.Copy = function() {
        var a = new c;
        a.Set(this);
        return a
    }
    ;
    c.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        Box2D.is(a, c) && this.m_p.SetV((a instanceof c ? a : null).m_p)
    }
    ;
    c.prototype.TestPoint = function(a, t) {
        var c = a.R
          , e = a.position.x + (c.col1.x * this.m_p.x + c.col2.x * this.m_p.y)
          , c = a.position.y + (c.col1.y * this.m_p.x + c.col2.y * this.m_p.y)
          , e = t.x - e
          , c = t.y - c;
        return e * e + c * c <= this.m_radius * this.m_radius
    }
    ;
    c.prototype.RayCast = function(a, t, c) {
        var e = c.R
          , q = t.p1.x - (c.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
        c = t.p1.y - (c.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
        var e = t.p2.x - t.p1.x
          , m = t.p2.y - t.p1.y
          , u = q * e + c * m
          , s = e * e + m * m
          , A = u * u - s * (q * q + c * c - this.m_radius * this.m_radius);
        if (0 > A || s < Number.MIN_VALUE)
            return !1;
        u = -(u + Math.sqrt(A));
        return 0 <= u && u <= t.maxFraction * s ? (u /= s,
        a.fraction = u,
        a.normal.x = q + u * e,
        a.normal.y = c + u * m,
        a.normal.Normalize(),
        !0) : !1
    }
    ;
    c.prototype.ComputeAABB = function(a, t) {
        var c = t.R
          , e = t.position.x + (c.col1.x * this.m_p.x + c.col2.x * this.m_p.y)
          , c = t.position.y + (c.col1.y * this.m_p.x + c.col2.y * this.m_p.y);
        a.lowerBound.Set(e - this.m_radius, c - this.m_radius);
        a.upperBound.Set(e + this.m_radius, c + this.m_radius)
    }
    ;
    c.prototype.ComputeMass = function(l, t) {
        void 0 === t && (t = 0);
        l.mass = t * a.b2_pi * this.m_radius * this.m_radius;
        l.center.SetV(this.m_p);
        l.I = l.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
    }
    ;
    c.prototype.ComputeSubmergedArea = function(a, t, c, e) {
        void 0 === t && (t = 0);
        c = u.MulX(c, this.m_p);
        var q = -(u.Dot(a, c) - t);
        if (q < -this.m_radius + Number.MIN_VALUE)
            return 0;
        if (q > this.m_radius)
            return e.SetV(c),
            Math.PI * this.m_radius * this.m_radius;
        t = this.m_radius * this.m_radius;
        var m = q * q
          , q = t * (Math.asin(q / this.m_radius) + Math.PI / 2) + q * Math.sqrt(t - m);
        t = -2 / 3 * Math.pow(t - m, 1.5) / q;
        e.x = c.x + a.x * t;
        e.y = c.y + a.y * t;
        return q
    }
    ;
    c.prototype.GetLocalPosition = function() {
        return this.m_p
    }
    ;
    c.prototype.SetLocalPosition = function(a) {
        this.m_p.SetV(a)
    }
    ;
    c.prototype.GetRadius = function() {
        return this.m_radius
    }
    ;
    c.prototype.SetRadius = function(a) {
        void 0 === a && (a = 0);
        this.m_radius = a
    }
    ;
    c.prototype.b2CircleShape = function(a) {
        void 0 === a && (a = 0);
        this.__super.b2Shape.call(this);
        this.m_type = w.e_circleShape;
        this.m_radius = a
    }
    ;
    m.b2EdgeChainDef = function() {}
    ;
    m.prototype.b2EdgeChainDef = function() {
        this.vertexCount = 0;
        this.isALoop = !0;
        this.vertices = []
    }
    ;
    Box2D.inherit(q, Box2D.Collision.Shapes.b2Shape);
    q.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    q.b2EdgeShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.s_supportVec = new F;
        this.m_v1 = new F;
        this.m_v2 = new F;
        this.m_coreV1 = new F;
        this.m_coreV2 = new F;
        this.m_normal = new F;
        this.m_direction = new F;
        this.m_cornerDir1 = new F;
        this.m_cornerDir2 = new F
    }
    ;
    q.prototype.TestPoint = function() {
        return !1
    }
    ;
    q.prototype.Copy = function() {
        var a = new q(this.m_v1,this.m_v2);
        a.Set(this);
        return a
    }
    ;
    q.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        Box2D.is(a, q) && (a = a instanceof q ? a : null,
        this.s_supportVec.SetV(a.s_supportVec),
        this.m_v1.SetV(a.m_v1),
        this.m_v2.SetV(a.m_v2),
        this.m_coreV1.SetV(a.m_coreV1),
        this.m_coreV2.SetV(a.m_coreV2),
        this.m_normal.SetV(a.m_normal),
        this.m_direction.SetV(a.m_direction),
        this.m_cornerDir1.SetV(a.m_cornerDir1),
        this.m_cornerDir2.SetV(a.m_cornerDir2))
    }
    ;
    q.prototype.RayCast = function(a, t, c) {
        var e, q = t.p2.x - t.p1.x, m = t.p2.y - t.p1.y;
        e = c.R;
        var u = c.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y)
          , s = c.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y)
          , A = c.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - s;
        c = -(c.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - u);
        e = 100 * Number.MIN_VALUE;
        var y = -(q * A + m * c);
        if (y > e) {
            var u = t.p1.x - u
              , C = t.p1.y - s
              , s = u * A + C * c;
            if (0 <= s && s <= t.maxFraction * y && (t = -q * C + m * u,
            -e * y <= t && t <= y * (1 + e)))
                return a.fraction = s / y,
                t = Math.sqrt(A * A + c * c),
                a.normal.x = A / t,
                a.normal.y = c / t,
                !0
        }
        return !1
    }
    ;
    q.prototype.ComputeAABB = function(a, t) {
        var c = t.R
          , e = t.position.x + (c.col1.x * this.m_v1.x + c.col2.x * this.m_v1.y)
          , q = t.position.y + (c.col1.y * this.m_v1.x + c.col2.y * this.m_v1.y)
          , m = t.position.x + (c.col1.x * this.m_v2.x + c.col2.x * this.m_v2.y)
          , c = t.position.y + (c.col1.y * this.m_v2.x + c.col2.y * this.m_v2.y);
        e < m ? (a.lowerBound.x = e,
        a.upperBound.x = m) : (a.lowerBound.x = m,
        a.upperBound.x = e);
        q < c ? (a.lowerBound.y = q,
        a.upperBound.y = c) : (a.lowerBound.y = c,
        a.upperBound.y = q)
    }
    ;
    q.prototype.ComputeMass = function(a) {
        a.mass = 0;
        a.center.SetV(this.m_v1);
        a.I = 0
    }
    ;
    q.prototype.ComputeSubmergedArea = function(a, t, c, e) {
        void 0 === t && (t = 0);
        var q = new F(a.x * t,a.y * t)
          , m = u.MulX(c, this.m_v1);
        c = u.MulX(c, this.m_v2);
        var s = u.Dot(a, m) - t;
        a = u.Dot(a, c) - t;
        if (0 < s) {
            if (0 < a)
                return 0;
            m.x = -a / (s - a) * m.x + s / (s - a) * c.x;
            m.y = -a / (s - a) * m.y + s / (s - a) * c.y
        } else
            0 < a && (c.x = -a / (s - a) * m.x + s / (s - a) * c.x,
            c.y = -a / (s - a) * m.y + s / (s - a) * c.y);
        e.x = (q.x + m.x + c.x) / 3;
        e.y = (q.y + m.y + c.y) / 3;
        return 0.5 * ((m.x - q.x) * (c.y - q.y) - (m.y - q.y) * (c.x - q.x))
    }
    ;
    q.prototype.GetLength = function() {
        return this.m_length
    }
    ;
    q.prototype.GetVertex1 = function() {
        return this.m_v1
    }
    ;
    q.prototype.GetVertex2 = function() {
        return this.m_v2
    }
    ;
    q.prototype.GetCoreVertex1 = function() {
        return this.m_coreV1
    }
    ;
    q.prototype.GetCoreVertex2 = function() {
        return this.m_coreV2
    }
    ;
    q.prototype.GetNormalVector = function() {
        return this.m_normal
    }
    ;
    q.prototype.GetDirectionVector = function() {
        return this.m_direction
    }
    ;
    q.prototype.GetCorner1Vector = function() {
        return this.m_cornerDir1
    }
    ;
    q.prototype.GetCorner2Vector = function() {
        return this.m_cornerDir2
    }
    ;
    q.prototype.Corner1IsConvex = function() {
        return this.m_cornerConvex1
    }
    ;
    q.prototype.Corner2IsConvex = function() {
        return this.m_cornerConvex2
    }
    ;
    q.prototype.GetFirstVertex = function(a) {
        var t = a.R;
        return new F(a.position.x + (t.col1.x * this.m_coreV1.x + t.col2.x * this.m_coreV1.y),a.position.y + (t.col1.y * this.m_coreV1.x + t.col2.y * this.m_coreV1.y))
    }
    ;
    q.prototype.GetNextEdge = function() {
        return this.m_nextEdge
    }
    ;
    q.prototype.GetPrevEdge = function() {
        return this.m_prevEdge
    }
    ;
    q.prototype.Support = function(a, t, c) {
        void 0 === t && (t = 0);
        void 0 === c && (c = 0);
        var e = a.R
          , q = a.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y)
          , m = a.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y)
          , u = a.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
        a = a.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
        q * t + m * c > u * t + a * c ? (this.s_supportVec.x = q,
        this.s_supportVec.y = m) : (this.s_supportVec.x = u,
        this.s_supportVec.y = a);
        return this.s_supportVec
    }
    ;
    q.prototype.b2EdgeShape = function(l, t) {
        this.__super.b2Shape.call(this);
        this.m_type = w.e_edgeShape;
        this.m_nextEdge = this.m_prevEdge = null;
        this.m_v1 = l;
        this.m_v2 = t;
        this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
        this.m_length = this.m_direction.Normalize();
        this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
        this.m_coreV1.Set(-a.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -a.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
        this.m_coreV2.Set(-a.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -a.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
        this.m_cornerDir1 = this.m_normal;
        this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y)
    }
    ;
    q.prototype.SetPrevEdge = function(a, t, c, e) {
        this.m_prevEdge = a;
        this.m_coreV1 = t;
        this.m_cornerDir1 = c;
        this.m_cornerConvex1 = e
    }
    ;
    q.prototype.SetNextEdge = function(a, t, c, e) {
        this.m_nextEdge = a;
        this.m_coreV2 = t;
        this.m_cornerDir2 = c;
        this.m_cornerConvex2 = e
    }
    ;
    s.b2MassData = function() {
        this.mass = 0;
        this.center = new F(0,0);
        this.I = 0
    }
    ;
    Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape);
    e.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    e.b2PolygonShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
    }
    ;
    e.prototype.Copy = function() {
        var a = new e;
        a.Set(this);
        return a
    }
    ;
    e.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        if (Box2D.is(a, e)) {
            a = a instanceof e ? a : null;
            this.m_centroid.SetV(a.m_centroid);
            this.m_vertexCount = a.m_vertexCount;
            this.Reserve(this.m_vertexCount);
            for (var t = 0; t < this.m_vertexCount; t++)
                this.m_vertices[t].SetV(a.m_vertices[t]),
                this.m_normals[t].SetV(a.m_normals[t])
        }
    }
    ;
    e.prototype.SetAsArray = function(a, t) {
        void 0 === t && (t = 0);
        for (var c = new Vector, e = 0, q, e = 0; e < a.length; ++e)
            q = a[e],
            c.push(q);
        this.SetAsVector(c, t)
    }
    ;
    e.AsArray = function(a, t) {
        void 0 === t && (t = 0);
        var c = new e;
        c.SetAsArray(a, t);
        return c
    }
    ;
    e.prototype.SetAsVector = function(l, t) {
        void 0 === t && (t = 0);
        0 == t && (t = l.length);
        a.b2Assert(2 <= t);
        this.m_vertexCount = t;
        this.Reserve(t);
        for (var c = 0, c = 0; c < this.m_vertexCount; c++)
            this.m_vertices[c].SetV(l[c]);
        for (c = 0; c < this.m_vertexCount; ++c) {
            var q = parseInt(c)
              , m = parseInt(c + 1 < this.m_vertexCount ? c + 1 : 0)
              , q = u.SubtractVV(this.m_vertices[m], this.m_vertices[q]);
            a.b2Assert(q.LengthSquared() > Number.MIN_VALUE);
            this.m_normals[c].SetV(u.CrossVF(q, 1));
            this.m_normals[c].Normalize()
        }
        this.m_centroid = e.ComputeCentroid(this.m_vertices, this.m_vertexCount)
    }
    ;
    e.AsVector = function(a, t) {
        void 0 === t && (t = 0);
        var c = new e;
        c.SetAsVector(a, t);
        return c
    }
    ;
    e.prototype.SetAsBox = function(a, t) {
        void 0 === a && (a = 0);
        void 0 === t && (t = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set(-a, -t);
        this.m_vertices[1].Set(a, -t);
        this.m_vertices[2].Set(a, t);
        this.m_vertices[3].Set(-a, t);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1, 0);
        this.m_centroid.SetZero()
    }
    ;
    e.AsBox = function(a, t) {
        void 0 === a && (a = 0);
        void 0 === t && (t = 0);
        var c = new e;
        c.SetAsBox(a, t);
        return c
    }
    ;
    e.prototype.SetAsOrientedBox = function(a, t, c, e) {
        void 0 === a && (a = 0);
        void 0 === t && (t = 0);
        void 0 === c && (c = null);
        void 0 === e && (e = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set(-a, -t);
        this.m_vertices[1].Set(a, -t);
        this.m_vertices[2].Set(a, t);
        this.m_vertices[3].Set(-a, t);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1, 0);
        this.m_centroid = c;
        a = new C;
        a.position = c;
        a.R.Set(e);
        for (c = 0; c < this.m_vertexCount; ++c)
            this.m_vertices[c] = u.MulX(a, this.m_vertices[c]),
            this.m_normals[c] = u.MulMV(a.R, this.m_normals[c])
    }
    ;
    e.AsOrientedBox = function(a, t, c, q) {
        void 0 === a && (a = 0);
        void 0 === t && (t = 0);
        void 0 === c && (c = null);
        void 0 === q && (q = 0);
        var m = new e;
        m.SetAsOrientedBox(a, t, c, q);
        return m
    }
    ;
    e.prototype.SetAsEdge = function(a, t) {
        this.m_vertexCount = 2;
        this.Reserve(2);
        this.m_vertices[0].SetV(a);
        this.m_vertices[1].SetV(t);
        this.m_centroid.x = 0.5 * (a.x + t.x);
        this.m_centroid.y = 0.5 * (a.y + t.y);
        this.m_normals[0] = u.CrossVF(u.SubtractVV(t, a), 1);
        this.m_normals[0].Normalize();
        this.m_normals[1].x = -this.m_normals[0].x;
        this.m_normals[1].y = -this.m_normals[0].y
    }
    ;
    e.AsEdge = function(a, t) {
        var c = new e;
        c.SetAsEdge(a, t);
        return c
    }
    ;
    e.prototype.TestPoint = function(a, t) {
        var c;
        c = a.R;
        for (var e = t.x - a.position.x, q = t.y - a.position.y, m = e * c.col1.x + q * c.col1.y, u = e * c.col2.x + q * c.col2.y, s = 0; s < this.m_vertexCount; ++s)
            if (c = this.m_vertices[s],
            e = m - c.x,
            q = u - c.y,
            c = this.m_normals[s],
            0 < c.x * e + c.y * q)
                return !1;
        return !0
    }
    ;
    e.prototype.RayCast = function(a, t, c) {
        var e = 0, q = t.maxFraction, m = 0, u = 0, s, A, m = t.p1.x - c.position.x, u = t.p1.y - c.position.y;
        s = c.R;
        var y = m * s.col1.x + u * s.col1.y
          , C = m * s.col2.x + u * s.col2.y
          , m = t.p2.x - c.position.x
          , u = t.p2.y - c.position.y;
        s = c.R;
        t = m * s.col1.x + u * s.col1.y - y;
        s = m * s.col2.x + u * s.col2.y - C;
        for (var w = -1, g = 0; g < this.m_vertexCount; ++g) {
            A = this.m_vertices[g];
            m = A.x - y;
            u = A.y - C;
            A = this.m_normals[g];
            m = A.x * m + A.y * u;
            u = A.x * t + A.y * s;
            if (0 == u) {
                if (0 > m)
                    return !1
            } else
                0 > u && m < e * u ? (e = m / u,
                w = g) : 0 < u && m < q * u && (q = m / u);
            if (q < e - Number.MIN_VALUE)
                return !1
        }
        return 0 <= w ? (a.fraction = e,
        s = c.R,
        A = this.m_normals[w],
        a.normal.x = s.col1.x * A.x + s.col2.x * A.y,
        a.normal.y = s.col1.y * A.x + s.col2.y * A.y,
        !0) : !1
    }
    ;
    e.prototype.ComputeAABB = function(a, t) {
        for (var c = t.R, e = this.m_vertices[0], q = t.position.x + (c.col1.x * e.x + c.col2.x * e.y), m = t.position.y + (c.col1.y * e.x + c.col2.y * e.y), u = q, s = m, A = 1; A < this.m_vertexCount; ++A)
            var e = this.m_vertices[A]
              , y = t.position.x + (c.col1.x * e.x + c.col2.x * e.y)
              , e = t.position.y + (c.col1.y * e.x + c.col2.y * e.y)
              , q = q < y ? q : y
              , m = m < e ? m : e
              , u = u > y ? u : y
              , s = s > e ? s : e;
        a.lowerBound.x = q - this.m_radius;
        a.lowerBound.y = m - this.m_radius;
        a.upperBound.x = u + this.m_radius;
        a.upperBound.y = s + this.m_radius
    }
    ;
    e.prototype.ComputeMass = function(a, t) {
        void 0 === t && (t = 0);
        if (2 == this.m_vertexCount)
            a.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x),
            a.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y),
            a.mass = 0,
            a.I = 0;
        else {
            for (var c = 0, e = 0, q = 0, m = 0, u = 1 / 3, s = 0; s < this.m_vertexCount; ++s)
                var A = this.m_vertices[s]
                  , y = s + 1 < this.m_vertexCount ? this.m_vertices[parseInt(s + 1)] : this.m_vertices[0]
                  , C = A.x - 0
                  , w = A.y - 0
                  , g = y.x - 0
                  , p = y.y - 0
                  , n = C * p - w * g
                  , h = 0.5 * n
                  , q = q + h
                  , c = c + h * u * (0 + A.x + y.x)
                  , e = e + h * u * (0 + A.y + y.y)
                  , A = C
                  , m = m + n * (u * (0.25 * (A * A + g * A + g * g) + (0 * A + 0 * g)) + 0 + (u * (0.25 * (w * w + p * w + p * p) + (0 * w + 0 * p)) + 0));
            a.mass = t * q;
            a.center.Set(c * (1 / q), e * (1 / q));
            a.I = t * m
        }
    }
    ;
    e.prototype.ComputeSubmergedArea = function(a, t, c, e) {
        void 0 === t && (t = 0);
        var q = u.MulTMV(c.R, a)
          , m = t - u.Dot(a, c.position)
          , A = new Vector_a2j_Number
          , y = 0
          , C = -1;
        t = -1;
        var w = !1;
        for (a = a = 0; a < this.m_vertexCount; ++a) {
            A[a] = u.Dot(q, this.m_vertices[a]) - m;
            var H = A[a] < -Number.MIN_VALUE;
            0 < a && (H ? w || (C = a - 1,
            y++) : w && (t = a - 1,
            y++));
            w = H
        }
        switch (y) {
        case 0:
            return w ? (a = new s,
            this.ComputeMass(a, 1),
            e.SetV(u.MulX(c, a.center)),
            a.mass) : 0;
        case 1:
            -1 == C ? C = this.m_vertexCount - 1 : t = this.m_vertexCount - 1
        }
        a = parseInt((C + 1) % this.m_vertexCount);
        q = parseInt((t + 1) % this.m_vertexCount);
        m = (0 - A[C]) / (A[a] - A[C]);
        A = (0 - A[t]) / (A[q] - A[t]);
        C = new F(this.m_vertices[C].x * (1 - m) + this.m_vertices[a].x * m,this.m_vertices[C].y * (1 - m) + this.m_vertices[a].y * m);
        t = new F(this.m_vertices[t].x * (1 - A) + this.m_vertices[q].x * A,this.m_vertices[t].y * (1 - A) + this.m_vertices[q].y * A);
        A = 0;
        m = new F;
        for (y = this.m_vertices[a]; a != q; )
            a = (a + 1) % this.m_vertexCount,
            w = a == q ? t : this.m_vertices[a],
            H = 0.5 * ((y.x - C.x) * (w.y - C.y) - (y.y - C.y) * (w.x - C.x)),
            A += H,
            m.x += H * (C.x + y.x + w.x) / 3,
            m.y += H * (C.y + y.y + w.y) / 3,
            y = w;
        m.Multiply(1 / A);
        e.SetV(u.MulX(c, m));
        return A
    }
    ;
    e.prototype.GetVertexCount = function() {
        return this.m_vertexCount
    }
    ;
    e.prototype.GetVertices = function() {
        return this.m_vertices
    }
    ;
    e.prototype.GetNormals = function() {
        return this.m_normals
    }
    ;
    e.prototype.GetSupport = function(a) {
        for (var t = 0, c = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_vertexCount; ++e) {
            var q = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
            q > c && (t = e,
            c = q)
        }
        return t
    }
    ;
    e.prototype.GetSupportVertex = function(a) {
        for (var t = 0, c = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, e = 1; e < this.m_vertexCount; ++e) {
            var q = this.m_vertices[e].x * a.x + this.m_vertices[e].y * a.y;
            q > c && (t = e,
            c = q)
        }
        return this.m_vertices[t]
    }
    ;
    e.prototype.Validate = function() {
        return !1
    }
    ;
    e.prototype.b2PolygonShape = function() {
        this.__super.b2Shape.call(this);
        this.m_type = w.e_polygonShape;
        this.m_centroid = new F;
        this.m_vertices = new Vector;
        this.m_normals = new Vector
    }
    ;
    e.prototype.Reserve = function(a) {
        void 0 === a && (a = 0);
        for (var t = parseInt(this.m_vertices.length); t < a; t++)
            this.m_vertices[t] = new F,
            this.m_normals[t] = new F
    }
    ;
    e.ComputeCentroid = function(a, t) {
        void 0 === t && (t = 0);
        for (var c = new F, e = 0, q = 1 / 3, m = 0; m < t; ++m) {
            var u = a[m]
              , s = m + 1 < t ? a[parseInt(m + 1)] : a[0]
              , A = 0.5 * ((u.x - 0) * (s.y - 0) - (u.y - 0) * (s.x - 0))
              , e = e + A;
            c.x += A * q * (0 + u.x + s.x);
            c.y += A * q * (0 + u.y + s.y)
        }
        c.x *= 1 / e;
        c.y *= 1 / e;
        return c
    }
    ;
    e.ComputeOBB = function(a, t, c) {
        void 0 === c && (c = 0);
        for (var e = 0, q = new Vector(c + 1), e = 0; e < c; ++e)
            q[e] = t[e];
        q[c] = q[0];
        t = Number.MAX_VALUE;
        for (e = 1; e <= c; ++e) {
            for (var m = q[parseInt(e - 1)], u = q[e].x - m.x, s = q[e].y - m.y, A = Math.sqrt(u * u + s * s), u = u / A, s = s / A, y = -s, C = u, w = A = Number.MAX_VALUE, g = -Number.MAX_VALUE, p = -Number.MAX_VALUE, n = 0; n < c; ++n) {
                var h = q[n].x - m.x
                  , D = q[n].y - m.y
                  , x = u * h + s * D
                  , h = y * h + C * D;
                x < A && (A = x);
                h < w && (w = h);
                x > g && (g = x);
                h > p && (p = h)
            }
            n = (g - A) * (p - w);
            n < 0.95 * t && (t = n,
            a.R.col1.x = u,
            a.R.col1.y = s,
            a.R.col2.x = y,
            a.R.col2.y = C,
            u = 0.5 * (A + g),
            s = 0.5 * (w + p),
            y = a.R,
            a.center.x = m.x + (y.col1.x * u + y.col2.x * s),
            a.center.y = m.y + (y.col1.y * u + y.col2.y * s),
            a.extents.x = 0.5 * (g - A),
            a.extents.y = 0.5 * (p - w))
        }
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new t
    });
    w.b2Shape = function() {}
    ;
    w.prototype.Copy = function() {
        return null
    }
    ;
    w.prototype.Set = function(a) {
        this.m_radius = a.m_radius
    }
    ;
    w.prototype.GetType = function() {
        return this.m_type
    }
    ;
    w.prototype.TestPoint = function() {
        return !1
    }
    ;
    w.prototype.RayCast = function() {
        return !1
    }
    ;
    w.prototype.ComputeAABB = function() {}
    ;
    w.prototype.ComputeMass = function() {}
    ;
    w.prototype.ComputeSubmergedArea = function() {
        return 0
    }
    ;
    w.TestOverlap = function(a, t, c, e) {
        var q = new A;
        q.proxyA = new T;
        q.proxyA.Set(a);
        q.proxyB = new T;
        q.proxyB.Set(c);
        q.transformA = t;
        q.transformB = e;
        q.useRadii = !0;
        a = new N;
        a.count = 0;
        t = new y;
        H.Distance(t, a, q);
        return t.distance < 10 * Number.MIN_VALUE
    }
    ;
    w.prototype.b2Shape = function() {
        this.m_type = w.e_unknownShape;
        this.m_radius = a.b2_linearSlop
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
        Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
        Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
        Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
        Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
        Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
        Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
        Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
    })
}
)();
(function() {
    var a = Box2D.Common.b2Color
      , c = Box2D.Common.b2Settings
      , m = Box2D.Common.Math.b2Math;
    a.b2Color = function() {
        this._b = this._g = this._r = 0
    }
    ;
    a.prototype.b2Color = function(a, c, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        this._r = Box2D.parseUInt(255 * m.Clamp(a, 0, 1));
        this._g = Box2D.parseUInt(255 * m.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * m.Clamp(e, 0, 1))
    }
    ;
    a.prototype.Set = function(a, c, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        this._r = Box2D.parseUInt(255 * m.Clamp(a, 0, 1));
        this._g = Box2D.parseUInt(255 * m.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * m.Clamp(e, 0, 1))
    }
    ;
    Object.defineProperty(a.prototype, "r", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._r = Box2D.parseUInt(255 * m.Clamp(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "g", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._g = Box2D.parseUInt(255 * m.Clamp(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "b", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this._b = Box2D.parseUInt(255 * m.Clamp(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "color", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._r << 16 | this._g << 8 | this._b
        }
    });
    c.b2Settings = function() {}
    ;
    c.b2MixFriction = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return Math.sqrt(a * c)
    }
    ;
    c.b2MixRestitution = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return a > c ? a : c
    }
    ;
    c.b2Assert = function(a) {
        if (!a)
            throw "Assertion Failed";
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Common.b2Settings.VERSION = "2.1alpha";
        Box2D.Common.b2Settings.USHRT_MAX = 65535;
        Box2D.Common.b2Settings.b2_pi = Math.PI;
        Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
        Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
        Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
        Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_linearSlop = 0.005;
        Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
        Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
        Box2D.Common.b2Settings.b2_velocityThreshold = 1;
        Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
        Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxTranslation = 2;
        Box2D.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
        Box2D.Common.b2Settings.b2_maxRotation = 0.5 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
        Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
        Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
        Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01;
        Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi
    })
}
)();
(function() {
    var a = Box2D.Common.Math.b2Mat22
      , c = Box2D.Common.Math.b2Mat33
      , m = Box2D.Common.Math.b2Math
      , q = Box2D.Common.Math.b2Sweep
      , s = Box2D.Common.Math.b2Transform
      , e = Box2D.Common.Math.b2Vec2
      , w = Box2D.Common.Math.b2Vec3;
    a.b2Mat22 = function() {
        this.col1 = new e;
        this.col2 = new e
    }
    ;
    a.prototype.b2Mat22 = function() {
        this.SetIdentity()
    }
    ;
    a.FromAngle = function(t) {
        void 0 === t && (t = 0);
        var c = new a;
        c.Set(t);
        return c
    }
    ;
    a.FromVV = function(t, c) {
        var e = new a;
        e.SetVV(t, c);
        return e
    }
    ;
    a.prototype.Set = function(a) {
        void 0 === a && (a = 0);
        var c = Math.cos(a);
        a = Math.sin(a);
        this.col1.x = c;
        this.col2.x = -a;
        this.col1.y = a;
        this.col2.y = c
    }
    ;
    a.prototype.SetVV = function(a, c) {
        this.col1.SetV(a);
        this.col2.SetV(c)
    }
    ;
    a.prototype.Copy = function() {
        var t = new a;
        t.SetM(this);
        return t
    }
    ;
    a.prototype.SetM = function(a) {
        this.col1.SetV(a.col1);
        this.col2.SetV(a.col2)
    }
    ;
    a.prototype.AddM = function(a) {
        this.col1.x += a.col1.x;
        this.col1.y += a.col1.y;
        this.col2.x += a.col2.x;
        this.col2.y += a.col2.y
    }
    ;
    a.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 1
    }
    ;
    a.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 0
    }
    ;
    a.prototype.GetAngle = function() {
        return Math.atan2(this.col1.y, this.col1.x)
    }
    ;
    a.prototype.GetInverse = function(a) {
        var c = this.col1.x
          , e = this.col2.x
          , q = this.col1.y
          , m = this.col2.y
          , s = c * m - e * q;
        0 != s && (s = 1 / s);
        a.col1.x = s * m;
        a.col2.x = -s * e;
        a.col1.y = -s * q;
        a.col2.y = s * c;
        return a
    }
    ;
    a.prototype.Solve = function(a, c, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        var q = this.col1.x
          , m = this.col2.x
          , s = this.col1.y
          , y = this.col2.y
          , w = q * y - m * s;
        0 != w && (w = 1 / w);
        a.x = w * (y * c - m * e);
        a.y = w * (q * e - s * c);
        return a
    }
    ;
    a.prototype.Abs = function() {
        this.col1.Abs();
        this.col2.Abs()
    }
    ;
    c.b2Mat33 = function() {
        this.col1 = new w;
        this.col2 = new w;
        this.col3 = new w
    }
    ;
    c.prototype.b2Mat33 = function(a, c, e) {
        void 0 === a && (a = null);
        void 0 === c && (c = null);
        void 0 === e && (e = null);
        !a && !c && !e ? (this.col1.SetZero(),
        this.col2.SetZero(),
        this.col3.SetZero()) : (this.col1.SetV(a),
        this.col2.SetV(c),
        this.col3.SetV(e))
    }
    ;
    c.prototype.SetVVV = function(a, c, e) {
        this.col1.SetV(a);
        this.col2.SetV(c);
        this.col3.SetV(e)
    }
    ;
    c.prototype.Copy = function() {
        return new c(this.col1,this.col2,this.col3)
    }
    ;
    c.prototype.SetM = function(a) {
        this.col1.SetV(a.col1);
        this.col2.SetV(a.col2);
        this.col3.SetV(a.col3)
    }
    ;
    c.prototype.AddM = function(a) {
        this.col1.x += a.col1.x;
        this.col1.y += a.col1.y;
        this.col1.z += a.col1.z;
        this.col2.x += a.col2.x;
        this.col2.y += a.col2.y;
        this.col2.z += a.col2.z;
        this.col3.x += a.col3.x;
        this.col3.y += a.col3.y;
        this.col3.z += a.col3.z
    }
    ;
    c.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 1;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 1
    }
    ;
    c.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 0;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 0
    }
    ;
    c.prototype.Solve22 = function(a, c, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        var q = this.col1.x
          , m = this.col2.x
          , s = this.col1.y
          , y = this.col2.y
          , w = q * y - m * s;
        0 != w && (w = 1 / w);
        a.x = w * (y * c - m * e);
        a.y = w * (q * e - s * c);
        return a
    }
    ;
    c.prototype.Solve33 = function(a, c, e, q) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        void 0 === q && (q = 0);
        var m = this.col1.x
          , s = this.col1.y
          , y = this.col1.z
          , w = this.col2.x
          , N = this.col2.y
          , l = this.col2.z
          , P = this.col3.x
          , J = this.col3.y
          , L = this.col3.z
          , B = m * (N * L - l * J) + s * (l * P - w * L) + y * (w * J - N * P);
        0 != B && (B = 1 / B);
        a.x = B * (c * (N * L - l * J) + e * (l * P - w * L) + q * (w * J - N * P));
        a.y = B * (m * (e * L - q * J) + s * (q * P - c * L) + y * (c * J - e * P));
        a.z = B * (m * (N * q - l * e) + s * (l * c - w * q) + y * (w * e - N * c));
        return a
    }
    ;
    m.b2Math = function() {}
    ;
    m.IsValid = function(a) {
        void 0 === a && (a = 0);
        return isFinite(a)
    }
    ;
    m.Dot = function(a, c) {
        return a.x * c.x + a.y * c.y
    }
    ;
    m.CrossVV = function(a, c) {
        return a.x * c.y - a.y * c.x
    }
    ;
    m.CrossVF = function(a, c) {
        void 0 === c && (c = 0);
        return new e(c * a.y,-c * a.x)
    }
    ;
    m.CrossFV = function(a, c) {
        void 0 === a && (a = 0);
        return new e(-a * c.y,a * c.x)
    }
    ;
    m.MulMV = function(a, c) {
        return new e(a.col1.x * c.x + a.col2.x * c.y,a.col1.y * c.x + a.col2.y * c.y)
    }
    ;
    m.MulTMV = function(a, c) {
        return new e(m.Dot(c, a.col1),m.Dot(c, a.col2))
    }
    ;
    m.MulX = function(a, c) {
        var e = m.MulMV(a.R, c);
        e.x += a.position.x;
        e.y += a.position.y;
        return e
    }
    ;
    m.MulXT = function(a, c) {
        var e = m.SubtractVV(c, a.position)
          , q = e.x * a.R.col1.x + e.y * a.R.col1.y;
        e.y = e.x * a.R.col2.x + e.y * a.R.col2.y;
        e.x = q;
        return e
    }
    ;
    m.AddVV = function(a, c) {
        return new e(a.x + c.x,a.y + c.y)
    }
    ;
    m.SubtractVV = function(a, c) {
        return new e(a.x - c.x,a.y - c.y)
    }
    ;
    m.Distance = function(a, c) {
        var e = a.x - c.x
          , q = a.y - c.y;
        return Math.sqrt(e * e + q * q)
    }
    ;
    m.DistanceSquared = function(a, c) {
        var e = a.x - c.x
          , q = a.y - c.y;
        return e * e + q * q
    }
    ;
    m.MulFV = function(a, c) {
        void 0 === a && (a = 0);
        return new e(a * c.x,a * c.y)
    }
    ;
    m.AddMM = function(c, e) {
        return a.FromVV(m.AddVV(c.col1, e.col1), m.AddVV(c.col2, e.col2))
    }
    ;
    m.MulMM = function(c, e) {
        return a.FromVV(m.MulMV(c, e.col1), m.MulMV(c, e.col2))
    }
    ;
    m.MulTMM = function(c, q) {
        var s = new e(m.Dot(c.col1, q.col1),m.Dot(c.col2, q.col1))
          , w = new e(m.Dot(c.col1, q.col2),m.Dot(c.col2, q.col2));
        return a.FromVV(s, w)
    }
    ;
    m.Abs = function(a) {
        void 0 === a && (a = 0);
        return 0 < a ? a : -a
    }
    ;
    m.AbsV = function(a) {
        return new e(m.Abs(a.x),m.Abs(a.y))
    }
    ;
    m.AbsM = function(c) {
        return a.FromVV(m.AbsV(c.col1), m.AbsV(c.col2))
    }
    ;
    m.Min = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return a < c ? a : c
    }
    ;
    m.MinV = function(a, c) {
        return new e(m.Min(a.x, c.x),m.Min(a.y, c.y))
    }
    ;
    m.Max = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return a > c ? a : c
    }
    ;
    m.MaxV = function(a, c) {
        return new e(m.Max(a.x, c.x),m.Max(a.y, c.y))
    }
    ;
    m.Clamp = function(a, c, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        return a < c ? c : a > e ? e : a
    }
    ;
    m.ClampV = function(a, c, e) {
        return m.MaxV(c, m.MinV(a, e))
    }
    ;
    m.Swap = function(a, c) {
        var e = a[0];
        a[0] = c[0];
        c[0] = e
    }
    ;
    m.Random = function() {
        return 2 * Math.random() - 1
    }
    ;
    m.RandomRange = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        var e = Math.random();
        return (c - a) * e + a
    }
    ;
    m.NextPowerOfTwo = function(a) {
        void 0 === a && (a = 0);
        a |= a >> 1 & 2147483647;
        a |= a >> 2 & 1073741823;
        a |= a >> 4 & 268435455;
        a |= a >> 8 & 16777215;
        return (a | a >> 16 & 65535) + 1
    }
    ;
    m.IsPowerOfTwo = function(a) {
        void 0 === a && (a = 0);
        return 0 < a && 0 == (a & a - 1)
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Common.Math.b2Math.b2Vec2_zero = new e(0,0);
        Box2D.Common.Math.b2Math.b2Mat22_identity = a.FromVV(new e(1,0), new e(0,1));
        Box2D.Common.Math.b2Math.b2Transform_identity = new s(m.b2Vec2_zero,m.b2Mat22_identity)
    });
    q.b2Sweep = function() {
        this.localCenter = new e;
        this.c0 = new e;
        this.c = new e
    }
    ;
    q.prototype.Set = function(a) {
        this.localCenter.SetV(a.localCenter);
        this.c0.SetV(a.c0);
        this.c.SetV(a.c);
        this.a0 = a.a0;
        this.a = a.a;
        this.t0 = a.t0
    }
    ;
    q.prototype.Copy = function() {
        var a = new q;
        a.localCenter.SetV(this.localCenter);
        a.c0.SetV(this.c0);
        a.c.SetV(this.c);
        a.a0 = this.a0;
        a.a = this.a;
        a.t0 = this.t0;
        return a
    }
    ;
    q.prototype.GetTransform = function(a, c) {
        void 0 === c && (c = 0);
        a.position.x = (1 - c) * this.c0.x + c * this.c.x;
        a.position.y = (1 - c) * this.c0.y + c * this.c.y;
        a.R.Set((1 - c) * this.a0 + c * this.a);
        var e = a.R;
        a.position.x -= e.col1.x * this.localCenter.x + e.col2.x * this.localCenter.y;
        a.position.y -= e.col1.y * this.localCenter.x + e.col2.y * this.localCenter.y
    }
    ;
    q.prototype.Advance = function(a) {
        void 0 === a && (a = 0);
        if (this.t0 < a && 1 - this.t0 > Number.MIN_VALUE) {
            var c = (a - this.t0) / (1 - this.t0);
            this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
            this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
            this.a0 = (1 - c) * this.a0 + c * this.a;
            this.t0 = a
        }
    }
    ;
    s.b2Transform = function() {
        this.position = new e;
        this.R = new a
    }
    ;
    s.prototype.b2Transform = function(a, c) {
        void 0 === a && (a = null);
        void 0 === c && (c = null);
        a && (this.position.SetV(a),
        this.R.SetM(c))
    }
    ;
    s.prototype.Initialize = function(a, c) {
        this.position.SetV(a);
        this.R.SetM(c)
    }
    ;
    s.prototype.SetIdentity = function() {
        this.position.SetZero();
        this.R.SetIdentity()
    }
    ;
    s.prototype.Set = function(a) {
        this.position.SetV(a.position);
        this.R.SetM(a.R)
    }
    ;
    s.prototype.GetAngle = function() {
        return Math.atan2(this.R.col1.y, this.R.col1.x)
    }
    ;
    e.b2Vec2 = function() {}
    ;
    e.prototype.b2Vec2 = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.x = a;
        this.y = c
    }
    ;
    e.prototype.SetZero = function() {
        this.y = this.x = 0
    }
    ;
    e.prototype.Set = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.x = a;
        this.y = c
    }
    ;
    e.prototype.SetV = function(a) {
        this.x = a.x;
        this.y = a.y
    }
    ;
    e.prototype.GetNegative = function() {
        return new e(-this.x,-this.y)
    }
    ;
    e.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y
    }
    ;
    e.Make = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        return new e(a,c)
    }
    ;
    e.prototype.Copy = function() {
        return new e(this.x,this.y)
    }
    ;
    e.prototype.Add = function(a) {
        this.x += a.x;
        this.y += a.y
    }
    ;
    e.prototype.Subtract = function(a) {
        this.x -= a.x;
        this.y -= a.y
    }
    ;
    e.prototype.Multiply = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a
    }
    ;
    e.prototype.MulM = function(a) {
        var c = this.x;
        this.x = a.col1.x * c + a.col2.x * this.y;
        this.y = a.col1.y * c + a.col2.y * this.y
    }
    ;
    e.prototype.MulTM = function(a) {
        var c = m.Dot(this, a.col1);
        this.y = m.Dot(this, a.col2);
        this.x = c
    }
    ;
    e.prototype.CrossVF = function(a) {
        void 0 === a && (a = 0);
        var c = this.x;
        this.x = a * this.y;
        this.y = -a * c
    }
    ;
    e.prototype.CrossFV = function(a) {
        void 0 === a && (a = 0);
        var c = this.x;
        this.x = -a * this.y;
        this.y = a * c
    }
    ;
    e.prototype.MinV = function(a) {
        this.x = this.x < a.x ? this.x : a.x;
        this.y = this.y < a.y ? this.y : a.y
    }
    ;
    e.prototype.MaxV = function(a) {
        this.x = this.x > a.x ? this.x : a.x;
        this.y = this.y > a.y ? this.y : a.y
    }
    ;
    e.prototype.Abs = function() {
        0 > this.x && (this.x = -this.x);
        0 > this.y && (this.y = -this.y)
    }
    ;
    e.prototype.Length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    ;
    e.prototype.LengthSquared = function() {
        return this.x * this.x + this.y * this.y
    }
    ;
    e.prototype.Normalize = function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y);
        if (a < Number.MIN_VALUE)
            return 0;
        var c = 1 / a;
        this.x *= c;
        this.y *= c;
        return a
    }
    ;
    e.prototype.IsValid = function() {
        return m.IsValid(this.x) && m.IsValid(this.y)
    }
    ;
    w.b2Vec3 = function() {}
    ;
    w.prototype.b2Vec3 = function(a, c, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        this.x = a;
        this.y = c;
        this.z = e
    }
    ;
    w.prototype.SetZero = function() {
        this.x = this.y = this.z = 0
    }
    ;
    w.prototype.Set = function(a, c, e) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        this.x = a;
        this.y = c;
        this.z = e
    }
    ;
    w.prototype.SetV = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z
    }
    ;
    w.prototype.GetNegative = function() {
        return new w(-this.x,-this.y,-this.z)
    }
    ;
    w.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    }
    ;
    w.prototype.Copy = function() {
        return new w(this.x,this.y,this.z)
    }
    ;
    w.prototype.Add = function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z
    }
    ;
    w.prototype.Subtract = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z
    }
    ;
    w.prototype.Multiply = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a;
        this.z *= a
    }
}
)();
(function() {
    var a = Box2D.Common.Math.b2Math
      , c = Box2D.Common.Math.b2Sweep
      , m = Box2D.Common.Math.b2Transform
      , q = Box2D.Common.Math.b2Vec2
      , s = Box2D.Common.b2Color
      , e = Box2D.Common.b2Settings
      , w = Box2D.Collision.b2AABB
      , t = Box2D.Collision.b2ContactPoint
      , u = Box2D.Collision.b2DynamicTreeBroadPhase
      , C = Box2D.Collision.b2RayCastInput
      , F = Box2D.Collision.b2RayCastOutput
      , H = Box2D.Collision.Shapes.b2CircleShape
      , A = Box2D.Collision.Shapes.b2EdgeShape
      , y = Box2D.Collision.Shapes.b2MassData
      , T = Box2D.Collision.Shapes.b2PolygonShape
      , N = Box2D.Collision.Shapes.b2Shape
      , l = Box2D.Dynamics.b2Body
      , P = Box2D.Dynamics.b2BodyDef
      , J = Box2D.Dynamics.b2ContactFilter
      , L = Box2D.Dynamics.b2ContactImpulse
      , B = Box2D.Dynamics.b2ContactListener
      , O = Box2D.Dynamics.b2ContactManager
      , I = Box2D.Dynamics.b2DebugDraw
      , R = Box2D.Dynamics.b2DestructionListener
      , K = Box2D.Dynamics.b2FilterData
      , M = Box2D.Dynamics.b2Fixture
      , S = Box2D.Dynamics.b2FixtureDef
      , Q = Box2D.Dynamics.b2Island
      , g = Box2D.Dynamics.b2TimeStep
      , p = Box2D.Dynamics.b2World
      , n = Box2D.Dynamics.Contacts.b2Contact
      , h = Box2D.Dynamics.Contacts.b2ContactFactory
      , D = Box2D.Dynamics.Contacts.b2ContactSolver
      , x = Box2D.Dynamics.Joints.b2Joint
      , E = Box2D.Dynamics.Joints.b2PulleyJoint;
    l.b2Body = function() {
        this.m_xf = new m;
        this.m_sweep = new c;
        this.m_linearVelocity = new q;
        this.m_force = new q
    }
    ;
    l.prototype.connectEdges = function(d, g, h) {
        void 0 === h && (h = 0);
        var c = Math.atan2(g.GetDirectionVector().y, g.GetDirectionVector().x);
        h = Math.tan(0.5 * (c - h));
        h = a.MulFV(h, g.GetDirectionVector());
        h = a.SubtractVV(h, g.GetNormalVector());
        h = a.MulFV(e.b2_toiSlop, h);
        h = a.AddVV(h, g.GetVertex1());
        var p = a.AddVV(d.GetDirectionVector(), g.GetDirectionVector());
        p.Normalize();
        var n = 0 < a.Dot(d.GetDirectionVector(), g.GetNormalVector());
        d.SetNextEdge(g, h, p, n);
        g.SetPrevEdge(d, h, p, n);
        return c
    }
    ;
    l.prototype.CreateFixture = function(d) {
        if (!0 == this.m_world.IsLocked())
            return null;
        var a = new M;
        a.Create(this, this.m_xf, d);
        this.m_flags & l.e_activeFlag && a.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
        a.m_next = this.m_fixtureList;
        this.m_fixtureList = a;
        ++this.m_fixtureCount;
        a.m_body = this;
        0 < a.m_density && this.ResetMassData();
        this.m_world.m_flags |= p.e_newFixture;
        return a
    }
    ;
    l.prototype.CreateFixture2 = function(d, a) {
        void 0 === a && (a = 0);
        var g = new S;
        g.shape = d;
        g.density = a;
        return this.CreateFixture(g)
    }
    ;
    l.prototype.DestroyFixture = function(d) {
        if (!0 != this.m_world.IsLocked()) {
            for (var a = this.m_fixtureList, g = null; null != a; ) {
                if (a == d) {
                    g ? g.m_next = d.m_next : this.m_fixtureList = d.m_next;
                    break
                }
                g = a;
                a = a.m_next
            }
            for (a = this.m_contactList; a; ) {
                var g = a.contact
                  , a = a.next
                  , h = g.GetFixtureA()
                  , c = g.GetFixtureB();
                (d == h || d == c) && this.m_world.m_contactManager.Destroy(g)
            }
            this.m_flags & l.e_activeFlag && d.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
            d.Destroy();
            d.m_body = null;
            d.m_next = null;
            --this.m_fixtureCount;
            this.ResetMassData()
        }
    }
    ;
    l.prototype.SetPositionAndAngle = function(d, a) {
        void 0 === a && (a = 0);
        var g;
        if (!0 != this.m_world.IsLocked()) {
            this.m_xf.R.Set(a);
            this.m_xf.position.SetV(d);
            g = this.m_xf.R;
            var h = this.m_sweep.localCenter;
            this.m_sweep.c.x = g.col1.x * h.x + g.col2.x * h.y;
            this.m_sweep.c.y = g.col1.y * h.x + g.col2.y * h.y;
            this.m_sweep.c.x += this.m_xf.position.x;
            this.m_sweep.c.y += this.m_xf.position.y;
            this.m_sweep.c0.SetV(this.m_sweep.c);
            this.m_sweep.a0 = this.m_sweep.a = a;
            h = this.m_world.m_contactManager.m_broadPhase;
            for (g = this.m_fixtureList; g; g = g.m_next)
                g.Synchronize(h, this.m_xf, this.m_xf);
            this.m_world.m_contactManager.FindNewContacts()
        }
    }
    ;
    l.prototype.SetTransform = function(d) {
        this.SetPositionAndAngle(d.position, d.GetAngle())
    }
    ;
    l.prototype.GetTransform = function() {
        return this.m_xf
    }
    ;
    l.prototype.GetPosition = function() {
        return this.m_xf.position
    }
    ;
    l.prototype.SetPosition = function(d) {
        this.SetPositionAndAngle(d, this.GetAngle())
    }
    ;
    l.prototype.GetAngle = function() {
        return this.m_sweep.a
    }
    ;
    l.prototype.SetAngle = function(d) {
        void 0 === d && (d = 0);
        this.SetPositionAndAngle(this.GetPosition(), d)
    }
    ;
    l.prototype.GetWorldCenter = function() {
        return this.m_sweep.c
    }
    ;
    l.prototype.GetLocalCenter = function() {
        return this.m_sweep.localCenter
    }
    ;
    l.prototype.SetLinearVelocity = function(d) {
        this.m_type != l.b2_staticBody && this.m_linearVelocity.SetV(d)
    }
    ;
    l.prototype.GetLinearVelocity = function() {
        return this.m_linearVelocity
    }
    ;
    l.prototype.SetAngularVelocity = function(d) {
        void 0 === d && (d = 0);
        this.m_type != l.b2_staticBody && (this.m_angularVelocity = d)
    }
    ;
    l.prototype.GetAngularVelocity = function() {
        return this.m_angularVelocity
    }
    ;
    l.prototype.GetDefinition = function() {
        var d = new P;
        d.type = this.GetType();
        d.allowSleep = (this.m_flags & l.e_allowSleepFlag) == l.e_allowSleepFlag;
        d.angle = this.GetAngle();
        d.angularDamping = this.m_angularDamping;
        d.angularVelocity = this.m_angularVelocity;
        d.fixedRotation = (this.m_flags & l.e_fixedRotationFlag) == l.e_fixedRotationFlag;
        d.bullet = (this.m_flags & l.e_bulletFlag) == l.e_bulletFlag;
        d.awake = (this.m_flags & l.e_awakeFlag) == l.e_awakeFlag;
        d.linearDamping = this.m_linearDamping;
        d.linearVelocity.SetV(this.GetLinearVelocity());
        d.position = this.GetPosition();
        d.userData = this.GetUserData();
        return d
    }
    ;
    l.prototype.ApplyForce = function(d, a) {
        this.m_type == l.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0),
        this.m_force.x += d.x,
        this.m_force.y += d.y,
        this.m_torque += (a.x - this.m_sweep.c.x) * d.y - (a.y - this.m_sweep.c.y) * d.x)
    }
    ;
    l.prototype.ApplyTorque = function(d) {
        void 0 === d && (d = 0);
        this.m_type == l.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0),
        this.m_torque += d)
    }
    ;
    l.prototype.ApplyImpulse = function(d, a) {
        this.m_type == l.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0),
        this.m_linearVelocity.x += this.m_invMass * d.x,
        this.m_linearVelocity.y += this.m_invMass * d.y,
        this.m_angularVelocity += this.m_invI * ((a.x - this.m_sweep.c.x) * d.y - (a.y - this.m_sweep.c.y) * d.x))
    }
    ;
    l.prototype.Split = function(d) {
        for (var g = this.GetLinearVelocity().Copy(), h = this.GetAngularVelocity(), c = this.GetWorldCenter(), p = this.m_world.CreateBody(this.GetDefinition()), n, x = this.m_fixtureList; x; )
            if (d(x)) {
                var e = x.m_next;
                n ? n.m_next = e : this.m_fixtureList = e;
                this.m_fixtureCount--;
                x.m_next = p.m_fixtureList;
                p.m_fixtureList = x;
                p.m_fixtureCount++;
                x.m_body = p;
                x = e
            } else
                n = x,
                x = x.m_next;
        this.ResetMassData();
        p.ResetMassData();
        n = this.GetWorldCenter();
        d = p.GetWorldCenter();
        n = a.AddVV(g, a.CrossFV(h, a.SubtractVV(n, c)));
        g = a.AddVV(g, a.CrossFV(h, a.SubtractVV(d, c)));
        this.SetLinearVelocity(n);
        p.SetLinearVelocity(g);
        this.SetAngularVelocity(h);
        p.SetAngularVelocity(h);
        this.SynchronizeFixtures();
        p.SynchronizeFixtures();
        return p
    }
    ;
    l.prototype.Merge = function(d) {
        var a;
        for (a = d.m_fixtureList; a; ) {
            var g = a.m_next;
            d.m_fixtureCount--;
            a.m_next = this.m_fixtureList;
            this.m_fixtureList = a;
            this.m_fixtureCount++;
            a.m_body = c;
            a = g
        }
        h.m_fixtureCount = 0;
        var h = this
          , c = d;
        h.GetWorldCenter();
        c.GetWorldCenter();
        h.GetLinearVelocity().Copy();
        c.GetLinearVelocity().Copy();
        h.GetAngularVelocity();
        c.GetAngularVelocity();
        h.ResetMassData();
        this.SynchronizeFixtures()
    }
    ;
    l.prototype.GetMass = function() {
        return this.m_mass
    }
    ;
    l.prototype.GetInertia = function() {
        return this.m_I
    }
    ;
    l.prototype.GetMassData = function(d) {
        d.mass = this.m_mass;
        d.I = this.m_I;
        d.center.SetV(this.m_sweep.localCenter)
    }
    ;
    l.prototype.SetMassData = function(d) {
        e.b2Assert(!1 == this.m_world.IsLocked());
        if (!0 != this.m_world.IsLocked() && this.m_type == l.b2_dynamicBody) {
            this.m_invI = this.m_I = this.m_invMass = 0;
            this.m_mass = d.mass;
            0 >= this.m_mass && (this.m_mass = 1);
            this.m_invMass = 1 / this.m_mass;
            0 < d.I && 0 == (this.m_flags & l.e_fixedRotationFlag) && (this.m_I = d.I - this.m_mass * (d.center.x * d.center.x + d.center.y * d.center.y),
            this.m_invI = 1 / this.m_I);
            var g = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(d.center);
            this.m_sweep.c0.SetV(a.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - g.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - g.x)
        }
    }
    ;
    l.prototype.ResetMassData = function() {
        this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
        this.m_sweep.localCenter.SetZero();
        if (!(this.m_type == l.b2_staticBody || this.m_type == l.b2_kinematicBody)) {
            for (var d = q.Make(0, 0), g = this.m_fixtureList; g; g = g.m_next)
                if (0 != g.m_density) {
                    var h = g.GetMassData();
                    this.m_mass += h.mass;
                    d.x += h.center.x * h.mass;
                    d.y += h.center.y * h.mass;
                    this.m_I += h.I
                }
            0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass,
            d.x *= this.m_invMass,
            d.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
            0 < this.m_I && 0 == (this.m_flags & l.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (d.x * d.x + d.y * d.y),
            this.m_I *= this.m_inertiaScale,
            e.b2Assert(0 < this.m_I),
            this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
            g = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(d);
            this.m_sweep.c0.SetV(a.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - g.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - g.x)
        }
    }
    ;
    l.prototype.GetWorldPoint = function(d) {
        var a = this.m_xf.R;
        d = new q(a.col1.x * d.x + a.col2.x * d.y,a.col1.y * d.x + a.col2.y * d.y);
        d.x += this.m_xf.position.x;
        d.y += this.m_xf.position.y;
        return d
    }
    ;
    l.prototype.GetWorldVector = function(d) {
        return a.MulMV(this.m_xf.R, d)
    }
    ;
    l.prototype.GetLocalPoint = function(d) {
        return a.MulXT(this.m_xf, d)
    }
    ;
    l.prototype.GetLocalVector = function(d) {
        return a.MulTMV(this.m_xf.R, d)
    }
    ;
    l.prototype.GetLinearVelocityFromWorldPoint = function(d) {
        return new q(this.m_linearVelocity.x - this.m_angularVelocity * (d.y - this.m_sweep.c.y),this.m_linearVelocity.y + this.m_angularVelocity * (d.x - this.m_sweep.c.x))
    }
    ;
    l.prototype.GetLinearVelocityFromLocalPoint = function(d) {
        var a = this.m_xf.R;
        d = new q(a.col1.x * d.x + a.col2.x * d.y,a.col1.y * d.x + a.col2.y * d.y);
        d.x += this.m_xf.position.x;
        d.y += this.m_xf.position.y;
        return new q(this.m_linearVelocity.x - this.m_angularVelocity * (d.y - this.m_sweep.c.y),this.m_linearVelocity.y + this.m_angularVelocity * (d.x - this.m_sweep.c.x))
    }
    ;
    l.prototype.GetLinearDamping = function() {
        return this.m_linearDamping
    }
    ;
    l.prototype.SetLinearDamping = function(d) {
        void 0 === d && (d = 0);
        this.m_linearDamping = d
    }
    ;
    l.prototype.GetAngularDamping = function() {
        return this.m_angularDamping
    }
    ;
    l.prototype.SetAngularDamping = function(d) {
        void 0 === d && (d = 0);
        this.m_angularDamping = d
    }
    ;
    l.prototype.SetType = function(d) {
        void 0 === d && (d = 0);
        if (this.m_type != d) {
            this.m_type = d;
            this.ResetMassData();
            this.m_type == l.b2_staticBody && (this.m_linearVelocity.SetZero(),
            this.m_angularVelocity = 0);
            this.SetAwake(!0);
            this.m_force.SetZero();
            this.m_torque = 0;
            for (d = this.m_contactList; d; d = d.next)
                d.contact.FlagForFiltering()
        }
    }
    ;
    l.prototype.GetType = function() {
        return this.m_type
    }
    ;
    l.prototype.SetBullet = function(d) {
        this.m_flags = d ? this.m_flags | l.e_bulletFlag : this.m_flags & ~l.e_bulletFlag
    }
    ;
    l.prototype.IsBullet = function() {
        return (this.m_flags & l.e_bulletFlag) == l.e_bulletFlag
    }
    ;
    l.prototype.SetSleepingAllowed = function(d) {
        d ? this.m_flags |= l.e_allowSleepFlag : (this.m_flags &= ~l.e_allowSleepFlag,
        this.SetAwake(!0))
    }
    ;
    l.prototype.SetAwake = function(d) {
        d ? (this.m_flags |= l.e_awakeFlag,
        this.m_sleepTime = 0) : (this.m_flags &= ~l.e_awakeFlag,
        this.m_sleepTime = 0,
        this.m_linearVelocity.SetZero(),
        this.m_angularVelocity = 0,
        this.m_force.SetZero(),
        this.m_torque = 0)
    }
    ;
    l.prototype.IsAwake = function() {
        return (this.m_flags & l.e_awakeFlag) == l.e_awakeFlag
    }
    ;
    l.prototype.SetFixedRotation = function(d) {
        this.m_flags = d ? this.m_flags | l.e_fixedRotationFlag : this.m_flags & ~l.e_fixedRotationFlag;
        this.ResetMassData()
    }
    ;
    l.prototype.IsFixedRotation = function() {
        return (this.m_flags & l.e_fixedRotationFlag) == l.e_fixedRotationFlag
    }
    ;
    l.prototype.SetActive = function(d) {
        if (d != this.IsActive()) {
            var a;
            if (d) {
                this.m_flags |= l.e_activeFlag;
                d = this.m_world.m_contactManager.m_broadPhase;
                for (a = this.m_fixtureList; a; a = a.m_next)
                    a.CreateProxy(d, this.m_xf)
            } else {
                this.m_flags &= ~l.e_activeFlag;
                d = this.m_world.m_contactManager.m_broadPhase;
                for (a = this.m_fixtureList; a; a = a.m_next)
                    a.DestroyProxy(d);
                for (d = this.m_contactList; d; )
                    a = d,
                    d = d.next,
                    this.m_world.m_contactManager.Destroy(a.contact);
                this.m_contactList = null
            }
        }
    }
    ;
    l.prototype.IsActive = function() {
        return (this.m_flags & l.e_activeFlag) == l.e_activeFlag
    }
    ;
    l.prototype.IsSleepingAllowed = function() {
        return (this.m_flags & l.e_allowSleepFlag) == l.e_allowSleepFlag
    }
    ;
    l.prototype.GetFixtureList = function() {
        return this.m_fixtureList
    }
    ;
    l.prototype.GetJointList = function() {
        return this.m_jointList
    }
    ;
    l.prototype.GetControllerList = function() {
        return this.m_controllerList
    }
    ;
    l.prototype.GetContactList = function() {
        return this.m_contactList
    }
    ;
    l.prototype.GetNext = function() {
        return this.m_next
    }
    ;
    l.prototype.GetUserData = function() {
        return this.m_userData
    }
    ;
    l.prototype.SetUserData = function(d) {
        this.m_userData = d
    }
    ;
    l.prototype.GetWorld = function() {
        return this.m_world
    }
    ;
    l.prototype.b2Body = function(d, a) {
        this.m_flags = 0;
        d.bullet && (this.m_flags |= l.e_bulletFlag);
        d.fixedRotation && (this.m_flags |= l.e_fixedRotationFlag);
        d.allowSleep && (this.m_flags |= l.e_allowSleepFlag);
        d.awake && (this.m_flags |= l.e_awakeFlag);
        d.active && (this.m_flags |= l.e_activeFlag);
        this.m_world = a;
        this.m_xf.position.SetV(d.position);
        this.m_xf.R.Set(d.angle);
        this.m_sweep.localCenter.SetZero();
        this.m_sweep.t0 = 1;
        this.m_sweep.a0 = this.m_sweep.a = d.angle;
        var g = this.m_xf.R
          , h = this.m_sweep.localCenter;
        this.m_sweep.c.x = g.col1.x * h.x + g.col2.x * h.y;
        this.m_sweep.c.y = g.col1.y * h.x + g.col2.y * h.y;
        this.m_sweep.c.x += this.m_xf.position.x;
        this.m_sweep.c.y += this.m_xf.position.y;
        this.m_sweep.c0.SetV(this.m_sweep.c);
        this.m_contactList = this.m_controllerList = this.m_jointList = null;
        this.m_controllerCount = 0;
        this.m_next = this.m_prev = null;
        this.m_linearVelocity.SetV(d.linearVelocity);
        this.m_angularVelocity = d.angularVelocity;
        this.m_linearDamping = d.linearDamping;
        this.m_angularDamping = d.angularDamping;
        this.m_force.Set(0, 0);
        this.m_sleepTime = this.m_torque = 0;
        this.m_type = d.type;
        this.m_invMass = this.m_type == l.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
        this.m_invI = this.m_I = 0;
        this.m_inertiaScale = d.inertiaScale;
        this.m_userData = d.userData;
        this.m_fixtureList = null;
        this.m_fixtureCount = 0
    }
    ;
    l.prototype.SynchronizeFixtures = function() {
        var d = l.s_xf1;
        d.R.Set(this.m_sweep.a0);
        var a = d.R
          , g = this.m_sweep.localCenter;
        d.position.x = this.m_sweep.c0.x - (a.col1.x * g.x + a.col2.x * g.y);
        d.position.y = this.m_sweep.c0.y - (a.col1.y * g.x + a.col2.y * g.y);
        g = this.m_world.m_contactManager.m_broadPhase;
        for (a = this.m_fixtureList; a; a = a.m_next)
            a.Synchronize(g, d, this.m_xf)
    }
    ;
    l.prototype.SynchronizeTransform = function() {
        this.m_xf.R.Set(this.m_sweep.a);
        var d = this.m_xf.R
          , a = this.m_sweep.localCenter;
        this.m_xf.position.x = this.m_sweep.c.x - (d.col1.x * a.x + d.col2.x * a.y);
        this.m_xf.position.y = this.m_sweep.c.y - (d.col1.y * a.x + d.col2.y * a.y)
    }
    ;
    l.prototype.ShouldCollide = function(d) {
        if (this.m_type != l.b2_dynamicBody && d.m_type != l.b2_dynamicBody)
            return !1;
        for (var a = this.m_jointList; a; a = a.next)
            if (a.other == d && !1 == a.joint.m_collideConnected)
                return !1;
        return !0
    }
    ;
    l.prototype.Advance = function(d) {
        void 0 === d && (d = 0);
        this.m_sweep.Advance(d);
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_sweep.a = this.m_sweep.a0;
        this.SynchronizeTransform()
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Body.s_xf1 = new m;
        Box2D.Dynamics.b2Body.e_islandFlag = 1;
        Box2D.Dynamics.b2Body.e_awakeFlag = 2;
        Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
        Box2D.Dynamics.b2Body.e_bulletFlag = 8;
        Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
        Box2D.Dynamics.b2Body.e_activeFlag = 32;
        Box2D.Dynamics.b2Body.b2_staticBody = 0;
        Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
        Box2D.Dynamics.b2Body.b2_dynamicBody = 2
    });
    P.b2BodyDef = function() {
        this.position = new q;
        this.linearVelocity = new q
    }
    ;
    P.prototype.b2BodyDef = function() {
        this.userData = null;
        this.position.Set(0, 0);
        this.angle = 0;
        this.linearVelocity.Set(0, 0);
        this.angularDamping = this.linearDamping = this.angularVelocity = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = l.b2_staticBody;
        this.active = !0;
        this.inertiaScale = 1
    }
    ;
    J.b2ContactFilter = function() {}
    ;
    J.prototype.ShouldCollide = function(d, a) {
        var g = d.GetFilterData()
          , h = a.GetFilterData();
        return g.groupIndex == h.groupIndex && 0 != g.groupIndex ? 0 < g.groupIndex : 0 != (g.maskBits & h.categoryBits) && 0 != (g.categoryBits & h.maskBits)
    }
    ;
    J.prototype.RayCollide = function(d, a) {
        return !d ? !0 : this.ShouldCollide(d instanceof M ? d : null, a)
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new J
    });
    L.b2ContactImpulse = function() {
        this.normalImpulses = new Vector_a2j_Number(e.b2_maxManifoldPoints);
        this.tangentImpulses = new Vector_a2j_Number(e.b2_maxManifoldPoints)
    }
    ;
    B.b2ContactListener = function() {}
    ;
    B.prototype.BeginContact = function() {}
    ;
    B.prototype.EndContact = function() {}
    ;
    B.prototype.PreSolve = function() {}
    ;
    B.prototype.PostSolve = function() {}
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new B
    });
    O.b2ContactManager = function() {}
    ;
    O.prototype.b2ContactManager = function() {
        this.m_world = null;
        this.m_contactCount = 0;
        this.m_contactFilter = J.b2_defaultFilter;
        this.m_contactListener = B.b2_defaultListener;
        this.m_contactFactory = new h(this.m_allocator);
        this.m_broadPhase = new u
    }
    ;
    O.prototype.AddPair = function(d, a) {
        var g = d instanceof M ? d : null
          , h = a instanceof M ? a : null
          , c = g.GetBody()
          , p = h.GetBody();
        if (c != p) {
            for (var n = p.GetContactList(); n; ) {
                if (n.other == c) {
                    var x = n.contact.GetFixtureA()
                      , e = n.contact.GetFixtureB();
                    if (x == g && e == h || x == h && e == g)
                        return
                }
                n = n.next
            }
            !1 != p.ShouldCollide(c) && !1 != this.m_contactFilter.ShouldCollide(g, h) && (n = this.m_contactFactory.Create(g, h),
            g = n.GetFixtureA(),
            h = n.GetFixtureB(),
            c = g.m_body,
            p = h.m_body,
            n.m_prev = null,
            n.m_next = this.m_world.m_contactList,
            null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = n),
            this.m_world.m_contactList = n,
            n.m_nodeA.contact = n,
            n.m_nodeA.other = p,
            n.m_nodeA.prev = null,
            n.m_nodeA.next = c.m_contactList,
            null != c.m_contactList && (c.m_contactList.prev = n.m_nodeA),
            c.m_contactList = n.m_nodeA,
            n.m_nodeB.contact = n,
            n.m_nodeB.other = c,
            n.m_nodeB.prev = null,
            n.m_nodeB.next = p.m_contactList,
            null != p.m_contactList && (p.m_contactList.prev = n.m_nodeB),
            p.m_contactList = n.m_nodeB,
            ++this.m_world.m_contactCount)
        }
    }
    ;
    O.prototype.FindNewContacts = function() {
        this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
    }
    ;
    O.prototype.Destroy = function(d) {
        var a = d.GetFixtureA()
          , g = d.GetFixtureB()
          , a = a.GetBody()
          , g = g.GetBody();
        d.IsTouching() && this.m_contactListener.EndContact(d);
        d.m_prev && (d.m_prev.m_next = d.m_next);
        d.m_next && (d.m_next.m_prev = d.m_prev);
        d == this.m_world.m_contactList && (this.m_world.m_contactList = d.m_next);
        d.m_nodeA.prev && (d.m_nodeA.prev.next = d.m_nodeA.next);
        d.m_nodeA.next && (d.m_nodeA.next.prev = d.m_nodeA.prev);
        d.m_nodeA == a.m_contactList && (a.m_contactList = d.m_nodeA.next);
        d.m_nodeB.prev && (d.m_nodeB.prev.next = d.m_nodeB.next);
        d.m_nodeB.next && (d.m_nodeB.next.prev = d.m_nodeB.prev);
        d.m_nodeB == g.m_contactList && (g.m_contactList = d.m_nodeB.next);
        this.m_contactFactory.Destroy(d);
        --this.m_contactCount
    }
    ;
    O.prototype.Collide = function() {
        for (var d = this.m_world.m_contactList; d; ) {
            var a = d.GetFixtureA()
              , g = d.GetFixtureB()
              , h = a.GetBody()
              , c = g.GetBody();
            if (!1 == h.IsAwake() && !1 == c.IsAwake())
                d = d.GetNext();
            else {
                if (d.m_flags & n.e_filterFlag) {
                    if (!1 == c.ShouldCollide(h)) {
                        a = d;
                        d = a.GetNext();
                        this.Destroy(a);
                        continue
                    }
                    if (!1 == this.m_contactFilter.ShouldCollide(a, g)) {
                        a = d;
                        d = a.GetNext();
                        this.Destroy(a);
                        continue
                    }
                    d.m_flags &= ~n.e_filterFlag
                }
                !1 == this.m_broadPhase.TestOverlap(a.m_proxy, g.m_proxy) ? (a = d,
                d = a.GetNext(),
                this.Destroy(a)) : (d.Update(this.m_contactListener),
                d = d.GetNext())
            }
        }
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new t
    });
    I.b2DebugDraw = function() {}
    ;
    I.prototype.b2DebugDraw = function() {}
    ;
    I.prototype.SetFlags = function() {}
    ;
    I.prototype.GetFlags = function() {}
    ;
    I.prototype.AppendFlags = function() {}
    ;
    I.prototype.ClearFlags = function() {}
    ;
    I.prototype.SetSprite = function() {}
    ;
    I.prototype.GetSprite = function() {}
    ;
    I.prototype.SetDrawScale = function() {}
    ;
    I.prototype.GetDrawScale = function() {}
    ;
    I.prototype.SetLineThickness = function() {}
    ;
    I.prototype.GetLineThickness = function() {}
    ;
    I.prototype.SetAlpha = function() {}
    ;
    I.prototype.GetAlpha = function() {}
    ;
    I.prototype.SetFillAlpha = function() {}
    ;
    I.prototype.GetFillAlpha = function() {}
    ;
    I.prototype.SetXFormScale = function() {}
    ;
    I.prototype.GetXFormScale = function() {}
    ;
    I.prototype.DrawPolygon = function() {}
    ;
    I.prototype.DrawSolidPolygon = function() {}
    ;
    I.prototype.DrawCircle = function() {}
    ;
    I.prototype.DrawSolidCircle = function() {}
    ;
    I.prototype.DrawSegment = function() {}
    ;
    I.prototype.DrawTransform = function() {}
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
        Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
        Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
        Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
        Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
        Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
    });
    R.b2DestructionListener = function() {}
    ;
    R.prototype.SayGoodbyeJoint = function() {}
    ;
    R.prototype.SayGoodbyeFixture = function() {}
    ;
    K.b2FilterData = function() {
        this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0
    }
    ;
    K.prototype.Copy = function() {
        var d = new K;
        d.categoryBits = this.categoryBits;
        d.maskBits = this.maskBits;
        d.groupIndex = this.groupIndex;
        return d
    }
    ;
    M.b2Fixture = function() {
        this.m_filter = new K
    }
    ;
    M.prototype.GetType = function() {
        return this.m_shape.GetType()
    }
    ;
    M.prototype.GetShape = function() {
        return this.m_shape
    }
    ;
    M.prototype.SetSensor = function(d) {
        if (this.m_isSensor != d && (this.m_isSensor = d,
        null != this.m_body))
            for (d = this.m_body.GetContactList(); d; ) {
                var a = d.contact
                  , g = a.GetFixtureA()
                  , h = a.GetFixtureB();
                if (g == this || h == this)
                    a.SetSensor(g.IsSensor() || h.IsSensor());
                d = d.next
            }
    }
    ;
    M.prototype.IsSensor = function() {
        return this.m_isSensor
    }
    ;
    M.prototype.SetFilterData = function(d) {
        this.m_filter = d.Copy();
        if (!this.m_body)
            for (d = this.m_body.GetContactList(); d; ) {
                var a = d.contact
                  , g = a.GetFixtureA()
                  , h = a.GetFixtureB();
                (g == this || h == this) && a.FlagForFiltering();
                d = d.next
            }
    }
    ;
    M.prototype.GetFilterData = function() {
        return this.m_filter.Copy()
    }
    ;
    M.prototype.GetBody = function() {
        return this.m_body
    }
    ;
    M.prototype.GetNext = function() {
        return this.m_next
    }
    ;
    M.prototype.GetUserData = function() {
        return this.m_userData
    }
    ;
    M.prototype.SetUserData = function(d) {
        this.m_userData = d
    }
    ;
    M.prototype.TestPoint = function(d) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), d)
    }
    ;
    M.prototype.RayCast = function(d, a) {
        return this.m_shape.RayCast(d, a, this.m_body.GetTransform())
    }
    ;
    M.prototype.GetMassData = function(d) {
        void 0 === d && (d = null);
        null == d && (d = new y);
        this.m_shape.ComputeMass(d, this.m_density);
        return d
    }
    ;
    M.prototype.SetDensity = function(d) {
        void 0 === d && (d = 0);
        this.m_density = d
    }
    ;
    M.prototype.GetDensity = function() {
        return this.m_density
    }
    ;
    M.prototype.GetFriction = function() {
        return this.m_friction
    }
    ;
    M.prototype.SetFriction = function(d) {
        void 0 === d && (d = 0);
        this.m_friction = d
    }
    ;
    M.prototype.GetRestitution = function() {
        return this.m_restitution
    }
    ;
    M.prototype.SetRestitution = function(d) {
        void 0 === d && (d = 0);
        this.m_restitution = d
    }
    ;
    M.prototype.GetAABB = function() {
        return this.m_aabb
    }
    ;
    M.prototype.b2Fixture = function() {
        this.m_aabb = new w;
        this.m_shape = this.m_next = this.m_body = this.m_userData = null;
        this.m_restitution = this.m_friction = this.m_density = 0
    }
    ;
    M.prototype.Create = function(d, a, g) {
        this.m_userData = g.userData;
        this.m_friction = g.friction;
        this.m_restitution = g.restitution;
        this.m_body = d;
        this.m_next = null;
        this.m_filter = g.filter.Copy();
        this.m_isSensor = g.isSensor;
        this.m_shape = g.shape.Copy();
        this.m_density = g.density
    }
    ;
    M.prototype.Destroy = function() {
        this.m_shape = null
    }
    ;
    M.prototype.CreateProxy = function(d, a) {
        this.m_shape.ComputeAABB(this.m_aabb, a);
        this.m_proxy = d.CreateProxy(this.m_aabb, this)
    }
    ;
    M.prototype.DestroyProxy = function(d) {
        null != this.m_proxy && (d.DestroyProxy(this.m_proxy),
        this.m_proxy = null)
    }
    ;
    M.prototype.Synchronize = function(d, g, h) {
        if (this.m_proxy) {
            var c = new w
              , p = new w;
            this.m_shape.ComputeAABB(c, g);
            this.m_shape.ComputeAABB(p, h);
            this.m_aabb.Combine(c, p);
            g = a.SubtractVV(h.position, g.position);
            d.MoveProxy(this.m_proxy, this.m_aabb, g)
        }
    }
    ;
    S.b2FixtureDef = function() {
        this.filter = new K
    }
    ;
    S.prototype.b2FixtureDef = function() {
        this.userData = this.shape = null;
        this.friction = 0.2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1
    }
    ;
    Q.b2Island = function() {}
    ;
    Q.prototype.b2Island = function() {
        this.m_bodies = new Vector;
        this.m_contacts = new Vector;
        this.m_joints = new Vector
    }
    ;
    Q.prototype.Initialize = function(d, a, g, h, c, p) {
        void 0 === d && (d = 0);
        void 0 === a && (a = 0);
        void 0 === g && (g = 0);
        var n = 0;
        this.m_bodyCapacity = d;
        this.m_contactCapacity = a;
        this.m_jointCapacity = g;
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        this.m_allocator = h;
        this.m_listener = c;
        this.m_contactSolver = p;
        for (n = this.m_bodies.length; n < d; n++)
            this.m_bodies[n] = null;
        for (n = this.m_contacts.length; n < a; n++)
            this.m_contacts[n] = null;
        for (n = this.m_joints.length; n < g; n++)
            this.m_joints[n] = null
    }
    ;
    Q.prototype.Clear = function() {
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
    }
    ;
    Q.prototype.Solve = function(d, g, h) {
        for (var c = 0, p = 0, n, c = 0; c < this.m_bodyCount; ++c)
            p = this.m_bodies[c],
            p.GetType() == l.b2_dynamicBody && (p.m_linearVelocity.x += d.dt * (g.x + p.m_invMass * p.m_force.x),
            p.m_linearVelocity.y += d.dt * (g.y + p.m_invMass * p.m_force.y),
            p.m_angularVelocity += d.dt * p.m_invI * p.m_torque,
            p.m_linearVelocity.Multiply(a.Clamp(1 - d.dt * p.m_linearDamping, 0, 1)),
            p.m_angularVelocity *= a.Clamp(1 - d.dt * p.m_angularDamping, 0, 1));
        this.m_contactSolver.Initialize(d, this.m_contacts, this.m_contactCount, this.m_allocator);
        g = this.m_contactSolver;
        g.InitVelocityConstraints(d);
        for (c = 0; c < this.m_jointCount; ++c)
            n = this.m_joints[c],
            n.InitVelocityConstraints(d);
        for (c = 0; c < d.velocityIterations; ++c) {
            for (p = 0; p < this.m_jointCount; ++p)
                n = this.m_joints[p],
                n.SolveVelocityConstraints(d);
            g.SolveVelocityConstraints()
        }
        for (c = 0; c < this.m_jointCount; ++c)
            n = this.m_joints[c],
            n.FinalizeVelocityConstraints();
        g.FinalizeVelocityConstraints();
        for (c = 0; c < this.m_bodyCount; ++c)
            if (p = this.m_bodies[c],
            p.GetType() != l.b2_staticBody) {
                var x = d.dt * p.m_linearVelocity.x
                  , E = d.dt * p.m_linearVelocity.y;
                x * x + E * E > e.b2_maxTranslationSquared && (p.m_linearVelocity.Normalize(),
                p.m_linearVelocity.x *= e.b2_maxTranslation * d.inv_dt,
                p.m_linearVelocity.y *= e.b2_maxTranslation * d.inv_dt);
                x = d.dt * p.m_angularVelocity;
                x * x > e.b2_maxRotationSquared && (p.m_angularVelocity = 0 > p.m_angularVelocity ? -e.b2_maxRotation * d.inv_dt : e.b2_maxRotation * d.inv_dt);
                p.m_sweep.c0.SetV(p.m_sweep.c);
                p.m_sweep.a0 = p.m_sweep.a;
                p.m_sweep.c.x += d.dt * p.m_linearVelocity.x;
                p.m_sweep.c.y += d.dt * p.m_linearVelocity.y;
                p.m_sweep.a += d.dt * p.m_angularVelocity;
                p.SynchronizeTransform()
            }
        for (c = 0; c < d.positionIterations; ++c) {
            x = g.SolvePositionConstraints(e.b2_contactBaumgarte);
            E = !0;
            for (p = 0; p < this.m_jointCount; ++p)
                n = this.m_joints[p],
                n = n.SolvePositionConstraints(e.b2_contactBaumgarte),
                E = E && n;
            if (x && E)
                break
        }
        this.Report(g.m_constraints);
        if (h) {
            h = Number.MAX_VALUE;
            g = e.b2_linearSleepTolerance * e.b2_linearSleepTolerance;
            x = e.b2_angularSleepTolerance * e.b2_angularSleepTolerance;
            for (c = 0; c < this.m_bodyCount; ++c)
                p = this.m_bodies[c],
                p.GetType() != l.b2_staticBody && (0 == (p.m_flags & l.e_allowSleepFlag) && (h = p.m_sleepTime = 0),
                0 == (p.m_flags & l.e_allowSleepFlag) || p.m_angularVelocity * p.m_angularVelocity > x || a.Dot(p.m_linearVelocity, p.m_linearVelocity) > g ? h = p.m_sleepTime = 0 : (p.m_sleepTime += d.dt,
                h = a.Min(h, p.m_sleepTime)));
            if (h >= e.b2_timeToSleep)
                for (c = 0; c < this.m_bodyCount; ++c)
                    p = this.m_bodies[c],
                    p.SetAwake(!1)
        }
    }
    ;
    Q.prototype.SolveTOI = function(d) {
        var a = 0
          , g = 0;
        this.m_contactSolver.Initialize(d, this.m_contacts, this.m_contactCount, this.m_allocator);
        for (var h = this.m_contactSolver, a = 0; a < this.m_jointCount; ++a)
            this.m_joints[a].InitVelocityConstraints(d);
        for (a = 0; a < d.velocityIterations; ++a) {
            h.SolveVelocityConstraints();
            for (g = 0; g < this.m_jointCount; ++g)
                this.m_joints[g].SolveVelocityConstraints(d)
        }
        for (a = 0; a < this.m_bodyCount; ++a)
            if (g = this.m_bodies[a],
            g.GetType() != l.b2_staticBody) {
                var p = d.dt * g.m_linearVelocity.x
                  , c = d.dt * g.m_linearVelocity.y;
                p * p + c * c > e.b2_maxTranslationSquared && (g.m_linearVelocity.Normalize(),
                g.m_linearVelocity.x *= e.b2_maxTranslation * d.inv_dt,
                g.m_linearVelocity.y *= e.b2_maxTranslation * d.inv_dt);
                p = d.dt * g.m_angularVelocity;
                p * p > e.b2_maxRotationSquared && (g.m_angularVelocity = 0 > g.m_angularVelocity ? -e.b2_maxRotation * d.inv_dt : e.b2_maxRotation * d.inv_dt);
                g.m_sweep.c0.SetV(g.m_sweep.c);
                g.m_sweep.a0 = g.m_sweep.a;
                g.m_sweep.c.x += d.dt * g.m_linearVelocity.x;
                g.m_sweep.c.y += d.dt * g.m_linearVelocity.y;
                g.m_sweep.a += d.dt * g.m_angularVelocity;
                g.SynchronizeTransform()
            }
        for (a = 0; a < d.positionIterations; ++a) {
            p = h.SolvePositionConstraints(0.75);
            c = !0;
            for (g = 0; g < this.m_jointCount; ++g)
                var n = this.m_joints[g].SolvePositionConstraints(e.b2_contactBaumgarte)
                  , c = c && n;
            if (p && c)
                break
        }
        this.Report(h.m_constraints)
    }
    ;
    Q.prototype.Report = function(d) {
        if (null != this.m_listener)
            for (var a = 0; a < this.m_contactCount; ++a) {
                for (var g = this.m_contacts[a], h = d[a], p = 0; p < h.pointCount; ++p)
                    Q.s_impulse.normalImpulses[p] = h.points[p].normalImpulse,
                    Q.s_impulse.tangentImpulses[p] = h.points[p].tangentImpulse;
                this.m_listener.PostSolve(g, Q.s_impulse)
            }
    }
    ;
    Q.prototype.AddBody = function(d) {
        d.m_islandIndex = this.m_bodyCount;
        this.m_bodies[this.m_bodyCount++] = d
    }
    ;
    Q.prototype.AddContact = function(d) {
        this.m_contacts[this.m_contactCount++] = d
    }
    ;
    Q.prototype.AddJoint = function(d) {
        this.m_joints[this.m_jointCount++] = d
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Island.s_impulse = new L
    });
    g.b2TimeStep = function() {}
    ;
    g.prototype.Set = function(d) {
        this.dt = d.dt;
        this.inv_dt = d.inv_dt;
        this.positionIterations = d.positionIterations;
        this.velocityIterations = d.velocityIterations;
        this.warmStarting = d.warmStarting
    }
    ;
    p.b2World = function() {
        this.s_stack = new Vector;
        this.m_contactManager = new O;
        this.m_contactSolver = new D;
        this.m_island = new Q
    }
    ;
    p.prototype.b2World = function(d, a) {
        this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
        this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        p.m_warmStarting = !0;
        p.m_continuousPhysics = !0;
        this.m_allowSleep = a;
        this.m_gravity = d;
        this.m_inv_dt0 = 0;
        this.m_contactManager.m_world = this;
        var g = new P;
        this.m_groundBody = this.CreateBody(g)
    }
    ;
    p.prototype.SetDestructionListener = function(d) {
        this.m_destructionListener = d
    }
    ;
    p.prototype.SetContactFilter = function(d) {
        this.m_contactManager.m_contactFilter = d
    }
    ;
    p.prototype.SetContactListener = function(d) {
        this.m_contactManager.m_contactListener = d
    }
    ;
    p.prototype.SetDebugDraw = function(d) {
        this.m_debugDraw = d
    }
    ;
    p.prototype.SetBroadPhase = function(d) {
        var a = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = d;
        for (var g = this.m_bodyList; g; g = g.m_next)
            for (var h = g.m_fixtureList; h; h = h.m_next)
                h.m_proxy = d.CreateProxy(a.GetFatAABB(h.m_proxy), h)
    }
    ;
    p.prototype.Validate = function() {
        this.m_contactManager.m_broadPhase.Validate()
    }
    ;
    p.prototype.GetProxyCount = function() {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
    }
    ;
    p.prototype.CreateBody = function(d) {
        if (!0 == this.IsLocked())
            return null;
        d = new l(d,this);
        d.m_prev = null;
        if (d.m_next = this.m_bodyList)
            this.m_bodyList.m_prev = d;
        this.m_bodyList = d;
        ++this.m_bodyCount;
        return d
    }
    ;
    p.prototype.DestroyBody = function(d) {
        if (!0 != this.IsLocked()) {
            for (var a = d.m_jointList; a; ) {
                var g = a
                  , a = a.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(g.joint);
                this.DestroyJoint(g.joint)
            }
            for (a = d.m_controllerList; a; )
                g = a,
                a = a.nextController,
                g.controller.RemoveBody(d);
            for (a = d.m_contactList; a; )
                g = a,
                a = a.next,
                this.m_contactManager.Destroy(g.contact);
            d.m_contactList = null;
            for (a = d.m_fixtureList; a; )
                g = a,
                a = a.m_next,
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(g),
                g.DestroyProxy(this.m_contactManager.m_broadPhase),
                g.Destroy();
            d.m_fixtureList = null;
            d.m_fixtureCount = 0;
            d.m_prev && (d.m_prev.m_next = d.m_next);
            d.m_next && (d.m_next.m_prev = d.m_prev);
            d == this.m_bodyList && (this.m_bodyList = d.m_next);
            --this.m_bodyCount
        }
    }
    ;
    p.prototype.CreateJoint = function(d) {
        var a = x.Create(d, null);
        a.m_prev = null;
        if (a.m_next = this.m_jointList)
            this.m_jointList.m_prev = a;
        this.m_jointList = a;
        ++this.m_jointCount;
        a.m_edgeA.joint = a;
        a.m_edgeA.other = a.m_bodyB;
        a.m_edgeA.prev = null;
        if (a.m_edgeA.next = a.m_bodyA.m_jointList)
            a.m_bodyA.m_jointList.prev = a.m_edgeA;
        a.m_bodyA.m_jointList = a.m_edgeA;
        a.m_edgeB.joint = a;
        a.m_edgeB.other = a.m_bodyA;
        a.m_edgeB.prev = null;
        if (a.m_edgeB.next = a.m_bodyB.m_jointList)
            a.m_bodyB.m_jointList.prev = a.m_edgeB;
        a.m_bodyB.m_jointList = a.m_edgeB;
        var g = d.bodyA
          , h = d.bodyB;
        if (!1 == d.collideConnected)
            for (d = h.GetContactList(); d; )
                d.other == g && d.contact.FlagForFiltering(),
                d = d.next;
        return a
    }
    ;
    p.prototype.DestroyJoint = function(a) {
        var g = a.m_collideConnected;
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a == this.m_jointList && (this.m_jointList = a.m_next);
        var h = a.m_bodyA
          , p = a.m_bodyB;
        h.SetAwake(!0);
        p.SetAwake(!0);
        a.m_edgeA.prev && (a.m_edgeA.prev.next = a.m_edgeA.next);
        a.m_edgeA.next && (a.m_edgeA.next.prev = a.m_edgeA.prev);
        a.m_edgeA == h.m_jointList && (h.m_jointList = a.m_edgeA.next);
        a.m_edgeA.prev = null;
        a.m_edgeA.next = null;
        a.m_edgeB.prev && (a.m_edgeB.prev.next = a.m_edgeB.next);
        a.m_edgeB.next && (a.m_edgeB.next.prev = a.m_edgeB.prev);
        a.m_edgeB == p.m_jointList && (p.m_jointList = a.m_edgeB.next);
        a.m_edgeB.prev = null;
        a.m_edgeB.next = null;
        x.Destroy(a, null);
        --this.m_jointCount;
        if (!1 == g)
            for (a = p.GetContactList(); a; )
                a.other == h && a.contact.FlagForFiltering(),
                a = a.next
    }
    ;
    p.prototype.AddController = function(a) {
        a.m_next = this.m_controllerList;
        a.m_prev = null;
        this.m_controllerList = a;
        a.m_world = this;
        this.m_controllerCount++;
        return a
    }
    ;
    p.prototype.RemoveController = function(a) {
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        this.m_controllerList == a && (this.m_controllerList = a.m_next);
        this.m_controllerCount--
    }
    ;
    p.prototype.CreateController = function(a) {
        if (a.m_world != this)
            throw Error("Controller can only be a member of one world");
        a.m_next = this.m_controllerList;
        a.m_prev = null;
        this.m_controllerList && (this.m_controllerList.m_prev = a);
        this.m_controllerList = a;
        ++this.m_controllerCount;
        a.m_world = this;
        return a
    }
    ;
    p.prototype.DestroyController = function(a) {
        a.Clear();
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a == this.m_controllerList && (this.m_controllerList = a.m_next);
        --this.m_controllerCount
    }
    ;
    p.prototype.SetWarmStarting = function(a) {
        p.m_warmStarting = a
    }
    ;
    p.prototype.SetContinuousPhysics = function(a) {
        p.m_continuousPhysics = a
    }
    ;
    p.prototype.GetBodyCount = function() {
        return this.m_bodyCount
    }
    ;
    p.prototype.GetJointCount = function() {
        return this.m_jointCount
    }
    ;
    p.prototype.GetContactCount = function() {
        return this.m_contactCount
    }
    ;
    p.prototype.SetGravity = function(a) {
        this.m_gravity = a
    }
    ;
    p.prototype.GetGravity = function() {
        return this.m_gravity
    }
    ;
    p.prototype.GetGroundBody = function() {
        return this.m_groundBody
    }
    ;
    p.prototype.Step = function(a, g, h) {
        void 0 === a && (a = 0);
        void 0 === g && (g = 0);
        void 0 === h && (h = 0);
        this.m_flags & p.e_newFixture && (this.m_contactManager.FindNewContacts(),
        this.m_flags &= ~p.e_newFixture);
        this.m_flags |= p.e_locked;
        var c = p.s_timestep2;
        c.dt = a;
        c.velocityIterations = g;
        c.positionIterations = h;
        c.inv_dt = 0 < a ? 1 / a : 0;
        c.dtRatio = this.m_inv_dt0 * a;
        c.warmStarting = p.m_warmStarting;
        this.m_contactManager.Collide();
        0 < c.dt && this.Solve(c);
        p.m_continuousPhysics && 0 < c.dt && this.SolveTOI(c);
        0 < c.dt && (this.m_inv_dt0 = c.inv_dt);
        this.m_flags &= ~p.e_locked
    }
    ;
    p.prototype.ClearForces = function() {
        for (var a = this.m_bodyList; a; a = a.m_next)
            a.m_force.SetZero(),
            a.m_torque = 0
    }
    ;
    p.prototype.DrawDebugData = function() {
        if (null != this.m_debugDraw) {
            this.m_debugDraw.m_sprite.graphics.clear();
            var a = this.m_debugDraw.GetFlags(), g, h, c;
            new q;
            new q;
            new q;
            var n;
            new w;
            new w;
            n = [new q, new q, new q, new q];
            var x = new s(0,0,0);
            if (a & I.e_shapeBit)
                for (g = this.m_bodyList; g; g = g.m_next) {
                    n = g.m_xf;
                    for (h = g.GetFixtureList(); h; h = h.m_next)
                        c = h.GetShape(),
                        !1 == g.IsActive() ? x.Set(0.5, 0.5, 0.3) : g.GetType() == l.b2_staticBody ? x.Set(0.5, 0.9, 0.5) : g.GetType() == l.b2_kinematicBody ? x.Set(0.5, 0.5, 0.9) : !1 == g.IsAwake() ? x.Set(0.6, 0.6, 0.6) : x.Set(0.9, 0.7, 0.7),
                        this.DrawShape(c, n, x)
                }
            if (a & I.e_jointBit)
                for (g = this.m_jointList; g; g = g.m_next)
                    this.DrawJoint(g);
            if (a & I.e_controllerBit)
                for (g = this.m_controllerList; g; g = g.m_next)
                    g.Draw(this.m_debugDraw);
            if (a & I.e_pairBit) {
                x.Set(0.3, 0.9, 0.9);
                for (g = this.m_contactManager.m_contactList; g; g = g.GetNext())
                    c = g.GetFixtureA(),
                    h = g.GetFixtureB(),
                    c = c.GetAABB().GetCenter(),
                    h = h.GetAABB().GetCenter(),
                    this.m_debugDraw.DrawSegment(c, h, x)
            }
            if (a & I.e_aabbBit) {
                x.Set(0.9, 0.3, 0.9);
                c = this.m_contactManager.m_broadPhase;
                n = [new q, new q, new q, new q];
                for (g = this.m_bodyList; g; g = g.GetNext())
                    if (!1 != g.IsActive())
                        for (h = g.GetFixtureList(); h; h = h.GetNext()) {
                            var e = c.GetFatAABB(h.m_proxy);
                            n[0].Set(e.lowerBound.x, e.lowerBound.y);
                            n[1].Set(e.upperBound.x, e.lowerBound.y);
                            n[2].Set(e.upperBound.x, e.upperBound.y);
                            n[3].Set(e.lowerBound.x, e.upperBound.y);
                            this.m_debugDraw.DrawPolygon(n, 4, x)
                        }
            }
            if (a & I.e_centerOfMassBit)
                for (g = this.m_bodyList; g; g = g.m_next)
                    n = p.s_xf,
                    n.R = g.m_xf.R,
                    n.position = g.GetWorldCenter(),
                    this.m_debugDraw.DrawTransform(n)
        }
    }
    ;
    p.prototype.QueryAABB = function(a, g) {
        var h = this.m_contactManager.m_broadPhase;
        h.Query(function(g) {
            return a.ReportFixture(h.GetUserData(g))
        }, g)
    }
    ;
    p.prototype.QueryShape = function(a, g, h) {
        void 0 === h && (h = null);
        null == h && (h = new m,
        h.SetIdentity());
        var p = this.m_contactManager.m_broadPhase
          , c = new w;
        g.ComputeAABB(c, h);
        p.Query(function(c) {
            c = p.GetUserData(c)instanceof M ? p.GetUserData(c) : null;
            return N.TestOverlap(g, h, c.GetShape(), c.GetBody().GetTransform()) ? a(c) : !0
        }, c)
    }
    ;
    p.prototype.QueryPoint = function(a, g) {
        var h = this.m_contactManager.m_broadPhase
          , p = new w;
        p.lowerBound.Set(g.x - e.b2_linearSlop, g.y - e.b2_linearSlop);
        p.upperBound.Set(g.x + e.b2_linearSlop, g.y + e.b2_linearSlop);
        h.Query(function(p) {
            p = h.GetUserData(p)instanceof M ? h.GetUserData(p) : null;
            return p.TestPoint(g) ? a(p) : !0
        }, p)
    }
    ;
    p.prototype.RayCast = function(a, g, h) {
        var p = this.m_contactManager.m_broadPhase
          , c = new F
          , n = new C(g,h);
        p.RayCast(function(n, x) {
            var e = p.GetUserData(x)
              , e = e instanceof M ? e : null;
            if (e.RayCast(c, n)) {
                var E = c.fraction
                  , D = new q((1 - E) * g.x + E * h.x,(1 - E) * g.y + E * h.y);
                return a(e, D, c.normal, E)
            }
            return n.maxFraction
        }, n)
    }
    ;
    p.prototype.RayCastOne = function(a, g) {
        var h;
        this.RayCast(function(a, d, g, p) {
            void 0 === p && (p = 0);
            h = a;
            return p
        }, a, g);
        return h
    }
    ;
    p.prototype.RayCastAll = function(a, g) {
        var h = new Vector;
        this.RayCast(function(a) {
            h[h.length] = a;
            return 1
        }, a, g);
        return h
    }
    ;
    p.prototype.GetBodyList = function() {
        return this.m_bodyList
    }
    ;
    p.prototype.GetJointList = function() {
        return this.m_jointList
    }
    ;
    p.prototype.GetContactList = function() {
        return this.m_contactList
    }
    ;
    p.prototype.IsLocked = function() {
        return 0 < (this.m_flags & p.e_locked)
    }
    ;
    p.prototype.Solve = function(a) {
        for (var g, h = this.m_controllerList; h; h = h.m_next)
            h.Step(a);
        h = this.m_island;
        h.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        for (g = this.m_bodyList; g; g = g.m_next)
            g.m_flags &= ~l.e_islandFlag;
        for (var p = this.m_contactList; p; p = p.m_next)
            p.m_flags &= ~n.e_islandFlag;
        for (p = this.m_jointList; p; p = p.m_next)
            p.m_islandFlag = !1;
        parseInt(this.m_bodyCount);
        for (var p = this.s_stack, c = this.m_bodyList; c; c = c.m_next)
            if (!(c.m_flags & l.e_islandFlag) && !(!1 == c.IsAwake() || !1 == c.IsActive()) && c.GetType() != l.b2_staticBody) {
                h.Clear();
                var x = 0;
                p[x++] = c;
                for (c.m_flags |= l.e_islandFlag; 0 < x; )
                    if (g = p[--x],
                    h.AddBody(g),
                    !1 == g.IsAwake() && g.SetAwake(!0),
                    g.GetType() != l.b2_staticBody) {
                        for (var e, E = g.m_contactList; E; E = E.next)
                            if (!(E.contact.m_flags & n.e_islandFlag) && !(!0 == E.contact.IsSensor() || !1 == E.contact.IsEnabled() || !1 == E.contact.IsTouching()))
                                h.AddContact(E.contact),
                                E.contact.m_flags |= n.e_islandFlag,
                                e = E.other,
                                e.m_flags & l.e_islandFlag || (p[x++] = e,
                                e.m_flags |= l.e_islandFlag);
                        for (g = g.m_jointList; g; g = g.next)
                            !0 != g.joint.m_islandFlag && (e = g.other,
                            !1 != e.IsActive() && (h.AddJoint(g.joint),
                            g.joint.m_islandFlag = !0,
                            e.m_flags & l.e_islandFlag || (p[x++] = e,
                            e.m_flags |= l.e_islandFlag)))
                    }
                h.Solve(a, this.m_gravity, this.m_allowSleep);
                for (x = 0; x < h.m_bodyCount; ++x)
                    g = h.m_bodies[x],
                    g.GetType() == l.b2_staticBody && (g.m_flags &= ~l.e_islandFlag)
            }
        for (x = 0; x < p.length && p[x]; ++x)
            p[x] = null;
        for (g = this.m_bodyList; g; g = g.m_next)
            !1 == g.IsAwake() || !1 == g.IsActive() || g.GetType() != l.b2_staticBody && g.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts()
    }
    ;
    p.prototype.SolveTOI = function(a) {
        var g, h, c, x = this.m_island;
        x.Initialize(this.m_bodyCount, e.b2_maxTOIContactsPerIsland, e.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        var E = p.s_queue;
        for (g = this.m_bodyList; g; g = g.m_next)
            g.m_flags &= ~l.e_islandFlag,
            g.m_sweep.t0 = 0;
        for (c = this.m_contactList; c; c = c.m_next)
            c.m_flags &= ~(n.e_toiFlag | n.e_islandFlag);
        for (c = this.m_jointList; c; c = c.m_next)
            c.m_islandFlag = !1;
        for (; ; ) {
            var D = null
              , q = 1;
            for (c = this.m_contactList; c; c = c.m_next)
                if (!(!0 == c.IsSensor() || !1 == c.IsEnabled() || !1 == c.IsContinuous())) {
                    g = 1;
                    if (c.m_flags & n.e_toiFlag)
                        g = c.m_toi;
                    else {
                        g = c.m_fixtureA;
                        h = c.m_fixtureB;
                        g = g.m_body;
                        h = h.m_body;
                        if ((g.GetType() != l.b2_dynamicBody || !1 == g.IsAwake()) && (h.GetType() != l.b2_dynamicBody || !1 == h.IsAwake()))
                            continue;
                        var m = g.m_sweep.t0;
                        g.m_sweep.t0 < h.m_sweep.t0 ? (m = h.m_sweep.t0,
                        g.m_sweep.Advance(m)) : h.m_sweep.t0 < g.m_sweep.t0 && (m = g.m_sweep.t0,
                        h.m_sweep.Advance(m));
                        g = c.ComputeTOI(g.m_sweep, h.m_sweep);
                        e.b2Assert(0 <= g && 1 >= g);
                        0 < g && 1 > g && (g = (1 - g) * m + g,
                        1 < g && (g = 1));
                        c.m_toi = g;
                        c.m_flags |= n.e_toiFlag
                    }
                    Number.MIN_VALUE < g && g < q && (D = c,
                    q = g)
                }
            if (null == D || 1 - 100 * Number.MIN_VALUE < q)
                break;
            g = D.m_fixtureA;
            h = D.m_fixtureB;
            g = g.m_body;
            h = h.m_body;
            p.s_backupA.Set(g.m_sweep);
            p.s_backupB.Set(h.m_sweep);
            g.Advance(q);
            h.Advance(q);
            D.Update(this.m_contactManager.m_contactListener);
            D.m_flags &= ~n.e_toiFlag;
            if (!0 == D.IsSensor() || !1 == D.IsEnabled())
                g.m_sweep.Set(p.s_backupA),
                h.m_sweep.Set(p.s_backupB),
                g.SynchronizeTransform(),
                h.SynchronizeTransform();
            else if (!1 != D.IsTouching()) {
                g.GetType() != l.b2_dynamicBody && (g = h);
                x.Clear();
                D = c = 0;
                E[c + D++] = g;
                for (g.m_flags |= l.e_islandFlag; 0 < D; )
                    if (g = E[c++],
                    --D,
                    x.AddBody(g),
                    !1 == g.IsAwake() && g.SetAwake(!0),
                    g.GetType() == l.b2_dynamicBody) {
                        for (h = g.m_contactList; h && x.m_contactCount != x.m_contactCapacity; h = h.next)
                            if (!(h.contact.m_flags & n.e_islandFlag) && !(!0 == h.contact.IsSensor() || !1 == h.contact.IsEnabled() || !1 == h.contact.IsTouching()))
                                x.AddContact(h.contact),
                                h.contact.m_flags |= n.e_islandFlag,
                                m = h.other,
                                m.m_flags & l.e_islandFlag || (m.GetType() != l.b2_staticBody && (m.Advance(q),
                                m.SetAwake(!0)),
                                E[c + D] = m,
                                ++D,
                                m.m_flags |= l.e_islandFlag);
                        for (g = g.m_jointList; g; g = g.next)
                            x.m_jointCount != x.m_jointCapacity && !0 != g.joint.m_islandFlag && (m = g.other,
                            !1 != m.IsActive() && (x.AddJoint(g.joint),
                            g.joint.m_islandFlag = !0,
                            m.m_flags & l.e_islandFlag || (m.GetType() != l.b2_staticBody && (m.Advance(q),
                            m.SetAwake(!0)),
                            E[c + D] = m,
                            ++D,
                            m.m_flags |= l.e_islandFlag)))
                    }
                c = p.s_timestep;
                c.warmStarting = !1;
                c.dt = (1 - q) * a.dt;
                c.inv_dt = 1 / c.dt;
                c.dtRatio = 0;
                c.velocityIterations = a.velocityIterations;
                c.positionIterations = a.positionIterations;
                x.SolveTOI(c);
                for (q = q = 0; q < x.m_bodyCount; ++q)
                    if (g = x.m_bodies[q],
                    g.m_flags &= ~l.e_islandFlag,
                    !1 != g.IsAwake() && g.GetType() == l.b2_dynamicBody) {
                        g.SynchronizeFixtures();
                        for (h = g.m_contactList; h; h = h.next)
                            h.contact.m_flags &= ~n.e_toiFlag
                    }
                for (q = 0; q < x.m_contactCount; ++q)
                    c = x.m_contacts[q],
                    c.m_flags &= ~(n.e_toiFlag | n.e_islandFlag);
                for (q = 0; q < x.m_jointCount; ++q)
                    c = x.m_joints[q],
                    c.m_islandFlag = !1;
                this.m_contactManager.FindNewContacts()
            }
        }
    }
    ;
    p.prototype.DrawJoint = function(a) {
        var g = a.GetBodyA()
          , h = a.GetBodyB()
          , c = g.m_xf.position
          , n = h.m_xf.position
          , e = a.GetAnchorA()
          , D = a.GetAnchorB()
          , q = p.s_jointColor;
        switch (a.m_type) {
        case x.e_distanceJoint:
            this.m_debugDraw.DrawSegment(e, D, q);
            break;
        case x.e_pulleyJoint:
            g = a instanceof E ? a : null;
            a = g.GetGroundAnchorA();
            g = g.GetGroundAnchorB();
            this.m_debugDraw.DrawSegment(a, e, q);
            this.m_debugDraw.DrawSegment(g, D, q);
            this.m_debugDraw.DrawSegment(a, g, q);
            break;
        case x.e_mouseJoint:
            this.m_debugDraw.DrawSegment(e, D, q);
            break;
        default:
            g != this.m_groundBody && this.m_debugDraw.DrawSegment(c, e, q),
            this.m_debugDraw.DrawSegment(e, D, q),
            h != this.m_groundBody && this.m_debugDraw.DrawSegment(n, D, q)
        }
    }
    ;
    p.prototype.DrawShape = function(g, h, c) {
        switch (g.m_type) {
        case N.e_circleShape:
            var p = g instanceof H ? g : null;
            g = a.MulX(h, p.m_p);
            this.m_debugDraw.DrawSolidCircle(g, p.m_radius, h.R.col1, c);
            break;
        case N.e_polygonShape:
            p = 0;
            p = g instanceof T ? g : null;
            g = parseInt(p.GetVertexCount());
            for (var n = p.GetVertices(), x = new Vector(g), p = 0; p < g; ++p)
                x[p] = a.MulX(h, n[p]);
            this.m_debugDraw.DrawSolidPolygon(x, g, c);
            break;
        case N.e_edgeShape:
            p = g instanceof A ? g : null,
            this.m_debugDraw.DrawSegment(a.MulX(h, p.GetVertex1()), a.MulX(h, p.GetVertex2()), c)
        }
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2World.s_timestep2 = new g;
        Box2D.Dynamics.b2World.s_xf = new m;
        Box2D.Dynamics.b2World.s_backupA = new c;
        Box2D.Dynamics.b2World.s_backupB = new c;
        Box2D.Dynamics.b2World.s_timestep = new g;
        Box2D.Dynamics.b2World.s_queue = new Vector;
        Box2D.Dynamics.b2World.s_jointColor = new s(0.5,0.8,0.8);
        Box2D.Dynamics.b2World.e_newFixture = 1;
        Box2D.Dynamics.b2World.e_locked = 2
    })
}
)();
(function() {
    var a = Box2D.Collision.Shapes.b2CircleShape
      , c = Box2D.Collision.Shapes.b2EdgeShape
      , m = Box2D.Collision.Shapes.b2PolygonShape
      , q = Box2D.Collision.Shapes.b2Shape
      , s = Box2D.Dynamics.Contacts.b2CircleContact
      , e = Box2D.Dynamics.Contacts.b2Contact
      , w = Box2D.Dynamics.Contacts.b2ContactConstraint
      , t = Box2D.Dynamics.Contacts.b2ContactConstraintPoint
      , u = Box2D.Dynamics.Contacts.b2ContactEdge
      , C = Box2D.Dynamics.Contacts.b2ContactFactory
      , F = Box2D.Dynamics.Contacts.b2ContactRegister
      , H = Box2D.Dynamics.Contacts.b2ContactResult
      , A = Box2D.Dynamics.Contacts.b2ContactSolver
      , y = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact
      , T = Box2D.Dynamics.Contacts.b2NullContact
      , N = Box2D.Dynamics.Contacts.b2PolyAndCircleContact
      , l = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact
      , P = Box2D.Dynamics.Contacts.b2PolygonContact
      , J = Box2D.Dynamics.Contacts.b2PositionSolverManifold
      , L = Box2D.Dynamics.b2Body
      , B = Box2D.Dynamics.b2TimeStep
      , O = Box2D.Common.b2Settings
      , I = Box2D.Common.Math.b2Mat22
      , R = Box2D.Common.Math.b2Math
      , K = Box2D.Common.Math.b2Vec2
      , M = Box2D.Collision.b2Collision
      , S = Box2D.Collision.b2ContactID
      , Q = Box2D.Collision.b2Manifold
      , g = Box2D.Collision.b2TimeOfImpact
      , p = Box2D.Collision.b2TOIInput
      , n = Box2D.Collision.b2WorldManifold;
    Box2D.inherit(s, Box2D.Dynamics.Contacts.b2Contact);
    s.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    s.b2CircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }
    ;
    s.Create = function() {
        return new s
    }
    ;
    s.Destroy = function() {}
    ;
    s.prototype.Reset = function(a, g) {
        this.__super.Reset.call(this, a, g)
    }
    ;
    s.prototype.Evaluate = function() {
        var g = this.m_fixtureA.GetBody()
          , c = this.m_fixtureB.GetBody();
        M.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape()instanceof a ? this.m_fixtureA.GetShape() : null, g.m_xf, this.m_fixtureB.GetShape()instanceof a ? this.m_fixtureB.GetShape() : null, c.m_xf)
    }
    ;
    e.b2Contact = function() {
        this.m_nodeA = new u;
        this.m_nodeB = new u;
        this.m_manifold = new Q;
        this.m_oldManifold = new Q
    }
    ;
    e.prototype.GetManifold = function() {
        return this.m_manifold
    }
    ;
    e.prototype.GetWorldManifold = function(a) {
        var g = this.m_fixtureA.GetBody()
          , c = this.m_fixtureB.GetBody()
          , p = this.m_fixtureA.GetShape()
          , d = this.m_fixtureB.GetShape();
        a.Initialize(this.m_manifold, g.GetTransform(), p.m_radius, c.GetTransform(), d.m_radius)
    }
    ;
    e.prototype.IsTouching = function() {
        return (this.m_flags & e.e_touchingFlag) == e.e_touchingFlag
    }
    ;
    e.prototype.IsContinuous = function() {
        return (this.m_flags & e.e_continuousFlag) == e.e_continuousFlag
    }
    ;
    e.prototype.SetSensor = function(a) {
        this.m_flags = a ? this.m_flags | e.e_sensorFlag : this.m_flags & ~e.e_sensorFlag
    }
    ;
    e.prototype.IsSensor = function() {
        return (this.m_flags & e.e_sensorFlag) == e.e_sensorFlag
    }
    ;
    e.prototype.SetEnabled = function(a) {
        this.m_flags = a ? this.m_flags | e.e_enabledFlag : this.m_flags & ~e.e_enabledFlag
    }
    ;
    e.prototype.IsEnabled = function() {
        return (this.m_flags & e.e_enabledFlag) == e.e_enabledFlag
    }
    ;
    e.prototype.GetNext = function() {
        return this.m_next
    }
    ;
    e.prototype.GetFixtureA = function() {
        return this.m_fixtureA
    }
    ;
    e.prototype.GetFixtureB = function() {
        return this.m_fixtureB
    }
    ;
    e.prototype.FlagForFiltering = function() {
        this.m_flags |= e.e_filterFlag
    }
    ;
    e.prototype.b2Contact = function() {}
    ;
    e.prototype.Reset = function(a, g) {
        void 0 === a && (a = null);
        void 0 === g && (g = null);
        this.m_flags = e.e_enabledFlag;
        if (!a || !g)
            this.m_fixtureB = this.m_fixtureA = null;
        else {
            if (a.IsSensor() || g.IsSensor())
                this.m_flags |= e.e_sensorFlag;
            var c = a.GetBody()
              , p = g.GetBody();
            if (c.GetType() != L.b2_dynamicBody || c.IsBullet() || p.GetType() != L.b2_dynamicBody || p.IsBullet())
                this.m_flags |= e.e_continuousFlag;
            this.m_fixtureA = a;
            this.m_fixtureB = g;
            this.m_manifold.m_pointCount = 0;
            this.m_next = this.m_prev = null;
            this.m_nodeA.contact = null;
            this.m_nodeA.prev = null;
            this.m_nodeA.next = null;
            this.m_nodeA.other = null;
            this.m_nodeB.contact = null;
            this.m_nodeB.prev = null;
            this.m_nodeB.next = null;
            this.m_nodeB.other = null
        }
    }
    ;
    e.prototype.Update = function(a) {
        var g = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold;
        this.m_manifold = g;
        this.m_flags |= e.e_enabledFlag;
        var c = !1
          , g = (this.m_flags & e.e_touchingFlag) == e.e_touchingFlag
          , p = this.m_fixtureA.m_body
          , d = this.m_fixtureB.m_body
          , n = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & e.e_sensorFlag)
            n && (c = this.m_fixtureA.GetShape(),
            n = this.m_fixtureB.GetShape(),
            p = p.GetTransform(),
            d = d.GetTransform(),
            c = q.TestOverlap(c, p, n, d)),
            this.m_manifold.m_pointCount = 0;
        else {
            this.m_flags = p.GetType() != L.b2_dynamicBody || p.IsBullet() || d.GetType() != L.b2_dynamicBody || d.IsBullet() ? this.m_flags | e.e_continuousFlag : this.m_flags & ~e.e_continuousFlag;
            if (n) {
                this.Evaluate();
                c = 0 < this.m_manifold.m_pointCount;
                for (n = 0; n < this.m_manifold.m_pointCount; ++n) {
                    var z = this.m_manifold.m_points[n];
                    z.m_normalImpulse = 0;
                    z.m_tangentImpulse = 0;
                    for (var l = z.m_id, m = 0; m < this.m_oldManifold.m_pointCount; ++m) {
                        var s = this.m_oldManifold.m_points[m];
                        if (s.m_id.key == l.key) {
                            z.m_normalImpulse = s.m_normalImpulse;
                            z.m_tangentImpulse = s.m_tangentImpulse;
                            break
                        }
                    }
                }
            } else
                this.m_manifold.m_pointCount = 0;
            c != g && (p.SetAwake(!0),
            d.SetAwake(!0))
        }
        this.m_flags = c ? this.m_flags | e.e_touchingFlag : this.m_flags & ~e.e_touchingFlag;
        !1 == g && !0 == c && a.BeginContact(this);
        !0 == g && !1 == c && a.EndContact(this);
        0 == (this.m_flags & e.e_sensorFlag) && a.PreSolve(this, this.m_oldManifold)
    }
    ;
    e.prototype.Evaluate = function() {}
    ;
    e.prototype.ComputeTOI = function(a, c) {
        e.s_input.proxyA.Set(this.m_fixtureA.GetShape());
        e.s_input.proxyB.Set(this.m_fixtureB.GetShape());
        e.s_input.sweepA = a;
        e.s_input.sweepB = c;
        e.s_input.tolerance = O.b2_linearSlop;
        return g.TimeOfImpact(e.s_input)
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
        Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
        Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
        Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
        Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
        Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
        Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
        Box2D.Dynamics.Contacts.b2Contact.s_input = new p
    });
    w.b2ContactConstraint = function() {
        this.localPlaneNormal = new K;
        this.localPoint = new K;
        this.normal = new K;
        this.normalMass = new I;
        this.K = new I
    }
    ;
    w.prototype.b2ContactConstraint = function() {
        this.points = new Vector(O.b2_maxManifoldPoints);
        for (var a = 0; a < O.b2_maxManifoldPoints; a++)
            this.points[a] = new t
    }
    ;
    t.b2ContactConstraintPoint = function() {
        this.localPoint = new K;
        this.rA = new K;
        this.rB = new K
    }
    ;
    u.b2ContactEdge = function() {}
    ;
    C.b2ContactFactory = function() {}
    ;
    C.prototype.b2ContactFactory = function(a) {
        this.m_allocator = a;
        this.InitializeRegisters()
    }
    ;
    C.prototype.AddType = function(a, g, c, p) {
        void 0 === c && (c = 0);
        void 0 === p && (p = 0);
        this.m_registers[c][p].createFcn = a;
        this.m_registers[c][p].destroyFcn = g;
        this.m_registers[c][p].primary = !0;
        c != p && (this.m_registers[p][c].createFcn = a,
        this.m_registers[p][c].destroyFcn = g,
        this.m_registers[p][c].primary = !1)
    }
    ;
    C.prototype.InitializeRegisters = function() {
        this.m_registers = new Vector(q.e_shapeTypeCount);
        for (var a = 0; a < q.e_shapeTypeCount; a++) {
            this.m_registers[a] = new Vector(q.e_shapeTypeCount);
            for (var g = 0; g < q.e_shapeTypeCount; g++)
                this.m_registers[a][g] = new F
        }
        this.AddType(s.Create, s.Destroy, q.e_circleShape, q.e_circleShape);
        this.AddType(N.Create, N.Destroy, q.e_polygonShape, q.e_circleShape);
        this.AddType(P.Create, P.Destroy, q.e_polygonShape, q.e_polygonShape);
        this.AddType(y.Create, y.Destroy, q.e_edgeShape, q.e_circleShape);
        this.AddType(l.Create, l.Destroy, q.e_polygonShape, q.e_edgeShape)
    }
    ;
    C.prototype.Create = function(a, g) {
        var c = parseInt(a.GetType())
          , p = parseInt(g.GetType())
          , c = this.m_registers[c][p];
        if (c.pool)
            return p = c.pool,
            c.pool = p.m_next,
            c.poolCount--,
            p.Reset(a, g),
            p;
        p = c.createFcn;
        return null != p ? (c.primary ? (p = p(this.m_allocator),
        p.Reset(a, g)) : (p = p(this.m_allocator),
        p.Reset(g, a)),
        p) : null
    }
    ;
    C.prototype.Destroy = function(a) {
        0 < a.m_manifold.m_pointCount && (a.m_fixtureA.m_body.SetAwake(!0),
        a.m_fixtureB.m_body.SetAwake(!0));
        var g = parseInt(a.m_fixtureA.GetType())
          , c = parseInt(a.m_fixtureB.GetType())
          , g = this.m_registers[g][c];
        g.poolCount++;
        a.m_next = g.pool;
        g.pool = a;
        g = g.destroyFcn;
        g(a, this.m_allocator)
    }
    ;
    F.b2ContactRegister = function() {}
    ;
    H.b2ContactResult = function() {
        this.position = new K;
        this.normal = new K;
        this.id = new S
    }
    ;
    A.b2ContactSolver = function() {
        this.m_step = new B;
        this.m_constraints = new Vector
    }
    ;
    A.prototype.b2ContactSolver = function() {}
    ;
    A.prototype.Initialize = function(a, g, c, p) {
        void 0 === c && (c = 0);
        var d;
        this.m_step.Set(a);
        this.m_allocator = p;
        a = 0;
        for (this.m_constraintCount = c; this.m_constraints.length < this.m_constraintCount; )
            this.m_constraints[this.m_constraints.length] = new w;
        for (a = 0; a < c; ++a) {
            d = g[a];
            p = d.m_fixtureA;
            var n = d.m_fixtureB
              , e = p.m_shape.m_radius
              , q = n.m_shape.m_radius
              , l = p.m_body
              , m = n.m_body
              , s = d.GetManifold()
              , t = O.b2MixFriction(p.GetFriction(), n.GetFriction())
              , y = O.b2MixRestitution(p.GetRestitution(), n.GetRestitution())
              , u = l.m_linearVelocity.x
              , J = l.m_linearVelocity.y
              , H = m.m_linearVelocity.x
              , B = m.m_linearVelocity.y
              , C = l.m_angularVelocity
              , N = m.m_angularVelocity;
            O.b2Assert(0 < s.m_pointCount);
            A.s_worldManifold.Initialize(s, l.m_xf, e, m.m_xf, q);
            n = A.s_worldManifold.m_normal.x;
            d = A.s_worldManifold.m_normal.y;
            p = this.m_constraints[a];
            p.bodyA = l;
            p.bodyB = m;
            p.manifold = s;
            p.normal.x = n;
            p.normal.y = d;
            p.pointCount = s.m_pointCount;
            p.friction = t;
            p.restitution = y;
            p.localPlaneNormal.x = s.m_localPlaneNormal.x;
            p.localPlaneNormal.y = s.m_localPlaneNormal.y;
            p.localPoint.x = s.m_localPoint.x;
            p.localPoint.y = s.m_localPoint.y;
            p.radius = e + q;
            p.type = s.m_type;
            for (e = 0; e < p.pointCount; ++e) {
                t = s.m_points[e];
                q = p.points[e];
                q.normalImpulse = t.m_normalImpulse;
                q.tangentImpulse = t.m_tangentImpulse;
                q.localPoint.SetV(t.m_localPoint);
                var t = q.rA.x = A.s_worldManifold.m_points[e].x - l.m_sweep.c.x
                  , y = q.rA.y = A.s_worldManifold.m_points[e].y - l.m_sweep.c.y
                  , I = q.rB.x = A.s_worldManifold.m_points[e].x - m.m_sweep.c.x
                  , K = q.rB.y = A.s_worldManifold.m_points[e].y - m.m_sweep.c.y
                  , F = t * d - y * n
                  , L = I * d - K * n
                  , F = F * F
                  , L = L * L;
                q.normalMass = 1 / (l.m_invMass + m.m_invMass + l.m_invI * F + m.m_invI * L);
                var M = l.m_mass * l.m_invMass + m.m_mass * m.m_invMass
                  , M = M + (l.m_mass * l.m_invI * F + m.m_mass * m.m_invI * L);
                q.equalizedMass = 1 / M;
                L = d;
                M = -n;
                F = t * M - y * L;
                L = I * M - K * L;
                F *= F;
                L *= L;
                q.tangentMass = 1 / (l.m_invMass + m.m_invMass + l.m_invI * F + m.m_invI * L);
                q.velocityBias = 0;
                t = p.normal.x * (H + -N * K - u - -C * y) + p.normal.y * (B + N * I - J - C * t);
                t < -O.b2_velocityThreshold && (q.velocityBias += -p.restitution * t)
            }
            2 == p.pointCount && (B = p.points[0],
            H = p.points[1],
            s = l.m_invMass,
            l = l.m_invI,
            u = m.m_invMass,
            m = m.m_invI,
            J = B.rA.x * d - B.rA.y * n,
            B = B.rB.x * d - B.rB.y * n,
            C = H.rA.x * d - H.rA.y * n,
            H = H.rB.x * d - H.rB.y * n,
            n = s + u + l * J * J + m * B * B,
            d = s + u + l * C * C + m * H * H,
            m = s + u + l * J * C + m * B * H,
            n * n < 100 * (n * d - m * m) ? (p.K.col1.Set(n, m),
            p.K.col2.Set(m, d),
            p.K.GetInverse(p.normalMass)) : p.pointCount = 1)
        }
    }
    ;
    A.prototype.InitVelocityConstraints = function(a) {
        for (var g = 0; g < this.m_constraintCount; ++g) {
            var p = this.m_constraints[g]
              , c = p.bodyA
              , d = p.bodyB
              , n = c.m_invMass
              , e = c.m_invI
              , q = d.m_invMass
              , l = d.m_invI
              , m = p.normal.x
              , s = p.normal.y
              , t = s
              , A = -m
              , y = 0
              , u = 0;
            if (a.warmStarting) {
                u = p.pointCount;
                for (y = 0; y < u; ++y) {
                    var w = p.points[y];
                    w.normalImpulse *= a.dtRatio;
                    w.tangentImpulse *= a.dtRatio;
                    var H = w.normalImpulse * m + w.tangentImpulse * t
                      , B = w.normalImpulse * s + w.tangentImpulse * A;
                    c.m_angularVelocity -= e * (w.rA.x * B - w.rA.y * H);
                    c.m_linearVelocity.x -= n * H;
                    c.m_linearVelocity.y -= n * B;
                    d.m_angularVelocity += l * (w.rB.x * B - w.rB.y * H);
                    d.m_linearVelocity.x += q * H;
                    d.m_linearVelocity.y += q * B
                }
            } else {
                u = p.pointCount;
                for (y = 0; y < u; ++y)
                    c = p.points[y],
                    c.normalImpulse = 0,
                    c.tangentImpulse = 0
            }
        }
    }
    ;
    A.prototype.SolveVelocityConstraints = function() {
        for (var a = 0, g, p = 0, c = 0, d = 0, n = c = c = p = p = 0, e = p = p = 0, q = p = d = 0, l = 0, m, s = 0; s < this.m_constraintCount; ++s) {
            var d = this.m_constraints[s]
              , t = d.bodyA
              , A = d.bodyB
              , y = t.m_angularVelocity
              , u = A.m_angularVelocity
              , w = t.m_linearVelocity
              , H = A.m_linearVelocity
              , B = t.m_invMass
              , J = t.m_invI
              , C = A.m_invMass
              , L = A.m_invI
              , q = d.normal.x
              , F = l = d.normal.y;
            m = -q;
            e = d.friction;
            for (a = 0; a < d.pointCount; a++)
                g = d.points[a],
                p = H.x - u * g.rB.y - w.x + y * g.rA.y,
                c = H.y + u * g.rB.x - w.y - y * g.rA.x,
                p = p * F + c * m,
                p = g.tangentMass * -p,
                c = e * g.normalImpulse,
                c = R.Clamp(g.tangentImpulse + p, -c, c),
                p = c - g.tangentImpulse,
                n = p * F,
                p *= m,
                w.x -= B * n,
                w.y -= B * p,
                y -= J * (g.rA.x * p - g.rA.y * n),
                H.x += C * n,
                H.y += C * p,
                u += L * (g.rB.x * p - g.rB.y * n),
                g.tangentImpulse = c;
            parseInt(d.pointCount);
            if (1 == d.pointCount)
                g = d.points[0],
                p = H.x + -u * g.rB.y - w.x - -y * g.rA.y,
                c = H.y + u * g.rB.x - w.y - y * g.rA.x,
                d = p * q + c * l,
                p = -g.normalMass * (d - g.velocityBias),
                c = g.normalImpulse + p,
                c = 0 < c ? c : 0,
                p = c - g.normalImpulse,
                n = p * q,
                p *= l,
                w.x -= B * n,
                w.y -= B * p,
                y -= J * (g.rA.x * p - g.rA.y * n),
                H.x += C * n,
                H.y += C * p,
                u += L * (g.rB.x * p - g.rB.y * n),
                g.normalImpulse = c;
            else {
                g = d.points[0];
                var a = d.points[1]
                  , p = g.normalImpulse
                  , e = a.normalImpulse
                  , N = (H.x - u * g.rB.y - w.x + y * g.rA.y) * q + (H.y + u * g.rB.x - w.y - y * g.rA.x) * l
                  , I = (H.x - u * a.rB.y - w.x + y * a.rA.y) * q + (H.y + u * a.rB.x - w.y - y * a.rA.x) * l
                  , c = N - g.velocityBias
                  , n = I - a.velocityBias;
                m = d.K;
                c -= m.col1.x * p + m.col2.x * e;
                for (n -= m.col1.y * p + m.col2.y * e; ; ) {
                    m = d.normalMass;
                    F = -(m.col1.x * c + m.col2.x * n);
                    m = -(m.col1.y * c + m.col2.y * n);
                    if (0 <= F && 0 <= m) {
                        p = F - p;
                        e = m - e;
                        d = p * q;
                        p *= l;
                        q *= e;
                        l *= e;
                        w.x -= B * (d + q);
                        w.y -= B * (p + l);
                        y -= J * (g.rA.x * p - g.rA.y * d + a.rA.x * l - a.rA.y * q);
                        H.x += C * (d + q);
                        H.y += C * (p + l);
                        u += L * (g.rB.x * p - g.rB.y * d + a.rB.x * l - a.rB.y * q);
                        g.normalImpulse = F;
                        a.normalImpulse = m;
                        break
                    }
                    F = -g.normalMass * c;
                    m = 0;
                    I = d.K.col1.y * F + n;
                    if (0 <= F && 0 <= I) {
                        p = F - p;
                        e = m - e;
                        d = p * q;
                        p *= l;
                        q *= e;
                        l *= e;
                        w.x -= B * (d + q);
                        w.y -= B * (p + l);
                        y -= J * (g.rA.x * p - g.rA.y * d + a.rA.x * l - a.rA.y * q);
                        H.x += C * (d + q);
                        H.y += C * (p + l);
                        u += L * (g.rB.x * p - g.rB.y * d + a.rB.x * l - a.rB.y * q);
                        g.normalImpulse = F;
                        a.normalImpulse = m;
                        break
                    }
                    F = 0;
                    m = -a.normalMass * n;
                    N = d.K.col2.x * m + c;
                    if (0 <= m && 0 <= N) {
                        p = F - p;
                        e = m - e;
                        d = p * q;
                        p *= l;
                        q *= e;
                        l *= e;
                        w.x -= B * (d + q);
                        w.y -= B * (p + l);
                        y -= J * (g.rA.x * p - g.rA.y * d + a.rA.x * l - a.rA.y * q);
                        H.x += C * (d + q);
                        H.y += C * (p + l);
                        u += L * (g.rB.x * p - g.rB.y * d + a.rB.x * l - a.rB.y * q);
                        g.normalImpulse = F;
                        a.normalImpulse = m;
                        break
                    }
                    m = F = 0;
                    N = c;
                    I = n;
                    if (0 <= N && 0 <= I) {
                        p = F - p;
                        e = m - e;
                        d = p * q;
                        p *= l;
                        q *= e;
                        l *= e;
                        w.x -= B * (d + q);
                        w.y -= B * (p + l);
                        y -= J * (g.rA.x * p - g.rA.y * d + a.rA.x * l - a.rA.y * q);
                        H.x += C * (d + q);
                        H.y += C * (p + l);
                        u += L * (g.rB.x * p - g.rB.y * d + a.rB.x * l - a.rB.y * q);
                        g.normalImpulse = F;
                        a.normalImpulse = m;
                        break
                    }
                    break
                }
            }
            t.m_angularVelocity = y;
            A.m_angularVelocity = u
        }
    }
    ;
    A.prototype.FinalizeVelocityConstraints = function() {
        for (var a = 0; a < this.m_constraintCount; ++a)
            for (var g = this.m_constraints[a], p = g.manifold, c = 0; c < g.pointCount; ++c) {
                var d = p.m_points[c]
                  , n = g.points[c];
                d.m_normalImpulse = n.normalImpulse;
                d.m_tangentImpulse = n.tangentImpulse
            }
    }
    ;
    A.prototype.SolvePositionConstraints = function(a) {
        void 0 === a && (a = 0);
        for (var g = 0, p = 0; p < this.m_constraintCount; p++) {
            var c = this.m_constraints[p]
              , d = c.bodyA
              , n = c.bodyB
              , e = d.m_mass * d.m_invMass
              , q = d.m_mass * d.m_invI
              , l = n.m_mass * n.m_invMass
              , m = n.m_mass * n.m_invI;
            A.s_psm.Initialize(c);
            for (var s = A.s_psm.m_normal, t = 0; t < c.pointCount; t++) {
                var y = c.points[t]
                  , u = A.s_psm.m_points[t]
                  , w = A.s_psm.m_separations[t]
                  , H = u.x - d.m_sweep.c.x
                  , B = u.y - d.m_sweep.c.y
                  , J = u.x - n.m_sweep.c.x
                  , u = u.y - n.m_sweep.c.y
                  , g = g < w ? g : w
                  , w = R.Clamp(a * (w + O.b2_linearSlop), -O.b2_maxLinearCorrection, 0)
                  , w = -y.equalizedMass * w
                  , y = w * s.x
                  , w = w * s.y;
                d.m_sweep.c.x -= e * y;
                d.m_sweep.c.y -= e * w;
                d.m_sweep.a -= q * (H * w - B * y);
                d.SynchronizeTransform();
                n.m_sweep.c.x += l * y;
                n.m_sweep.c.y += l * w;
                n.m_sweep.a += m * (J * w - u * y);
                n.SynchronizeTransform()
            }
        }
        return g > -1.5 * O.b2_linearSlop
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new n;
        Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new J
    });
    Box2D.inherit(y, Box2D.Dynamics.Contacts.b2Contact);
    y.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    y.b2EdgeAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }
    ;
    y.Create = function() {
        return new y
    }
    ;
    y.Destroy = function() {}
    ;
    y.prototype.Reset = function(a, g) {
        this.__super.Reset.call(this, a, g);
        O.b2Assert(a.GetType() == q.e_edgeShape);
        O.b2Assert(g.GetType() == q.e_circleShape)
    }
    ;
    y.prototype.Evaluate = function() {
        var g = this.m_fixtureA.GetBody()
          , p = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape()instanceof c ? this.m_fixtureA.GetShape() : null, g.m_xf, this.m_fixtureB.GetShape()instanceof a ? this.m_fixtureB.GetShape() : null, p.m_xf)
    }
    ;
    y.prototype.b2CollideEdgeAndCircle = function(a, g, p, c, d) {
        var n = a.m_pointCount = 0, e = 0, q, l;
        l = d.R;
        q = c.m_p;
        e = d.position.y + (l.col1.y * q.x + l.col2.y * q.y);
        n = d.position.x + (l.col1.x * q.x + l.col2.x * q.y) - p.position.x;
        e -= p.position.y;
        l = p.R;
        p = n * l.col1.x + e * l.col1.y;
        l = n * l.col2.x + e * l.col2.y;
        d = g.m_radius + c.m_radius;
        q = g.m_normal;
        var n = q.x * n + q.y * e
          , e = g.m_v1
          , m = g.m_v2;
        n < Number.MIN_VALUE ? (console.log(1),
        a.m_pointCount = 1,
        a.m_type = Q.e_faceA,
        a.m_localPlaneNormal.SetV(g.m_normal),
        a.m_localPoint.x = 0.5 * (e.x + m.x),
        a.m_localPoint.y = 0.5 * (e.y + m.y),
        a.m_points[0].m_localPoint.SetV(c.m_p),
        a.m_points[0].m_id.key = 0) : (g = (p - m.x) * (e.x - m.x) + (l - m.y) * (e.y - m.y),
        0 >= (p - e.x) * (m.x - e.x) + (l - e.y) * (m.y - e.y) ? (console.log(2),
        (p - e.x) * (p - e.x) + (l - e.y) * (l - e.y) > d * d || (a.m_pointCount = 1,
        a.m_type = Q.e_faceA,
        a.m_localPlaneNormal.x = p - e.x,
        a.m_localPlaneNormal.y = l - e.y,
        a.m_localPlaneNormal.Normalize(),
        a.m_localPoint.SetV(e),
        a.m_points[0].m_localPoint.SetV(c.m_p),
        a.m_points[0].m_id.key = 0)) : 0 >= g ? (console.log(3),
        (p - m.x) * (p - m.x) + (l - m.y) * (l - m.y) > d * d || (a.m_pointCount = 1,
        a.m_type = Q.e_faceA,
        a.m_localPlaneNormal.x = p - m.x,
        a.m_localPlaneNormal.y = l - m.y,
        a.m_localPlaneNormal.Normalize(),
        a.m_localPoint.SetV(m),
        a.m_points[0].m_localPoint.SetV(c.m_p),
        a.m_points[0].m_id.key = 0)) : (g = 0.5 * (e.x + m.x),
        e = 0.5 * (e.y + m.y),
        n = (p - g) * q.x + (l - e) * q.y,
        n > d || (a.m_pointCount = 1,
        a.m_type = Q.e_faceA,
        a.m_localPlaneNormal.x = q.x,
        a.m_localPlaneNormal.y = q.y,
        a.m_localPlaneNormal.Normalize(),
        a.m_localPoint.Set(g, e),
        a.m_points[0].m_localPoint.SetV(c.m_p),
        a.m_points[0].m_id.key = 0)))
    }
    ;
    Box2D.inherit(T, Box2D.Dynamics.Contacts.b2Contact);
    T.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    T.b2NullContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }
    ;
    T.prototype.b2NullContact = function() {
        this.__super.b2Contact.call(this)
    }
    ;
    T.prototype.Evaluate = function() {}
    ;
    Box2D.inherit(N, Box2D.Dynamics.Contacts.b2Contact);
    N.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    N.b2PolyAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }
    ;
    N.Create = function() {
        return new N
    }
    ;
    N.Destroy = function() {}
    ;
    N.prototype.Reset = function(a, g) {
        this.__super.Reset.call(this, a, g);
        O.b2Assert(a.GetType() == q.e_polygonShape);
        O.b2Assert(g.GetType() == q.e_circleShape)
    }
    ;
    N.prototype.Evaluate = function() {
        var g = this.m_fixtureA.m_body
          , p = this.m_fixtureB.m_body;
        M.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape()instanceof m ? this.m_fixtureA.GetShape() : null, g.m_xf, this.m_fixtureB.GetShape()instanceof a ? this.m_fixtureB.GetShape() : null, p.m_xf)
    }
    ;
    Box2D.inherit(l, Box2D.Dynamics.Contacts.b2Contact);
    l.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    l.b2PolyAndEdgeContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }
    ;
    l.Create = function() {
        return new l
    }
    ;
    l.Destroy = function() {}
    ;
    l.prototype.Reset = function(a, g) {
        this.__super.Reset.call(this, a, g);
        O.b2Assert(a.GetType() == q.e_polygonShape);
        O.b2Assert(g.GetType() == q.e_edgeShape)
    }
    ;
    l.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody()
          , g = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape()instanceof m ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape()instanceof c ? this.m_fixtureB.GetShape() : null, g.m_xf)
    }
    ;
    l.prototype.b2CollidePolyAndEdge = function() {}
    ;
    Box2D.inherit(P, Box2D.Dynamics.Contacts.b2Contact);
    P.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    P.b2PolygonContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    }
    ;
    P.Create = function() {
        return new P
    }
    ;
    P.Destroy = function() {}
    ;
    P.prototype.Reset = function(a, g) {
        this.__super.Reset.call(this, a, g)
    }
    ;
    P.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody()
          , g = this.m_fixtureB.GetBody();
        M.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape()instanceof m ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape()instanceof m ? this.m_fixtureB.GetShape() : null, g.m_xf)
    }
    ;
    J.b2PositionSolverManifold = function() {}
    ;
    J.prototype.b2PositionSolverManifold = function() {
        this.m_normal = new K;
        this.m_separations = new Vector_a2j_Number(O.b2_maxManifoldPoints);
        this.m_points = new Vector(O.b2_maxManifoldPoints);
        for (var a = 0; a < O.b2_maxManifoldPoints; a++)
            this.m_points[a] = new K
    }
    ;
    J.prototype.Initialize = function(a) {
        O.b2Assert(0 < a.pointCount);
        var g = 0, p = 0, c = 0, d, n = 0, e = 0;
        switch (a.type) {
        case Q.e_circles:
            d = a.bodyA.m_xf.R;
            c = a.localPoint;
            g = a.bodyA.m_xf.position.x + (d.col1.x * c.x + d.col2.x * c.y);
            p = a.bodyA.m_xf.position.y + (d.col1.y * c.x + d.col2.y * c.y);
            d = a.bodyB.m_xf.R;
            c = a.points[0].localPoint;
            n = a.bodyB.m_xf.position.x + (d.col1.x * c.x + d.col2.x * c.y);
            d = a.bodyB.m_xf.position.y + (d.col1.y * c.x + d.col2.y * c.y);
            var c = n - g
              , e = d - p
              , l = c * c + e * e;
            l > Number.MIN_VALUE * Number.MIN_VALUE ? (l = Math.sqrt(l),
            this.m_normal.x = c / l,
            this.m_normal.y = e / l) : (this.m_normal.x = 1,
            this.m_normal.y = 0);
            this.m_points[0].x = 0.5 * (g + n);
            this.m_points[0].y = 0.5 * (p + d);
            this.m_separations[0] = c * this.m_normal.x + e * this.m_normal.y - a.radius;
            break;
        case Q.e_faceA:
            d = a.bodyA.m_xf.R;
            c = a.localPlaneNormal;
            this.m_normal.x = d.col1.x * c.x + d.col2.x * c.y;
            this.m_normal.y = d.col1.y * c.x + d.col2.y * c.y;
            d = a.bodyA.m_xf.R;
            c = a.localPoint;
            n = a.bodyA.m_xf.position.x + (d.col1.x * c.x + d.col2.x * c.y);
            e = a.bodyA.m_xf.position.y + (d.col1.y * c.x + d.col2.y * c.y);
            d = a.bodyB.m_xf.R;
            for (g = 0; g < a.pointCount; ++g)
                c = a.points[g].localPoint,
                p = a.bodyB.m_xf.position.x + (d.col1.x * c.x + d.col2.x * c.y),
                c = a.bodyB.m_xf.position.y + (d.col1.y * c.x + d.col2.y * c.y),
                this.m_separations[g] = (p - n) * this.m_normal.x + (c - e) * this.m_normal.y - a.radius,
                this.m_points[g].x = p,
                this.m_points[g].y = c;
            break;
        case Q.e_faceB:
            d = a.bodyB.m_xf.R;
            c = a.localPlaneNormal;
            this.m_normal.x = d.col1.x * c.x + d.col2.x * c.y;
            this.m_normal.y = d.col1.y * c.x + d.col2.y * c.y;
            d = a.bodyB.m_xf.R;
            c = a.localPoint;
            n = a.bodyB.m_xf.position.x + (d.col1.x * c.x + d.col2.x * c.y);
            e = a.bodyB.m_xf.position.y + (d.col1.y * c.x + d.col2.y * c.y);
            d = a.bodyA.m_xf.R;
            for (g = 0; g < a.pointCount; ++g)
                c = a.points[g].localPoint,
                p = a.bodyA.m_xf.position.x + (d.col1.x * c.x + d.col2.x * c.y),
                c = a.bodyA.m_xf.position.y + (d.col1.y * c.x + d.col2.y * c.y),
                this.m_separations[g] = (p - n) * this.m_normal.x + (c - e) * this.m_normal.y - a.radius,
                this.m_points[g].Set(p, c);
            this.m_normal.x *= -1;
            this.m_normal.y *= -1
        }
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new K;
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new K
    })
}
)();
(function() {
    var a = Box2D.Common.Math.b2Mat22
      , c = Box2D.Common.Math.b2Math
      , m = Box2D.Common.Math.b2Vec2
      , q = Box2D.Common.b2Color
      , s = Box2D.Dynamics.Controllers.b2BuoyancyController
      , e = Box2D.Dynamics.Controllers.b2ConstantAccelController
      , w = Box2D.Dynamics.Controllers.b2ConstantForceController
      , t = Box2D.Dynamics.Controllers.b2Controller
      , u = Box2D.Dynamics.Controllers.b2ControllerEdge
      , C = Box2D.Dynamics.Controllers.b2GravityController
      , F = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(s, Box2D.Dynamics.Controllers.b2Controller);
    s.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    s.b2BuoyancyController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.normal = new m(0,-1);
        this.density = this.offset = 0;
        this.velocity = new m(0,0);
        this.linearDrag = 2;
        this.angularDrag = 1;
        this.useDensity = !1;
        this.useWorldGravity = !0;
        this.gravity = null
    }
    ;
    s.prototype.Step = function() {
        if (this.m_bodyList) {
            this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy());
            for (var a = this.m_bodyList; a; a = a.nextBody) {
                var c = a.body;
                if (!1 != c.IsAwake()) {
                    for (var e = new m, q = new m, s = 0, l = 0, t = c.GetFixtureList(); t; t = t.GetNext()) {
                        var u = new m
                          , w = t.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), u)
                          , s = s + w;
                        e.x += w * u.x;
                        e.y += w * u.y;
                        var B = 0
                          , B = 1
                          , l = l + w * B;
                        q.x += w * u.x * B;
                        q.y += w * u.y * B
                    }
                    e.x /= s;
                    e.y /= s;
                    q.x /= l;
                    q.y /= l;
                    s < Number.MIN_VALUE || (l = this.gravity.GetNegative(),
                    l.Multiply(this.density * s),
                    c.ApplyForce(l, q),
                    q = c.GetLinearVelocityFromWorldPoint(e),
                    q.Subtract(this.velocity),
                    q.Multiply(-this.linearDrag * s),
                    c.ApplyForce(q, e),
                    c.ApplyTorque(-c.GetInertia() / c.GetMass() * s * c.GetAngularVelocity() * this.angularDrag))
                }
            }
        }
    }
    ;
    s.prototype.Draw = function(a) {
        var c = new m
          , e = new m;
        c.x = this.normal.x * this.offset + 1E3 * this.normal.y;
        c.y = this.normal.y * this.offset - 1E3 * this.normal.x;
        e.x = this.normal.x * this.offset - 1E3 * this.normal.y;
        e.y = this.normal.y * this.offset + 1E3 * this.normal.x;
        var s = new q(0,0,1);
        a.DrawSegment(c, e, s)
    }
    ;
    Box2D.inherit(e, Box2D.Dynamics.Controllers.b2Controller);
    e.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    e.b2ConstantAccelController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.A = new m(0,0)
    }
    ;
    e.prototype.Step = function(a) {
        a = new m(this.A.x * a.dt,this.A.y * a.dt);
        for (var c = this.m_bodyList; c; c = c.nextBody) {
            var e = c.body;
            e.IsAwake() && e.SetLinearVelocity(new m(e.GetLinearVelocity().x + a.x,e.GetLinearVelocity().y + a.y))
        }
    }
    ;
    Box2D.inherit(w, Box2D.Dynamics.Controllers.b2Controller);
    w.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    w.b2ConstantForceController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.F = new m(0,0)
    }
    ;
    w.prototype.Step = function() {
        for (var a = this.m_bodyList; a; a = a.nextBody) {
            var c = a.body;
            c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter())
        }
    }
    ;
    t.b2Controller = function() {}
    ;
    t.prototype.Step = function() {}
    ;
    t.prototype.Draw = function() {}
    ;
    t.prototype.AddBody = function(a) {
        var c = new u;
        c.controller = this;
        c.body = a;
        c.nextBody = this.m_bodyList;
        c.prevBody = null;
        this.m_bodyList = c;
        c.nextBody && (c.nextBody.prevBody = c);
        this.m_bodyCount++;
        c.nextController = a.m_controllerList;
        c.prevController = null;
        a.m_controllerList = c;
        c.nextController && (c.nextController.prevController = c);
        a.m_controllerCount++
    }
    ;
    t.prototype.RemoveBody = function(a) {
        for (var c = a.m_controllerList; c && c.controller != this; )
            c = c.nextController;
        c.prevBody && (c.prevBody.nextBody = c.nextBody);
        c.nextBody && (c.nextBody.prevBody = c.prevBody);
        c.nextController && (c.nextController.prevController = c.prevController);
        c.prevController && (c.prevController.nextController = c.nextController);
        this.m_bodyList == c && (this.m_bodyList = c.nextBody);
        a.m_controllerList == c && (a.m_controllerList = c.nextController);
        a.m_controllerCount--;
        this.m_bodyCount--
    }
    ;
    t.prototype.Clear = function() {
        for (; this.m_bodyList; )
            this.RemoveBody(this.m_bodyList.body)
    }
    ;
    t.prototype.GetNext = function() {
        return this.m_next
    }
    ;
    t.prototype.GetWorld = function() {
        return this.m_world
    }
    ;
    t.prototype.GetBodyList = function() {
        return this.m_bodyList
    }
    ;
    u.b2ControllerEdge = function() {}
    ;
    Box2D.inherit(C, Box2D.Dynamics.Controllers.b2Controller);
    C.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    C.b2GravityController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.G = 1;
        this.invSqr = !0
    }
    ;
    C.prototype.Step = function() {
        var a = null
          , c = null
          , e = null
          , q = 0
          , s = null
          , l = null
          , t = null
          , u = 0
          , w = 0
          , B = 0
          , u = null;
        if (this.invSqr)
            for (a = this.m_bodyList; a; a = a.nextBody) {
                c = a.body;
                e = c.GetWorldCenter();
                q = c.GetMass();
                for (s = this.m_bodyList; s != a; s = s.nextBody)
                    l = s.body,
                    t = l.GetWorldCenter(),
                    u = t.x - e.x,
                    w = t.y - e.y,
                    B = u * u + w * w,
                    B < Number.MIN_VALUE || (u = new m(u,w),
                    u.Multiply(this.G / B / Math.sqrt(B) * q * l.GetMass()),
                    c.IsAwake() && c.ApplyForce(u, e),
                    u.Multiply(-1),
                    l.IsAwake() && l.ApplyForce(u, t))
            }
        else
            for (a = this.m_bodyList; a; a = a.nextBody) {
                c = a.body;
                e = c.GetWorldCenter();
                q = c.GetMass();
                for (s = this.m_bodyList; s != a; s = s.nextBody)
                    l = s.body,
                    t = l.GetWorldCenter(),
                    u = t.x - e.x,
                    w = t.y - e.y,
                    B = u * u + w * w,
                    B < Number.MIN_VALUE || (u = new m(u,w),
                    u.Multiply(this.G / B * q * l.GetMass()),
                    c.IsAwake() && c.ApplyForce(u, e),
                    u.Multiply(-1),
                    l.IsAwake() && l.ApplyForce(u, t))
            }
    }
    ;
    Box2D.inherit(F, Box2D.Dynamics.Controllers.b2Controller);
    F.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    F.b2TensorDampingController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.T = new a;
        this.maxTimestep = 0
    }
    ;
    F.prototype.SetAxisAligned = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.T.col1.x = -a;
        this.T.col1.y = 0;
        this.T.col2.x = 0;
        this.T.col2.y = -c;
        this.maxTimestep = 0 < a || 0 < c ? 1 / Math.max(a, c) : 0
    }
    ;
    F.prototype.Step = function(a) {
        a = a.dt;
        if (!(a <= Number.MIN_VALUE)) {
            a > this.maxTimestep && 0 < this.maxTimestep && (a = this.maxTimestep);
            for (var e = this.m_bodyList; e; e = e.nextBody) {
                var q = e.body;
                if (q.IsAwake()) {
                    var s = q.GetWorldVector(c.MulMV(this.T, q.GetLocalVector(q.GetLinearVelocity())));
                    q.SetLinearVelocity(new m(q.GetLinearVelocity().x + s.x * a,q.GetLinearVelocity().y + s.y * a))
                }
            }
        }
    }
}
)();
(function() {
    var a = Box2D.Common.b2Settings
      , c = Box2D.Common.Math.b2Mat22
      , m = Box2D.Common.Math.b2Mat33
      , q = Box2D.Common.Math.b2Math
      , s = Box2D.Common.Math.b2Vec2
      , e = Box2D.Common.Math.b2Vec3
      , w = Box2D.Dynamics.Joints.b2DistanceJoint
      , t = Box2D.Dynamics.Joints.b2DistanceJointDef
      , u = Box2D.Dynamics.Joints.b2FrictionJoint
      , C = Box2D.Dynamics.Joints.b2FrictionJointDef
      , F = Box2D.Dynamics.Joints.b2GearJoint
      , H = Box2D.Dynamics.Joints.b2GearJointDef
      , A = Box2D.Dynamics.Joints.b2Jacobian
      , y = Box2D.Dynamics.Joints.b2Joint
      , T = Box2D.Dynamics.Joints.b2JointDef
      , N = Box2D.Dynamics.Joints.b2JointEdge
      , l = Box2D.Dynamics.Joints.b2LineJoint
      , P = Box2D.Dynamics.Joints.b2LineJointDef
      , J = Box2D.Dynamics.Joints.b2MouseJoint
      , L = Box2D.Dynamics.Joints.b2MouseJointDef
      , B = Box2D.Dynamics.Joints.b2PrismaticJoint
      , O = Box2D.Dynamics.Joints.b2PrismaticJointDef
      , I = Box2D.Dynamics.Joints.b2PulleyJoint
      , R = Box2D.Dynamics.Joints.b2PulleyJointDef
      , K = Box2D.Dynamics.Joints.b2RevoluteJoint
      , M = Box2D.Dynamics.Joints.b2RevoluteJointDef
      , S = Box2D.Dynamics.Joints.b2WeldJoint
      , Q = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.inherit(w, Box2D.Dynamics.Joints.b2Joint);
    w.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    w.b2DistanceJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new s;
        this.m_localAnchor2 = new s;
        this.m_u = new s
    }
    ;
    w.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }
    ;
    w.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }
    ;
    w.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_impulse * this.m_u.x,a * this.m_impulse * this.m_u.y)
    }
    ;
    w.prototype.GetReactionTorque = function() {
        return 0
    }
    ;
    w.prototype.GetLength = function() {
        return this.m_length
    }
    ;
    w.prototype.SetLength = function(a) {
        void 0 === a && (a = 0);
        this.m_length = a
    }
    ;
    w.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    }
    ;
    w.prototype.SetFrequency = function(a) {
        void 0 === a && (a = 0);
        this.m_frequencyHz = a
    }
    ;
    w.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    }
    ;
    w.prototype.SetDampingRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_dampingRatio = a
    }
    ;
    w.prototype.b2DistanceJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_length = a.length;
        this.m_frequencyHz = a.frequencyHz;
        this.m_dampingRatio = a.dampingRatio;
        this.m_bias = this.m_gamma = this.m_impulse = 0
    }
    ;
    w.prototype.InitVelocityConstraints = function(g) {
        var c, n = 0, h = this.m_bodyA, e = this.m_bodyB;
        c = h.m_xf.R;
        var q = this.m_localAnchor1.x - h.m_sweep.localCenter.x
          , l = this.m_localAnchor1.y - h.m_sweep.localCenter.y
          , n = c.col1.x * q + c.col2.x * l
          , l = c.col1.y * q + c.col2.y * l
          , q = n;
        c = e.m_xf.R;
        var d = this.m_localAnchor2.x - e.m_sweep.localCenter.x
          , r = this.m_localAnchor2.y - e.m_sweep.localCenter.y
          , n = c.col1.x * d + c.col2.x * r
          , r = c.col1.y * d + c.col2.y * r
          , d = n;
        this.m_u.x = e.m_sweep.c.x + d - h.m_sweep.c.x - q;
        this.m_u.y = e.m_sweep.c.y + r - h.m_sweep.c.y - l;
        n = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        n > a.b2_linearSlop ? this.m_u.Multiply(1 / n) : this.m_u.SetZero();
        c = q * this.m_u.y - l * this.m_u.x;
        var m = d * this.m_u.y - r * this.m_u.x;
        c = h.m_invMass + h.m_invI * c * c + e.m_invMass + e.m_invI * m * m;
        this.m_mass = 0 != c ? 1 / c : 0;
        if (0 < this.m_frequencyHz) {
            var n = n - this.m_length
              , m = 2 * Math.PI * this.m_frequencyHz
              , s = this.m_mass * m * m;
            this.m_gamma = g.dt * (2 * this.m_mass * this.m_dampingRatio * m + g.dt * s);
            this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
            this.m_bias = n * g.dt * s * this.m_gamma;
            this.m_mass = c + this.m_gamma;
            this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0
        }
        g.warmStarting ? (this.m_impulse *= g.dtRatio,
        g = this.m_impulse * this.m_u.x,
        c = this.m_impulse * this.m_u.y,
        h.m_linearVelocity.x -= h.m_invMass * g,
        h.m_linearVelocity.y -= h.m_invMass * c,
        h.m_angularVelocity -= h.m_invI * (q * c - l * g),
        e.m_linearVelocity.x += e.m_invMass * g,
        e.m_linearVelocity.y += e.m_invMass * c,
        e.m_angularVelocity += e.m_invI * (d * c - r * g)) : this.m_impulse = 0
    }
    ;
    w.prototype.SolveVelocityConstraints = function() {
        var a, c = this.m_bodyA, n = this.m_bodyB;
        a = c.m_xf.R;
        var h = this.m_localAnchor1.x - c.m_sweep.localCenter.x
          , e = this.m_localAnchor1.y - c.m_sweep.localCenter.y
          , q = a.col1.x * h + a.col2.x * e
          , e = a.col1.y * h + a.col2.y * e
          , h = q;
        a = n.m_xf.R;
        var l = this.m_localAnchor2.x - n.m_sweep.localCenter.x
          , d = this.m_localAnchor2.y - n.m_sweep.localCenter.y
          , q = a.col1.x * l + a.col2.x * d
          , d = a.col1.y * l + a.col2.y * d
          , l = q
          , q = -this.m_mass * (this.m_u.x * (n.m_linearVelocity.x + -n.m_angularVelocity * d - (c.m_linearVelocity.x + -c.m_angularVelocity * e)) + this.m_u.y * (n.m_linearVelocity.y + n.m_angularVelocity * l - (c.m_linearVelocity.y + c.m_angularVelocity * h)) + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += q;
        a = q * this.m_u.x;
        q *= this.m_u.y;
        c.m_linearVelocity.x -= c.m_invMass * a;
        c.m_linearVelocity.y -= c.m_invMass * q;
        c.m_angularVelocity -= c.m_invI * (h * q - e * a);
        n.m_linearVelocity.x += n.m_invMass * a;
        n.m_linearVelocity.y += n.m_invMass * q;
        n.m_angularVelocity += n.m_invI * (l * q - d * a)
    }
    ;
    w.prototype.SolvePositionConstraints = function() {
        var g;
        if (0 < this.m_frequencyHz)
            return !0;
        var c = this.m_bodyA
          , n = this.m_bodyB;
        g = c.m_xf.R;
        var h = this.m_localAnchor1.x - c.m_sweep.localCenter.x
          , e = this.m_localAnchor1.y - c.m_sweep.localCenter.y
          , l = g.col1.x * h + g.col2.x * e
          , e = g.col1.y * h + g.col2.y * e
          , h = l;
        g = n.m_xf.R;
        var m = this.m_localAnchor2.x - n.m_sweep.localCenter.x
          , d = this.m_localAnchor2.y - n.m_sweep.localCenter.y
          , l = g.col1.x * m + g.col2.x * d
          , d = g.col1.y * m + g.col2.y * d
          , m = l
          , l = n.m_sweep.c.x + m - c.m_sweep.c.x - h
          , r = n.m_sweep.c.y + d - c.m_sweep.c.y - e;
        g = Math.sqrt(l * l + r * r);
        l /= g;
        r /= g;
        g -= this.m_length;
        g = q.Clamp(g, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection);
        var z = -this.m_mass * g;
        this.m_u.Set(l, r);
        l = z * this.m_u.x;
        r = z * this.m_u.y;
        c.m_sweep.c.x -= c.m_invMass * l;
        c.m_sweep.c.y -= c.m_invMass * r;
        c.m_sweep.a -= c.m_invI * (h * r - e * l);
        n.m_sweep.c.x += n.m_invMass * l;
        n.m_sweep.c.y += n.m_invMass * r;
        n.m_sweep.a += n.m_invI * (m * r - d * l);
        c.SynchronizeTransform();
        n.SynchronizeTransform();
        return q.Abs(g) < a.b2_linearSlop
    }
    ;
    Box2D.inherit(t, Box2D.Dynamics.Joints.b2JointDef);
    t.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    t.b2DistanceJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new s;
        this.localAnchorB = new s
    }
    ;
    t.prototype.b2DistanceJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_distanceJoint;
        this.length = 1;
        this.dampingRatio = this.frequencyHz = 0
    }
    ;
    t.prototype.Initialize = function(a, c, n, h) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(n));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(h));
        a = h.x - n.x;
        n = h.y - n.y;
        this.length = Math.sqrt(a * a + n * n);
        this.dampingRatio = this.frequencyHz = 0
    }
    ;
    Box2D.inherit(u, Box2D.Dynamics.Joints.b2Joint);
    u.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    u.b2FrictionJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new s;
        this.m_localAnchorB = new s;
        this.m_linearMass = new c;
        this.m_linearImpulse = new s
    }
    ;
    u.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    }
    ;
    u.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    }
    ;
    u.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_linearImpulse.x,a * this.m_linearImpulse.y)
    }
    ;
    u.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_angularImpulse
    }
    ;
    u.prototype.SetMaxForce = function(a) {
        void 0 === a && (a = 0);
        this.m_maxForce = a
    }
    ;
    u.prototype.GetMaxForce = function() {
        return this.m_maxForce
    }
    ;
    u.prototype.SetMaxTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_maxTorque = a
    }
    ;
    u.prototype.GetMaxTorque = function() {
        return this.m_maxTorque
    }
    ;
    u.prototype.b2FrictionJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchorA.SetV(a.localAnchorA);
        this.m_localAnchorB.SetV(a.localAnchorB);
        this.m_linearMass.SetZero();
        this.m_angularMass = 0;
        this.m_linearImpulse.SetZero();
        this.m_angularImpulse = 0;
        this.m_maxForce = a.maxForce;
        this.m_maxTorque = a.maxTorque
    }
    ;
    u.prototype.InitVelocityConstraints = function(a) {
        var p, n = 0, h = this.m_bodyA, e = this.m_bodyB;
        p = h.m_xf.R;
        var q = this.m_localAnchorA.x - h.m_sweep.localCenter.x
          , l = this.m_localAnchorA.y - h.m_sweep.localCenter.y
          , n = p.col1.x * q + p.col2.x * l
          , l = p.col1.y * q + p.col2.y * l
          , q = n;
        p = e.m_xf.R;
        var d = this.m_localAnchorB.x - e.m_sweep.localCenter.x
          , r = this.m_localAnchorB.y - e.m_sweep.localCenter.y
          , n = p.col1.x * d + p.col2.x * r
          , r = p.col1.y * d + p.col2.y * r
          , d = n;
        p = h.m_invMass;
        var n = e.m_invMass
          , m = h.m_invI
          , s = e.m_invI
          , t = new c;
        t.col1.x = p + n;
        t.col2.x = 0;
        t.col1.y = 0;
        t.col2.y = p + n;
        t.col1.x += m * l * l;
        t.col2.x += -m * q * l;
        t.col1.y += -m * q * l;
        t.col2.y += m * q * q;
        t.col1.x += s * r * r;
        t.col2.x += -s * d * r;
        t.col1.y += -s * d * r;
        t.col2.y += s * d * d;
        t.GetInverse(this.m_linearMass);
        this.m_angularMass = m + s;
        0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
        a.warmStarting ? (this.m_linearImpulse.x *= a.dtRatio,
        this.m_linearImpulse.y *= a.dtRatio,
        this.m_angularImpulse *= a.dtRatio,
        a = this.m_linearImpulse,
        h.m_linearVelocity.x -= p * a.x,
        h.m_linearVelocity.y -= p * a.y,
        h.m_angularVelocity -= m * (q * a.y - l * a.x + this.m_angularImpulse),
        e.m_linearVelocity.x += n * a.x,
        e.m_linearVelocity.y += n * a.y,
        e.m_angularVelocity += s * (d * a.y - r * a.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(),
        this.m_angularImpulse = 0)
    }
    ;
    u.prototype.SolveVelocityConstraints = function(a) {
        var c, n = 0, h = this.m_bodyA, e = this.m_bodyB, l = h.m_linearVelocity, m = h.m_angularVelocity, d = e.m_linearVelocity, r = e.m_angularVelocity, z = h.m_invMass, t = e.m_invMass, u = h.m_invI, y = e.m_invI;
        c = h.m_xf.R;
        var w = this.m_localAnchorA.x - h.m_sweep.localCenter.x
          , A = this.m_localAnchorA.y - h.m_sweep.localCenter.y
          , n = c.col1.x * w + c.col2.x * A
          , A = c.col1.y * w + c.col2.y * A
          , w = n;
        c = e.m_xf.R;
        var B = this.m_localAnchorB.x - e.m_sweep.localCenter.x
          , C = this.m_localAnchorB.y - e.m_sweep.localCenter.y
          , n = c.col1.x * B + c.col2.x * C
          , C = c.col1.y * B + c.col2.y * C
          , B = n;
        c = 0;
        var n = -this.m_angularMass * (r - m)
          , F = this.m_angularImpulse;
        c = a.dt * this.m_maxTorque;
        this.m_angularImpulse = q.Clamp(this.m_angularImpulse + n, -c, c);
        n = this.m_angularImpulse - F;
        m -= u * n;
        r += y * n;
        c = q.MulMV(this.m_linearMass, new s(-(d.x - r * C - l.x + m * A),-(d.y + r * B - l.y - m * w)));
        n = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(c);
        c = a.dt * this.m_maxForce;
        this.m_linearImpulse.LengthSquared() > c * c && (this.m_linearImpulse.Normalize(),
        this.m_linearImpulse.Multiply(c));
        c = q.SubtractVV(this.m_linearImpulse, n);
        l.x -= z * c.x;
        l.y -= z * c.y;
        m -= u * (w * c.y - A * c.x);
        d.x += t * c.x;
        d.y += t * c.y;
        r += y * (B * c.y - C * c.x);
        h.m_angularVelocity = m;
        e.m_angularVelocity = r
    }
    ;
    u.prototype.SolvePositionConstraints = function() {
        return !0
    }
    ;
    Box2D.inherit(C, Box2D.Dynamics.Joints.b2JointDef);
    C.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    C.b2FrictionJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new s;
        this.localAnchorB = new s
    }
    ;
    C.prototype.b2FrictionJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_frictionJoint;
        this.maxTorque = this.maxForce = 0
    }
    ;
    C.prototype.Initialize = function(a, c, n) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(n));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(n))
    }
    ;
    Box2D.inherit(F, Box2D.Dynamics.Joints.b2Joint);
    F.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    F.b2GearJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new s;
        this.m_groundAnchor2 = new s;
        this.m_localAnchor1 = new s;
        this.m_localAnchor2 = new s;
        this.m_J = new A
    }
    ;
    F.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }
    ;
    F.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }
    ;
    F.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_impulse * this.m_J.linearB.x,a * this.m_impulse * this.m_J.linearB.y)
    }
    ;
    F.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        var c = this.m_bodyB.m_xf.R
          , n = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x
          , h = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y
          , e = c.col1.x * n + c.col2.x * h
          , h = c.col1.y * n + c.col2.y * h;
        return a * (this.m_impulse * this.m_J.angularB - e * this.m_impulse * this.m_J.linearB.y + h * this.m_impulse * this.m_J.linearB.x)
    }
    ;
    F.prototype.GetRatio = function() {
        return this.m_ratio
    }
    ;
    F.prototype.SetRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_ratio = a
    }
    ;
    F.prototype.b2GearJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        var c = parseInt(a.joint1.m_type)
          , n = parseInt(a.joint2.m_type);
        this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
        var h = 0
          , e = 0;
        this.m_ground1 = a.joint1.GetBodyA();
        this.m_bodyA = a.joint1.GetBodyB();
        c == y.e_revoluteJoint ? (this.m_revolute1 = a.joint1 instanceof K ? a.joint1 : null,
        this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1),
        this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2),
        h = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = a.joint1 instanceof B ? a.joint1 : null,
        this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1),
        this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2),
        h = this.m_prismatic1.GetJointTranslation());
        this.m_ground2 = a.joint2.GetBodyA();
        this.m_bodyB = a.joint2.GetBodyB();
        n == y.e_revoluteJoint ? (this.m_revolute2 = a.joint2 instanceof K ? a.joint2 : null,
        this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1),
        this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2),
        e = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = a.joint2 instanceof B ? a.joint2 : null,
        this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1),
        this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2),
        e = this.m_prismatic2.GetJointTranslation());
        this.m_ratio = a.ratio;
        this.m_constant = h + this.m_ratio * e;
        this.m_impulse = 0
    }
    ;
    F.prototype.InitVelocityConstraints = function(a) {
        var c = this.m_ground1
          , n = this.m_ground2
          , h = this.m_bodyA
          , e = this.m_bodyB
          , q = 0
          , l = 0
          , d = 0
          , r = 0
          , m = d = 0
          , s = 0;
        this.m_J.SetZero();
        this.m_revolute1 ? (this.m_J.angularA = -1,
        s += h.m_invI) : (c = c.m_xf.R,
        l = this.m_prismatic1.m_localXAxis1,
        q = c.col1.x * l.x + c.col2.x * l.y,
        l = c.col1.y * l.x + c.col2.y * l.y,
        c = h.m_xf.R,
        d = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
        r = this.m_localAnchor1.y - h.m_sweep.localCenter.y,
        m = c.col1.x * d + c.col2.x * r,
        r = c.col1.y * d + c.col2.y * r,
        d = m * l - r * q,
        this.m_J.linearA.Set(-q, -l),
        this.m_J.angularA = -d,
        s += h.m_invMass + h.m_invI * d * d);
        this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio,
        s += this.m_ratio * this.m_ratio * e.m_invI) : (c = n.m_xf.R,
        l = this.m_prismatic2.m_localXAxis1,
        q = c.col1.x * l.x + c.col2.x * l.y,
        l = c.col1.y * l.x + c.col2.y * l.y,
        c = e.m_xf.R,
        d = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
        r = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
        m = c.col1.x * d + c.col2.x * r,
        r = c.col1.y * d + c.col2.y * r,
        d = m * l - r * q,
        this.m_J.linearB.Set(-this.m_ratio * q, -this.m_ratio * l),
        this.m_J.angularB = -this.m_ratio * d,
        s += this.m_ratio * this.m_ratio * (e.m_invMass + e.m_invI * d * d));
        this.m_mass = 0 < s ? 1 / s : 0;
        a.warmStarting ? (h.m_linearVelocity.x += h.m_invMass * this.m_impulse * this.m_J.linearA.x,
        h.m_linearVelocity.y += h.m_invMass * this.m_impulse * this.m_J.linearA.y,
        h.m_angularVelocity += h.m_invI * this.m_impulse * this.m_J.angularA,
        e.m_linearVelocity.x += e.m_invMass * this.m_impulse * this.m_J.linearB.x,
        e.m_linearVelocity.y += e.m_invMass * this.m_impulse * this.m_J.linearB.y,
        e.m_angularVelocity += e.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
    }
    ;
    F.prototype.SolveVelocityConstraints = function() {
        var a = this.m_bodyA
          , c = this.m_bodyB
          , n = this.m_J.Compute(a.m_linearVelocity, a.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity)
          , n = -this.m_mass * n;
        this.m_impulse += n;
        a.m_linearVelocity.x += a.m_invMass * n * this.m_J.linearA.x;
        a.m_linearVelocity.y += a.m_invMass * n * this.m_J.linearA.y;
        a.m_angularVelocity += a.m_invI * n * this.m_J.angularA;
        c.m_linearVelocity.x += c.m_invMass * n * this.m_J.linearB.x;
        c.m_linearVelocity.y += c.m_invMass * n * this.m_J.linearB.y;
        c.m_angularVelocity += c.m_invI * n * this.m_J.angularB
    }
    ;
    F.prototype.SolvePositionConstraints = function() {
        var g = this.m_bodyA
          , c = this.m_bodyB
          , n = 0
          , h = 0
          , n = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation()
          , h = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation()
          , n = -this.m_mass * (this.m_constant - (n + this.m_ratio * h));
        g.m_sweep.c.x += g.m_invMass * n * this.m_J.linearA.x;
        g.m_sweep.c.y += g.m_invMass * n * this.m_J.linearA.y;
        g.m_sweep.a += g.m_invI * n * this.m_J.angularA;
        c.m_sweep.c.x += c.m_invMass * n * this.m_J.linearB.x;
        c.m_sweep.c.y += c.m_invMass * n * this.m_J.linearB.y;
        c.m_sweep.a += c.m_invI * n * this.m_J.angularB;
        g.SynchronizeTransform();
        c.SynchronizeTransform();
        return 0 < a.b2_linearSlop
    }
    ;
    Box2D.inherit(H, Box2D.Dynamics.Joints.b2JointDef);
    H.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    H.b2GearJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
    }
    ;
    H.prototype.b2GearJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_gearJoint;
        this.joint2 = this.joint1 = null;
        this.ratio = 1
    }
    ;
    A.b2Jacobian = function() {
        this.linearA = new s;
        this.linearB = new s
    }
    ;
    A.prototype.SetZero = function() {
        this.linearA.SetZero();
        this.angularA = 0;
        this.linearB.SetZero();
        this.angularB = 0
    }
    ;
    A.prototype.Set = function(a, c, n, h) {
        void 0 === c && (c = 0);
        void 0 === h && (h = 0);
        this.linearA.SetV(a);
        this.angularA = c;
        this.linearB.SetV(n);
        this.angularB = h
    }
    ;
    A.prototype.Compute = function(a, c, n, h) {
        void 0 === c && (c = 0);
        void 0 === h && (h = 0);
        return this.linearA.x * a.x + this.linearA.y * a.y + this.angularA * c + (this.linearB.x * n.x + this.linearB.y * n.y) + this.angularB * h
    }
    ;
    y.b2Joint = function() {
        this.m_edgeA = new N;
        this.m_edgeB = new N;
        this.m_localCenterA = new s;
        this.m_localCenterB = new s
    }
    ;
    y.prototype.GetType = function() {
        return this.m_type
    }
    ;
    y.prototype.GetAnchorA = function() {
        return null
    }
    ;
    y.prototype.GetAnchorB = function() {
        return null
    }
    ;
    y.prototype.GetReactionForce = function() {
        return null
    }
    ;
    y.prototype.GetReactionTorque = function() {
        return 0
    }
    ;
    y.prototype.GetBodyA = function() {
        return this.m_bodyA
    }
    ;
    y.prototype.GetBodyB = function() {
        return this.m_bodyB
    }
    ;
    y.prototype.GetNext = function() {
        return this.m_next
    }
    ;
    y.prototype.GetUserData = function() {
        return this.m_userData
    }
    ;
    y.prototype.SetUserData = function(a) {
        this.m_userData = a
    }
    ;
    y.prototype.IsActive = function() {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
    }
    ;
    y.Create = function(a) {
        var c = null;
        switch (a.type) {
        case y.e_distanceJoint:
            c = new w(a instanceof t ? a : null);
            break;
        case y.e_mouseJoint:
            c = new J(a instanceof L ? a : null);
            break;
        case y.e_prismaticJoint:
            c = new B(a instanceof O ? a : null);
            break;
        case y.e_revoluteJoint:
            c = new K(a instanceof M ? a : null);
            break;
        case y.e_pulleyJoint:
            c = new I(a instanceof R ? a : null);
            break;
        case y.e_gearJoint:
            c = new F(a instanceof H ? a : null);
            break;
        case y.e_lineJoint:
            c = new l(a instanceof P ? a : null);
            break;
        case y.e_weldJoint:
            c = new S(a instanceof Q ? a : null);
            break;
        case y.e_frictionJoint:
            c = new u(a instanceof C ? a : null)
        }
        return c
    }
    ;
    y.Destroy = function() {}
    ;
    y.prototype.b2Joint = function(g) {
        a.b2Assert(g.bodyA != g.bodyB);
        this.m_type = g.type;
        this.m_next = this.m_prev = null;
        this.m_bodyA = g.bodyA;
        this.m_bodyB = g.bodyB;
        this.m_collideConnected = g.collideConnected;
        this.m_islandFlag = !1;
        this.m_userData = g.userData
    }
    ;
    y.prototype.InitVelocityConstraints = function() {}
    ;
    y.prototype.SolveVelocityConstraints = function() {}
    ;
    y.prototype.FinalizeVelocityConstraints = function() {}
    ;
    y.prototype.SolvePositionConstraints = function() {
        return !1
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
        Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
        Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
        Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
        Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
        Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
        Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
        Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
        Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
        Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
        Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
        Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
        Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
        Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
    });
    T.b2JointDef = function() {}
    ;
    T.prototype.b2JointDef = function() {
        this.type = y.e_unknownJoint;
        this.bodyB = this.bodyA = this.userData = null;
        this.collideConnected = !1
    }
    ;
    N.b2JointEdge = function() {}
    ;
    Box2D.inherit(l, Box2D.Dynamics.Joints.b2Joint);
    l.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    l.b2LineJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new s;
        this.m_localAnchor2 = new s;
        this.m_localXAxis1 = new s;
        this.m_localYAxis1 = new s;
        this.m_axis = new s;
        this.m_perp = new s;
        this.m_K = new c;
        this.m_impulse = new s
    }
    ;
    l.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }
    ;
    l.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }
    ;
    l.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
    }
    ;
    l.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.y
    }
    ;
    l.prototype.GetJointTranslation = function() {
        var a = this.m_bodyA
          , c = this.m_bodyB
          , n = a.GetWorldPoint(this.m_localAnchor1)
          , h = c.GetWorldPoint(this.m_localAnchor2)
          , c = h.x - n.x
          , n = h.y - n.y
          , a = a.GetWorldVector(this.m_localXAxis1);
        return a.x * c + a.y * n
    }
    ;
    l.prototype.GetJointSpeed = function() {
        var a = this.m_bodyA, c = this.m_bodyB, n;
        n = a.m_xf.R;
        var h = this.m_localAnchor1.x - a.m_sweep.localCenter.x
          , e = this.m_localAnchor1.y - a.m_sweep.localCenter.y
          , l = n.col1.x * h + n.col2.x * e
          , e = n.col1.y * h + n.col2.y * e
          , h = l;
        n = c.m_xf.R;
        var q = this.m_localAnchor2.x - c.m_sweep.localCenter.x
          , d = this.m_localAnchor2.y - c.m_sweep.localCenter.y
          , l = n.col1.x * q + n.col2.x * d
          , d = n.col1.y * q + n.col2.y * d
          , q = l;
        n = c.m_sweep.c.x + q - (a.m_sweep.c.x + h);
        var l = c.m_sweep.c.y + d - (a.m_sweep.c.y + e)
          , r = a.GetWorldVector(this.m_localXAxis1)
          , m = a.m_linearVelocity
          , s = c.m_linearVelocity
          , a = a.m_angularVelocity
          , c = c.m_angularVelocity;
        return n * -a * r.y + l * a * r.x + (r.x * (s.x + -c * d - m.x - -a * e) + r.y * (s.y + c * q - m.y - a * h))
    }
    ;
    l.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    }
    ;
    l.prototype.EnableLimit = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = a
    }
    ;
    l.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    }
    ;
    l.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    }
    ;
    l.prototype.SetLimits = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = a;
        this.m_upperTranslation = c
    }
    ;
    l.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    }
    ;
    l.prototype.EnableMotor = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = a
    }
    ;
    l.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    }
    ;
    l.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    }
    ;
    l.prototype.SetMaxMotorForce = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = a
    }
    ;
    l.prototype.GetMaxMotorForce = function() {
        return this.m_maxMotorForce
    }
    ;
    l.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    }
    ;
    l.prototype.b2LineJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_localXAxis1.SetV(a.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = a.lowerTranslation;
        this.m_upperTranslation = a.upperTranslation;
        this.m_maxMotorForce = a.maxMotorForce;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = y.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    }
    ;
    l.prototype.InitVelocityConstraints = function(g) {
        var c = this.m_bodyA, n = this.m_bodyB, h, e = 0;
        this.m_localCenterA.SetV(c.GetLocalCenter());
        this.m_localCenterB.SetV(n.GetLocalCenter());
        var l = c.GetTransform();
        n.GetTransform();
        h = c.m_xf.R;
        var m = this.m_localAnchor1.x - this.m_localCenterA.x
          , d = this.m_localAnchor1.y - this.m_localCenterA.y
          , e = h.col1.x * m + h.col2.x * d
          , d = h.col1.y * m + h.col2.y * d
          , m = e;
        h = n.m_xf.R;
        var r = this.m_localAnchor2.x - this.m_localCenterB.x
          , s = this.m_localAnchor2.y - this.m_localCenterB.y
          , e = h.col1.x * r + h.col2.x * s
          , s = h.col1.y * r + h.col2.y * s
          , r = e;
        h = n.m_sweep.c.x + r - c.m_sweep.c.x - m;
        e = n.m_sweep.c.y + s - c.m_sweep.c.y - d;
        this.m_invMassA = c.m_invMass;
        this.m_invMassB = n.m_invMass;
        this.m_invIA = c.m_invI;
        this.m_invIB = n.m_invI;
        this.m_axis.SetV(q.MulMV(l.R, this.m_localXAxis1));
        this.m_a1 = (h + m) * this.m_axis.y - (e + d) * this.m_axis.x;
        this.m_a2 = r * this.m_axis.y - s * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
        this.m_perp.SetV(q.MulMV(l.R, this.m_localYAxis1));
        this.m_s1 = (h + m) * this.m_perp.y - (e + d) * this.m_perp.x;
        this.m_s2 = r * this.m_perp.y - s * this.m_perp.x;
        l = this.m_invMassA;
        m = this.m_invMassB;
        d = this.m_invIA;
        r = this.m_invIB;
        this.m_K.col1.x = l + m + d * this.m_s1 * this.m_s1 + r * this.m_s2 * this.m_s2;
        this.m_K.col1.y = d * this.m_s1 * this.m_a1 + r * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = l + m + d * this.m_a1 * this.m_a1 + r * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (h = this.m_axis.x * h + this.m_axis.y * e,
        q.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? this.m_limitState = y.e_equalLimits : h <= this.m_lowerTranslation ? this.m_limitState != y.e_atLowerLimit && (this.m_limitState = y.e_atLowerLimit,
        this.m_impulse.y = 0) : h >= this.m_upperTranslation ? this.m_limitState != y.e_atUpperLimit && (this.m_limitState = y.e_atUpperLimit,
        this.m_impulse.y = 0) : (this.m_limitState = y.e_inactiveLimit,
        this.m_impulse.y = 0)) : this.m_limitState = y.e_inactiveLimit;
        !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
        g.warmStarting ? (this.m_impulse.x *= g.dtRatio,
        this.m_impulse.y *= g.dtRatio,
        this.m_motorImpulse *= g.dtRatio,
        g = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x,
        h = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y,
        e = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1,
        l = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2,
        c.m_linearVelocity.x -= this.m_invMassA * g,
        c.m_linearVelocity.y -= this.m_invMassA * h,
        c.m_angularVelocity -= this.m_invIA * e,
        n.m_linearVelocity.x += this.m_invMassB * g,
        n.m_linearVelocity.y += this.m_invMassB * h,
        n.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(),
        this.m_motorImpulse = 0)
    }
    ;
    l.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyA
          , n = this.m_bodyB
          , h = c.m_linearVelocity
          , e = c.m_angularVelocity
          , l = n.m_linearVelocity
          , m = n.m_angularVelocity
          , d = 0
          , r = 0
          , z = 0
          , t = 0;
        this.m_enableMotor && this.m_limitState != y.e_equalLimits && (t = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (l.x - h.x) + this.m_axis.y * (l.y - h.y) + this.m_a2 * m - this.m_a1 * e)),
        d = this.m_motorImpulse,
        r = a.dt * this.m_maxMotorForce,
        this.m_motorImpulse = q.Clamp(this.m_motorImpulse + t, -r, r),
        t = this.m_motorImpulse - d,
        d = t * this.m_axis.x,
        r = t * this.m_axis.y,
        z = t * this.m_a1,
        t *= this.m_a2,
        h.x -= this.m_invMassA * d,
        h.y -= this.m_invMassA * r,
        e -= this.m_invIA * z,
        l.x += this.m_invMassB * d,
        l.y += this.m_invMassB * r,
        m += this.m_invIB * t);
        r = this.m_perp.x * (l.x - h.x) + this.m_perp.y * (l.y - h.y) + this.m_s2 * m - this.m_s1 * e;
        this.m_enableLimit && this.m_limitState != y.e_inactiveLimit ? (z = this.m_axis.x * (l.x - h.x) + this.m_axis.y * (l.y - h.y) + this.m_a2 * m - this.m_a1 * e,
        d = this.m_impulse.Copy(),
        a = this.m_K.Solve(new s, -r, -z),
        this.m_impulse.Add(a),
        this.m_limitState == y.e_atLowerLimit ? this.m_impulse.y = q.Max(this.m_impulse.y, 0) : this.m_limitState == y.e_atUpperLimit && (this.m_impulse.y = q.Min(this.m_impulse.y, 0)),
        r = -r - (this.m_impulse.y - d.y) * this.m_K.col2.x,
        z = 0,
        z = 0 != this.m_K.col1.x ? r / this.m_K.col1.x + d.x : d.x,
        this.m_impulse.x = z,
        a.x = this.m_impulse.x - d.x,
        a.y = this.m_impulse.y - d.y,
        d = a.x * this.m_perp.x + a.y * this.m_axis.x,
        r = a.x * this.m_perp.y + a.y * this.m_axis.y,
        z = a.x * this.m_s1 + a.y * this.m_a1,
        t = a.x * this.m_s2 + a.y * this.m_a2) : (a = 0,
        a = 0 != this.m_K.col1.x ? -r / this.m_K.col1.x : 0,
        this.m_impulse.x += a,
        d = a * this.m_perp.x,
        r = a * this.m_perp.y,
        z = a * this.m_s1,
        t = a * this.m_s2);
        h.x -= this.m_invMassA * d;
        h.y -= this.m_invMassA * r;
        e -= this.m_invIA * z;
        l.x += this.m_invMassB * d;
        l.y += this.m_invMassB * r;
        m += this.m_invIB * t;
        c.m_linearVelocity.SetV(h);
        c.m_angularVelocity = e;
        n.m_linearVelocity.SetV(l);
        n.m_angularVelocity = m
    }
    ;
    l.prototype.SolvePositionConstraints = function() {
        var g = this.m_bodyA, p = this.m_bodyB, n = g.m_sweep.c, h = g.m_sweep.a, e = p.m_sweep.c, l = p.m_sweep.a, m, d = 0, r = 0, t = 0, u = 0, w = m = 0, y = 0, r = !1, A = 0, B = c.FromAngle(h), t = c.FromAngle(l);
        m = B;
        var y = this.m_localAnchor1.x - this.m_localCenterA.x
          , C = this.m_localAnchor1.y - this.m_localCenterA.y
          , d = m.col1.x * y + m.col2.x * C
          , C = m.col1.y * y + m.col2.y * C
          , y = d;
        m = t;
        t = this.m_localAnchor2.x - this.m_localCenterB.x;
        u = this.m_localAnchor2.y - this.m_localCenterB.y;
        d = m.col1.x * t + m.col2.x * u;
        u = m.col1.y * t + m.col2.y * u;
        t = d;
        m = e.x + t - n.x - y;
        d = e.y + u - n.y - C;
        if (this.m_enableLimit) {
            this.m_axis = q.MulMV(B, this.m_localXAxis1);
            this.m_a1 = (m + y) * this.m_axis.y - (d + C) * this.m_axis.x;
            this.m_a2 = t * this.m_axis.y - u * this.m_axis.x;
            var F = this.m_axis.x * m + this.m_axis.y * d;
            q.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? (A = q.Clamp(F, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection),
            w = q.Abs(F),
            r = !0) : F <= this.m_lowerTranslation ? (A = q.Clamp(F - this.m_lowerTranslation + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0),
            w = this.m_lowerTranslation - F,
            r = !0) : F >= this.m_upperTranslation && (A = q.Clamp(F - this.m_upperTranslation + a.b2_linearSlop, 0, a.b2_maxLinearCorrection),
            w = F - this.m_upperTranslation,
            r = !0)
        }
        this.m_perp = q.MulMV(B, this.m_localYAxis1);
        this.m_s1 = (m + y) * this.m_perp.y - (d + C) * this.m_perp.x;
        this.m_s2 = t * this.m_perp.y - u * this.m_perp.x;
        B = new s;
        C = this.m_perp.x * m + this.m_perp.y * d;
        w = q.Max(w, q.Abs(C));
        y = 0;
        r ? (r = this.m_invMassA,
        t = this.m_invMassB,
        u = this.m_invIA,
        m = this.m_invIB,
        this.m_K.col1.x = r + t + u * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2,
        this.m_K.col1.y = u * this.m_s1 * this.m_a1 + m * this.m_s2 * this.m_a2,
        this.m_K.col2.x = this.m_K.col1.y,
        this.m_K.col2.y = r + t + u * this.m_a1 * this.m_a1 + m * this.m_a2 * this.m_a2,
        this.m_K.Solve(B, -C, -A)) : (r = this.m_invMassA,
        t = this.m_invMassB,
        u = this.m_invIA,
        m = this.m_invIB,
        A = r + t + u * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2,
        B.x = 0 != A ? -C / A : 0,
        B.y = 0);
        A = B.x * this.m_perp.x + B.y * this.m_axis.x;
        r = B.x * this.m_perp.y + B.y * this.m_axis.y;
        C = B.x * this.m_s1 + B.y * this.m_a1;
        B = B.x * this.m_s2 + B.y * this.m_a2;
        n.x -= this.m_invMassA * A;
        n.y -= this.m_invMassA * r;
        h -= this.m_invIA * C;
        e.x += this.m_invMassB * A;
        e.y += this.m_invMassB * r;
        l += this.m_invIB * B;
        g.m_sweep.a = h;
        p.m_sweep.a = l;
        g.SynchronizeTransform();
        p.SynchronizeTransform();
        return w <= a.b2_linearSlop && y <= a.b2_angularSlop
    }
    ;
    Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
    P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    P.b2LineJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new s;
        this.localAnchorB = new s;
        this.localAxisA = new s
    }
    ;
    P.prototype.b2LineJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_lineJoint;
        this.localAxisA.Set(1, 0);
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    }
    ;
    P.prototype.Initialize = function(a, c, n, h) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(n);
        this.localAnchorB = this.bodyB.GetLocalPoint(n);
        this.localAxisA = this.bodyA.GetLocalVector(h)
    }
    ;
    Box2D.inherit(J, Box2D.Dynamics.Joints.b2Joint);
    J.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    J.b2MouseJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.m_localAnchor = new s;
        this.m_target = new s;
        this.m_impulse = new s;
        this.m_mass = new c;
        this.m_C = new s
    }
    ;
    J.prototype.GetAnchorA = function() {
        return this.m_target
    }
    ;
    J.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
    }
    ;
    J.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_impulse.x,a * this.m_impulse.y)
    }
    ;
    J.prototype.GetReactionTorque = function() {
        return 0
    }
    ;
    J.prototype.GetTarget = function() {
        return this.m_target
    }
    ;
    J.prototype.SetTarget = function(a) {
        !1 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
        this.m_target = a
    }
    ;
    J.prototype.GetMaxForce = function() {
        return this.m_maxForce
    }
    ;
    J.prototype.SetMaxForce = function(a) {
        void 0 === a && (a = 0);
        this.m_maxForce = a
    }
    ;
    J.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    }
    ;
    J.prototype.SetFrequency = function(a) {
        void 0 === a && (a = 0);
        this.m_frequencyHz = a
    }
    ;
    J.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    }
    ;
    J.prototype.SetDampingRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_dampingRatio = a
    }
    ;
    J.prototype.b2MouseJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_target.SetV(a.target);
        var c = this.m_target.x - this.m_bodyB.m_xf.position.x
          , n = this.m_target.y - this.m_bodyB.m_xf.position.y
          , h = this.m_bodyB.m_xf.R;
        this.m_localAnchor.x = c * h.col1.x + n * h.col1.y;
        this.m_localAnchor.y = c * h.col2.x + n * h.col2.y;
        this.m_maxForce = a.maxForce;
        this.m_impulse.SetZero();
        this.m_frequencyHz = a.frequencyHz;
        this.m_dampingRatio = a.dampingRatio;
        this.m_gamma = this.m_beta = 0
    }
    ;
    J.prototype.InitVelocityConstraints = function(a) {
        var c = this.m_bodyB
          , n = c.GetMass()
          , h = 2 * Math.PI * this.m_frequencyHz
          , e = n * h * h;
        this.m_gamma = a.dt * (2 * n * this.m_dampingRatio * h + a.dt * e);
        this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
        this.m_beta = a.dt * e * this.m_gamma;
        var e = c.m_xf.R
          , n = this.m_localAnchor.x - c.m_sweep.localCenter.x
          , h = this.m_localAnchor.y - c.m_sweep.localCenter.y
          , l = e.col1.x * n + e.col2.x * h
          , h = e.col1.y * n + e.col2.y * h
          , n = l
          , e = c.m_invMass
          , l = c.m_invI;
        this.K1.col1.x = e;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = e;
        this.K2.col1.x = l * h * h;
        this.K2.col2.x = -l * n * h;
        this.K2.col1.y = -l * n * h;
        this.K2.col2.y = l * n * n;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.col1.x += this.m_gamma;
        this.K.col2.y += this.m_gamma;
        this.K.GetInverse(this.m_mass);
        this.m_C.x = c.m_sweep.c.x + n - this.m_target.x;
        this.m_C.y = c.m_sweep.c.y + h - this.m_target.y;
        c.m_angularVelocity *= 0.98;
        this.m_impulse.x *= a.dtRatio;
        this.m_impulse.y *= a.dtRatio;
        c.m_linearVelocity.x += e * this.m_impulse.x;
        c.m_linearVelocity.y += e * this.m_impulse.y;
        c.m_angularVelocity += l * (n * this.m_impulse.y - h * this.m_impulse.x)
    }
    ;
    J.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyB, e, h = 0, l = 0;
        e = c.m_xf.R;
        var q = this.m_localAnchor.x - c.m_sweep.localCenter.x
          , m = this.m_localAnchor.y - c.m_sweep.localCenter.y
          , h = e.col1.x * q + e.col2.x * m
          , m = e.col1.y * q + e.col2.y * m
          , q = h
          , h = c.m_linearVelocity.x + -c.m_angularVelocity * m
          , d = c.m_linearVelocity.y + c.m_angularVelocity * q;
        e = this.m_mass;
        h = h + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
        l = d + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
        d = -(e.col1.x * h + e.col2.x * l);
        l = -(e.col1.y * h + e.col2.y * l);
        e = this.m_impulse.x;
        h = this.m_impulse.y;
        this.m_impulse.x += d;
        this.m_impulse.y += l;
        a = a.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > a * a && this.m_impulse.Multiply(a / this.m_impulse.Length());
        d = this.m_impulse.x - e;
        l = this.m_impulse.y - h;
        c.m_linearVelocity.x += c.m_invMass * d;
        c.m_linearVelocity.y += c.m_invMass * l;
        c.m_angularVelocity += c.m_invI * (q * l - m * d)
    }
    ;
    J.prototype.SolvePositionConstraints = function() {
        return !0
    }
    ;
    Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
    L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    L.b2MouseJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.target = new s
    }
    ;
    L.prototype.b2MouseJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_mouseJoint;
        this.maxForce = 0;
        this.frequencyHz = 5;
        this.dampingRatio = 0.7
    }
    ;
    Box2D.inherit(B, Box2D.Dynamics.Joints.b2Joint);
    B.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    B.b2PrismaticJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new s;
        this.m_localAnchor2 = new s;
        this.m_localXAxis1 = new s;
        this.m_localYAxis1 = new s;
        this.m_axis = new s;
        this.m_perp = new s;
        this.m_K = new m;
        this.m_impulse = new e
    }
    ;
    B.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }
    ;
    B.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }
    ;
    B.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
    }
    ;
    B.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.y
    }
    ;
    B.prototype.GetJointTranslation = function() {
        var a = this.m_bodyA
          , c = this.m_bodyB
          , e = a.GetWorldPoint(this.m_localAnchor1)
          , h = c.GetWorldPoint(this.m_localAnchor2)
          , c = h.x - e.x
          , e = h.y - e.y
          , a = a.GetWorldVector(this.m_localXAxis1);
        return a.x * c + a.y * e
    }
    ;
    B.prototype.GetJointSpeed = function() {
        var a = this.m_bodyA, c = this.m_bodyB, e;
        e = a.m_xf.R;
        var h = this.m_localAnchor1.x - a.m_sweep.localCenter.x
          , l = this.m_localAnchor1.y - a.m_sweep.localCenter.y
          , q = e.col1.x * h + e.col2.x * l
          , l = e.col1.y * h + e.col2.y * l
          , h = q;
        e = c.m_xf.R;
        var m = this.m_localAnchor2.x - c.m_sweep.localCenter.x
          , d = this.m_localAnchor2.y - c.m_sweep.localCenter.y
          , q = e.col1.x * m + e.col2.x * d
          , d = e.col1.y * m + e.col2.y * d
          , m = q;
        e = c.m_sweep.c.x + m - (a.m_sweep.c.x + h);
        var q = c.m_sweep.c.y + d - (a.m_sweep.c.y + l)
          , r = a.GetWorldVector(this.m_localXAxis1)
          , s = a.m_linearVelocity
          , t = c.m_linearVelocity
          , a = a.m_angularVelocity
          , c = c.m_angularVelocity;
        return e * -a * r.y + q * a * r.x + (r.x * (t.x + -c * d - s.x - -a * l) + r.y * (t.y + c * m - s.y - a * h))
    }
    ;
    B.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    }
    ;
    B.prototype.EnableLimit = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = a
    }
    ;
    B.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    }
    ;
    B.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    }
    ;
    B.prototype.SetLimits = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = a;
        this.m_upperTranslation = c
    }
    ;
    B.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    }
    ;
    B.prototype.EnableMotor = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = a
    }
    ;
    B.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    }
    ;
    B.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    }
    ;
    B.prototype.SetMaxMotorForce = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = a
    }
    ;
    B.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    }
    ;
    B.prototype.b2PrismaticJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_localXAxis1.SetV(a.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_refAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = a.lowerTranslation;
        this.m_upperTranslation = a.upperTranslation;
        this.m_maxMotorForce = a.maxMotorForce;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = y.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    }
    ;
    B.prototype.InitVelocityConstraints = function(c) {
        var e = this.m_bodyA, n = this.m_bodyB, h, l = 0;
        this.m_localCenterA.SetV(e.GetLocalCenter());
        this.m_localCenterB.SetV(n.GetLocalCenter());
        var m = e.GetTransform();
        n.GetTransform();
        h = e.m_xf.R;
        var s = this.m_localAnchor1.x - this.m_localCenterA.x
          , d = this.m_localAnchor1.y - this.m_localCenterA.y
          , l = h.col1.x * s + h.col2.x * d
          , d = h.col1.y * s + h.col2.y * d
          , s = l;
        h = n.m_xf.R;
        var r = this.m_localAnchor2.x - this.m_localCenterB.x
          , t = this.m_localAnchor2.y - this.m_localCenterB.y
          , l = h.col1.x * r + h.col2.x * t
          , t = h.col1.y * r + h.col2.y * t
          , r = l;
        h = n.m_sweep.c.x + r - e.m_sweep.c.x - s;
        l = n.m_sweep.c.y + t - e.m_sweep.c.y - d;
        this.m_invMassA = e.m_invMass;
        this.m_invMassB = n.m_invMass;
        this.m_invIA = e.m_invI;
        this.m_invIB = n.m_invI;
        this.m_axis.SetV(q.MulMV(m.R, this.m_localXAxis1));
        this.m_a1 = (h + s) * this.m_axis.y - (l + d) * this.m_axis.x;
        this.m_a2 = r * this.m_axis.y - t * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
        this.m_perp.SetV(q.MulMV(m.R, this.m_localYAxis1));
        this.m_s1 = (h + s) * this.m_perp.y - (l + d) * this.m_perp.x;
        this.m_s2 = r * this.m_perp.y - t * this.m_perp.x;
        m = this.m_invMassA;
        s = this.m_invMassB;
        d = this.m_invIA;
        r = this.m_invIB;
        this.m_K.col1.x = m + s + d * this.m_s1 * this.m_s1 + r * this.m_s2 * this.m_s2;
        this.m_K.col1.y = d * this.m_s1 + r * this.m_s2;
        this.m_K.col1.z = d * this.m_s1 * this.m_a1 + r * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = d + r;
        this.m_K.col2.z = d * this.m_a1 + r * this.m_a2;
        this.m_K.col3.x = this.m_K.col1.z;
        this.m_K.col3.y = this.m_K.col2.z;
        this.m_K.col3.z = m + s + d * this.m_a1 * this.m_a1 + r * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (h = this.m_axis.x * h + this.m_axis.y * l,
        q.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? this.m_limitState = y.e_equalLimits : h <= this.m_lowerTranslation ? this.m_limitState != y.e_atLowerLimit && (this.m_limitState = y.e_atLowerLimit,
        this.m_impulse.z = 0) : h >= this.m_upperTranslation ? this.m_limitState != y.e_atUpperLimit && (this.m_limitState = y.e_atUpperLimit,
        this.m_impulse.z = 0) : (this.m_limitState = y.e_inactiveLimit,
        this.m_impulse.z = 0)) : this.m_limitState = y.e_inactiveLimit;
        !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio,
        this.m_impulse.y *= c.dtRatio,
        this.m_motorImpulse *= c.dtRatio,
        c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x,
        h = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y,
        l = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1,
        m = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2,
        e.m_linearVelocity.x -= this.m_invMassA * c,
        e.m_linearVelocity.y -= this.m_invMassA * h,
        e.m_angularVelocity -= this.m_invIA * l,
        n.m_linearVelocity.x += this.m_invMassB * c,
        n.m_linearVelocity.y += this.m_invMassB * h,
        n.m_angularVelocity += this.m_invIB * m) : (this.m_impulse.SetZero(),
        this.m_motorImpulse = 0)
    }
    ;
    B.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyA
          , n = this.m_bodyB
          , h = c.m_linearVelocity
          , l = c.m_angularVelocity
          , m = n.m_linearVelocity
          , t = n.m_angularVelocity
          , d = 0
          , r = 0
          , z = 0
          , u = 0;
        this.m_enableMotor && this.m_limitState != y.e_equalLimits && (u = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (m.x - h.x) + this.m_axis.y * (m.y - h.y) + this.m_a2 * t - this.m_a1 * l)),
        d = this.m_motorImpulse,
        a = a.dt * this.m_maxMotorForce,
        this.m_motorImpulse = q.Clamp(this.m_motorImpulse + u, -a, a),
        u = this.m_motorImpulse - d,
        d = u * this.m_axis.x,
        r = u * this.m_axis.y,
        z = u * this.m_a1,
        u *= this.m_a2,
        h.x -= this.m_invMassA * d,
        h.y -= this.m_invMassA * r,
        l -= this.m_invIA * z,
        m.x += this.m_invMassB * d,
        m.y += this.m_invMassB * r,
        t += this.m_invIB * u);
        z = this.m_perp.x * (m.x - h.x) + this.m_perp.y * (m.y - h.y) + this.m_s2 * t - this.m_s1 * l;
        r = t - l;
        this.m_enableLimit && this.m_limitState != y.e_inactiveLimit ? (a = this.m_axis.x * (m.x - h.x) + this.m_axis.y * (m.y - h.y) + this.m_a2 * t - this.m_a1 * l,
        d = this.m_impulse.Copy(),
        a = this.m_K.Solve33(new e, -z, -r, -a),
        this.m_impulse.Add(a),
        this.m_limitState == y.e_atLowerLimit ? this.m_impulse.z = q.Max(this.m_impulse.z, 0) : this.m_limitState == y.e_atUpperLimit && (this.m_impulse.z = q.Min(this.m_impulse.z, 0)),
        z = -z - (this.m_impulse.z - d.z) * this.m_K.col3.x,
        r = -r - (this.m_impulse.z - d.z) * this.m_K.col3.y,
        r = this.m_K.Solve22(new s, z, r),
        r.x += d.x,
        r.y += d.y,
        this.m_impulse.x = r.x,
        this.m_impulse.y = r.y,
        a.x = this.m_impulse.x - d.x,
        a.y = this.m_impulse.y - d.y,
        a.z = this.m_impulse.z - d.z,
        d = a.x * this.m_perp.x + a.z * this.m_axis.x,
        r = a.x * this.m_perp.y + a.z * this.m_axis.y,
        z = a.x * this.m_s1 + a.y + a.z * this.m_a1,
        u = a.x * this.m_s2 + a.y + a.z * this.m_a2) : (a = this.m_K.Solve22(new s, -z, -r),
        this.m_impulse.x += a.x,
        this.m_impulse.y += a.y,
        d = a.x * this.m_perp.x,
        r = a.x * this.m_perp.y,
        z = a.x * this.m_s1 + a.y,
        u = a.x * this.m_s2 + a.y);
        h.x -= this.m_invMassA * d;
        h.y -= this.m_invMassA * r;
        l -= this.m_invIA * z;
        m.x += this.m_invMassB * d;
        m.y += this.m_invMassB * r;
        t += this.m_invIB * u;
        c.m_linearVelocity.SetV(h);
        c.m_angularVelocity = l;
        n.m_linearVelocity.SetV(m);
        n.m_angularVelocity = t
    }
    ;
    B.prototype.SolvePositionConstraints = function() {
        var g = this.m_bodyA, p = this.m_bodyB, n = g.m_sweep.c, h = g.m_sweep.a, l = p.m_sweep.c, m = p.m_sweep.a, t, d = 0, r = 0, z = 0, u = d = t = 0, y = 0, r = !1, w = 0, A = c.FromAngle(h), B = c.FromAngle(m);
        t = A;
        var y = this.m_localAnchor1.x - this.m_localCenterA.x
          , C = this.m_localAnchor1.y - this.m_localCenterA.y
          , d = t.col1.x * y + t.col2.x * C
          , C = t.col1.y * y + t.col2.y * C
          , y = d;
        t = B;
        B = this.m_localAnchor2.x - this.m_localCenterB.x;
        z = this.m_localAnchor2.y - this.m_localCenterB.y;
        d = t.col1.x * B + t.col2.x * z;
        z = t.col1.y * B + t.col2.y * z;
        B = d;
        t = l.x + B - n.x - y;
        d = l.y + z - n.y - C;
        if (this.m_enableLimit) {
            this.m_axis = q.MulMV(A, this.m_localXAxis1);
            this.m_a1 = (t + y) * this.m_axis.y - (d + C) * this.m_axis.x;
            this.m_a2 = B * this.m_axis.y - z * this.m_axis.x;
            var F = this.m_axis.x * t + this.m_axis.y * d;
            q.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? (w = q.Clamp(F, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection),
            u = q.Abs(F),
            r = !0) : F <= this.m_lowerTranslation ? (w = q.Clamp(F - this.m_lowerTranslation + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0),
            u = this.m_lowerTranslation - F,
            r = !0) : F >= this.m_upperTranslation && (w = q.Clamp(F - this.m_upperTranslation + a.b2_linearSlop, 0, a.b2_maxLinearCorrection),
            u = F - this.m_upperTranslation,
            r = !0)
        }
        this.m_perp = q.MulMV(A, this.m_localYAxis1);
        this.m_s1 = (t + y) * this.m_perp.y - (d + C) * this.m_perp.x;
        this.m_s2 = B * this.m_perp.y - z * this.m_perp.x;
        A = new e;
        C = this.m_perp.x * t + this.m_perp.y * d;
        B = m - h - this.m_refAngle;
        u = q.Max(u, q.Abs(C));
        y = q.Abs(B);
        r ? (r = this.m_invMassA,
        z = this.m_invMassB,
        t = this.m_invIA,
        d = this.m_invIB,
        this.m_K.col1.x = r + z + t * this.m_s1 * this.m_s1 + d * this.m_s2 * this.m_s2,
        this.m_K.col1.y = t * this.m_s1 + d * this.m_s2,
        this.m_K.col1.z = t * this.m_s1 * this.m_a1 + d * this.m_s2 * this.m_a2,
        this.m_K.col2.x = this.m_K.col1.y,
        this.m_K.col2.y = t + d,
        this.m_K.col2.z = t * this.m_a1 + d * this.m_a2,
        this.m_K.col3.x = this.m_K.col1.z,
        this.m_K.col3.y = this.m_K.col2.z,
        this.m_K.col3.z = r + z + t * this.m_a1 * this.m_a1 + d * this.m_a2 * this.m_a2,
        this.m_K.Solve33(A, -C, -B, -w)) : (r = this.m_invMassA,
        z = this.m_invMassB,
        t = this.m_invIA,
        d = this.m_invIB,
        w = t * this.m_s1 + d * this.m_s2,
        F = t + d,
        this.m_K.col1.Set(r + z + t * this.m_s1 * this.m_s1 + d * this.m_s2 * this.m_s2, w, 0),
        this.m_K.col2.Set(w, F, 0),
        w = this.m_K.Solve22(new s, -C, -B),
        A.x = w.x,
        A.y = w.y,
        A.z = 0);
        w = A.x * this.m_perp.x + A.z * this.m_axis.x;
        r = A.x * this.m_perp.y + A.z * this.m_axis.y;
        C = A.x * this.m_s1 + A.y + A.z * this.m_a1;
        A = A.x * this.m_s2 + A.y + A.z * this.m_a2;
        n.x -= this.m_invMassA * w;
        n.y -= this.m_invMassA * r;
        h -= this.m_invIA * C;
        l.x += this.m_invMassB * w;
        l.y += this.m_invMassB * r;
        m += this.m_invIB * A;
        g.m_sweep.a = h;
        p.m_sweep.a = m;
        g.SynchronizeTransform();
        p.SynchronizeTransform();
        return u <= a.b2_linearSlop && y <= a.b2_angularSlop
    }
    ;
    Box2D.inherit(O, Box2D.Dynamics.Joints.b2JointDef);
    O.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    O.b2PrismaticJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new s;
        this.localAnchorB = new s;
        this.localAxisA = new s
    }
    ;
    O.prototype.b2PrismaticJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_prismaticJoint;
        this.localAxisA.Set(1, 0);
        this.referenceAngle = 0;
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    }
    ;
    O.prototype.Initialize = function(a, c, e, h) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(e);
        this.localAnchorB = this.bodyB.GetLocalPoint(e);
        this.localAxisA = this.bodyA.GetLocalVector(h);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
    ;
    Box2D.inherit(I, Box2D.Dynamics.Joints.b2Joint);
    I.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    I.b2PulleyJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new s;
        this.m_groundAnchor2 = new s;
        this.m_localAnchor1 = new s;
        this.m_localAnchor2 = new s;
        this.m_u1 = new s;
        this.m_u2 = new s
    }
    ;
    I.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }
    ;
    I.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }
    ;
    I.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_impulse * this.m_u2.x,a * this.m_impulse * this.m_u2.y)
    }
    ;
    I.prototype.GetReactionTorque = function() {
        return 0
    }
    ;
    I.prototype.GetGroundAnchorA = function() {
        var a = this.m_ground.m_xf.position.Copy();
        a.Add(this.m_groundAnchor1);
        return a
    }
    ;
    I.prototype.GetGroundAnchorB = function() {
        var a = this.m_ground.m_xf.position.Copy();
        a.Add(this.m_groundAnchor2);
        return a
    }
    ;
    I.prototype.GetLength1 = function() {
        var a = this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
          , c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x)
          , a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
        return Math.sqrt(c * c + a * a)
    }
    ;
    I.prototype.GetLength2 = function() {
        var a = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
          , c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x)
          , a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
        return Math.sqrt(c * c + a * a)
    }
    ;
    I.prototype.GetRatio = function() {
        return this.m_ratio
    }
    ;
    I.prototype.b2PulleyJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_ground = this.m_bodyA.m_world.m_groundBody;
        this.m_groundAnchor1.x = a.groundAnchorA.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor1.y = a.groundAnchorA.y - this.m_ground.m_xf.position.y;
        this.m_groundAnchor2.x = a.groundAnchorB.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor2.y = a.groundAnchorB.y - this.m_ground.m_xf.position.y;
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_ratio = a.ratio;
        this.m_constant = a.lengthA + this.m_ratio * a.lengthB;
        this.m_maxLength1 = q.Min(a.maxLengthA, this.m_constant - this.m_ratio * I.b2_minPulleyLength);
        this.m_maxLength2 = q.Min(a.maxLengthB, (this.m_constant - I.b2_minPulleyLength) / this.m_ratio);
        this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    }
    ;
    I.prototype.InitVelocityConstraints = function(c) {
        var e = this.m_bodyA, n = this.m_bodyB, h;
        h = e.m_xf.R;
        var l = this.m_localAnchor1.x - e.m_sweep.localCenter.x
          , q = this.m_localAnchor1.y - e.m_sweep.localCenter.y
          , m = h.col1.x * l + h.col2.x * q
          , q = h.col1.y * l + h.col2.y * q
          , l = m;
        h = n.m_xf.R;
        var d = this.m_localAnchor2.x - n.m_sweep.localCenter.x
          , r = this.m_localAnchor2.y - n.m_sweep.localCenter.y
          , m = h.col1.x * d + h.col2.x * r
          , r = h.col1.y * d + h.col2.y * r
          , d = m;
        h = n.m_sweep.c.x + d;
        var m = n.m_sweep.c.y + r
          , t = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x
          , s = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(e.m_sweep.c.x + l - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), e.m_sweep.c.y + q - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
        this.m_u2.Set(h - t, m - s);
        h = this.m_u1.Length();
        m = this.m_u2.Length();
        h > a.b2_linearSlop ? this.m_u1.Multiply(1 / h) : this.m_u1.SetZero();
        m > a.b2_linearSlop ? this.m_u2.Multiply(1 / m) : this.m_u2.SetZero();
        0 < this.m_constant - h - this.m_ratio * m ? (this.m_state = y.e_inactiveLimit,
        this.m_impulse = 0) : this.m_state = y.e_atUpperLimit;
        h < this.m_maxLength1 ? (this.m_limitState1 = y.e_inactiveLimit,
        this.m_limitImpulse1 = 0) : this.m_limitState1 = y.e_atUpperLimit;
        m < this.m_maxLength2 ? (this.m_limitState2 = y.e_inactiveLimit,
        this.m_limitImpulse2 = 0) : this.m_limitState2 = y.e_atUpperLimit;
        h = l * this.m_u1.y - q * this.m_u1.x;
        m = d * this.m_u2.y - r * this.m_u2.x;
        this.m_limitMass1 = e.m_invMass + e.m_invI * h * h;
        this.m_limitMass2 = n.m_invMass + n.m_invI * m * m;
        this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
        this.m_limitMass1 = 1 / this.m_limitMass1;
        this.m_limitMass2 = 1 / this.m_limitMass2;
        this.m_pulleyMass = 1 / this.m_pulleyMass;
        c.warmStarting ? (this.m_impulse *= c.dtRatio,
        this.m_limitImpulse1 *= c.dtRatio,
        this.m_limitImpulse2 *= c.dtRatio,
        c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x,
        h = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y,
        m = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x,
        t = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y,
        e.m_linearVelocity.x += e.m_invMass * c,
        e.m_linearVelocity.y += e.m_invMass * h,
        e.m_angularVelocity += e.m_invI * (l * h - q * c),
        n.m_linearVelocity.x += n.m_invMass * m,
        n.m_linearVelocity.y += n.m_invMass * t,
        n.m_angularVelocity += n.m_invI * (d * t - r * m)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    }
    ;
    I.prototype.SolveVelocityConstraints = function() {
        var a = this.m_bodyA, c = this.m_bodyB, e;
        e = a.m_xf.R;
        var h = this.m_localAnchor1.x - a.m_sweep.localCenter.x
          , l = this.m_localAnchor1.y - a.m_sweep.localCenter.y
          , m = e.col1.x * h + e.col2.x * l
          , l = e.col1.y * h + e.col2.y * l
          , h = m;
        e = c.m_xf.R;
        var t = this.m_localAnchor2.x - c.m_sweep.localCenter.x
          , d = this.m_localAnchor2.y - c.m_sweep.localCenter.y
          , m = e.col1.x * t + e.col2.x * d
          , d = e.col1.y * t + e.col2.y * d
          , t = m
          , r = m = e = 0
          , s = 0;
        e = s = e = s = r = m = e = 0;
        this.m_state == y.e_atUpperLimit && (e = a.m_linearVelocity.x + -a.m_angularVelocity * l,
        m = a.m_linearVelocity.y + a.m_angularVelocity * h,
        r = c.m_linearVelocity.x + -c.m_angularVelocity * d,
        s = c.m_linearVelocity.y + c.m_angularVelocity * t,
        e = -(this.m_u1.x * e + this.m_u1.y * m) - this.m_ratio * (this.m_u2.x * r + this.m_u2.y * s),
        s = this.m_pulleyMass * -e,
        e = this.m_impulse,
        this.m_impulse = q.Max(0, this.m_impulse + s),
        s = this.m_impulse - e,
        e = -s * this.m_u1.x,
        m = -s * this.m_u1.y,
        r = -this.m_ratio * s * this.m_u2.x,
        s = -this.m_ratio * s * this.m_u2.y,
        a.m_linearVelocity.x += a.m_invMass * e,
        a.m_linearVelocity.y += a.m_invMass * m,
        a.m_angularVelocity += a.m_invI * (h * m - l * e),
        c.m_linearVelocity.x += c.m_invMass * r,
        c.m_linearVelocity.y += c.m_invMass * s,
        c.m_angularVelocity += c.m_invI * (t * s - d * r));
        this.m_limitState1 == y.e_atUpperLimit && (e = a.m_linearVelocity.x + -a.m_angularVelocity * l,
        m = a.m_linearVelocity.y + a.m_angularVelocity * h,
        e = -(this.m_u1.x * e + this.m_u1.y * m),
        s = -this.m_limitMass1 * e,
        e = this.m_limitImpulse1,
        this.m_limitImpulse1 = q.Max(0, this.m_limitImpulse1 + s),
        s = this.m_limitImpulse1 - e,
        e = -s * this.m_u1.x,
        m = -s * this.m_u1.y,
        a.m_linearVelocity.x += a.m_invMass * e,
        a.m_linearVelocity.y += a.m_invMass * m,
        a.m_angularVelocity += a.m_invI * (h * m - l * e));
        this.m_limitState2 == y.e_atUpperLimit && (r = c.m_linearVelocity.x + -c.m_angularVelocity * d,
        s = c.m_linearVelocity.y + c.m_angularVelocity * t,
        e = -(this.m_u2.x * r + this.m_u2.y * s),
        s = -this.m_limitMass2 * e,
        e = this.m_limitImpulse2,
        this.m_limitImpulse2 = q.Max(0, this.m_limitImpulse2 + s),
        s = this.m_limitImpulse2 - e,
        r = -s * this.m_u2.x,
        s = -s * this.m_u2.y,
        c.m_linearVelocity.x += c.m_invMass * r,
        c.m_linearVelocity.y += c.m_invMass * s,
        c.m_angularVelocity += c.m_invI * (t * s - d * r))
    }
    ;
    I.prototype.SolvePositionConstraints = function() {
        var c = this.m_bodyA, e = this.m_bodyB, n, h = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x, l = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y, m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x, t = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y, d = 0, r = 0, s = 0, u = 0, w = n = 0, A = 0, B = 0, C = w = B = n = w = n = 0;
        this.m_state == y.e_atUpperLimit && (n = c.m_xf.R,
        d = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
        r = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
        w = n.col1.x * d + n.col2.x * r,
        r = n.col1.y * d + n.col2.y * r,
        d = w,
        n = e.m_xf.R,
        s = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
        u = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
        w = n.col1.x * s + n.col2.x * u,
        u = n.col1.y * s + n.col2.y * u,
        s = w,
        n = c.m_sweep.c.x + d,
        w = c.m_sweep.c.y + r,
        A = e.m_sweep.c.x + s,
        B = e.m_sweep.c.y + u,
        this.m_u1.Set(n - h, w - l),
        this.m_u2.Set(A - m, B - t),
        n = this.m_u1.Length(),
        w = this.m_u2.Length(),
        n > a.b2_linearSlop ? this.m_u1.Multiply(1 / n) : this.m_u1.SetZero(),
        w > a.b2_linearSlop ? this.m_u2.Multiply(1 / w) : this.m_u2.SetZero(),
        n = this.m_constant - n - this.m_ratio * w,
        C = q.Max(C, -n),
        n = q.Clamp(n + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0),
        B = -this.m_pulleyMass * n,
        n = -B * this.m_u1.x,
        w = -B * this.m_u1.y,
        A = -this.m_ratio * B * this.m_u2.x,
        B = -this.m_ratio * B * this.m_u2.y,
        c.m_sweep.c.x += c.m_invMass * n,
        c.m_sweep.c.y += c.m_invMass * w,
        c.m_sweep.a += c.m_invI * (d * w - r * n),
        e.m_sweep.c.x += e.m_invMass * A,
        e.m_sweep.c.y += e.m_invMass * B,
        e.m_sweep.a += e.m_invI * (s * B - u * A),
        c.SynchronizeTransform(),
        e.SynchronizeTransform());
        this.m_limitState1 == y.e_atUpperLimit && (n = c.m_xf.R,
        d = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
        r = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
        w = n.col1.x * d + n.col2.x * r,
        r = n.col1.y * d + n.col2.y * r,
        d = w,
        n = c.m_sweep.c.x + d,
        w = c.m_sweep.c.y + r,
        this.m_u1.Set(n - h, w - l),
        n = this.m_u1.Length(),
        n > a.b2_linearSlop ? (this.m_u1.x *= 1 / n,
        this.m_u1.y *= 1 / n) : this.m_u1.SetZero(),
        n = this.m_maxLength1 - n,
        C = q.Max(C, -n),
        n = q.Clamp(n + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0),
        B = -this.m_limitMass1 * n,
        n = -B * this.m_u1.x,
        w = -B * this.m_u1.y,
        c.m_sweep.c.x += c.m_invMass * n,
        c.m_sweep.c.y += c.m_invMass * w,
        c.m_sweep.a += c.m_invI * (d * w - r * n),
        c.SynchronizeTransform());
        this.m_limitState2 == y.e_atUpperLimit && (n = e.m_xf.R,
        s = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
        u = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
        w = n.col1.x * s + n.col2.x * u,
        u = n.col1.y * s + n.col2.y * u,
        s = w,
        A = e.m_sweep.c.x + s,
        B = e.m_sweep.c.y + u,
        this.m_u2.Set(A - m, B - t),
        w = this.m_u2.Length(),
        w > a.b2_linearSlop ? (this.m_u2.x *= 1 / w,
        this.m_u2.y *= 1 / w) : this.m_u2.SetZero(),
        n = this.m_maxLength2 - w,
        C = q.Max(C, -n),
        n = q.Clamp(n + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0),
        B = -this.m_limitMass2 * n,
        A = -B * this.m_u2.x,
        B = -B * this.m_u2.y,
        e.m_sweep.c.x += e.m_invMass * A,
        e.m_sweep.c.y += e.m_invMass * B,
        e.m_sweep.a += e.m_invI * (s * B - u * A),
        e.SynchronizeTransform());
        return C < a.b2_linearSlop
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2
    });
    Box2D.inherit(R, Box2D.Dynamics.Joints.b2JointDef);
    R.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    R.b2PulleyJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.groundAnchorA = new s;
        this.groundAnchorB = new s;
        this.localAnchorA = new s;
        this.localAnchorB = new s
    }
    ;
    R.prototype.b2PulleyJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_pulleyJoint;
        this.groundAnchorA.Set(-1, 1);
        this.groundAnchorB.Set(1, 1);
        this.localAnchorA.Set(-1, 0);
        this.localAnchorB.Set(1, 0);
        this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
        this.ratio = 1;
        this.collideConnected = !0
    }
    ;
    R.prototype.Initialize = function(a, c, e, h, l, m, q) {
        void 0 === q && (q = 0);
        this.bodyA = a;
        this.bodyB = c;
        this.groundAnchorA.SetV(e);
        this.groundAnchorB.SetV(h);
        this.localAnchorA = this.bodyA.GetLocalPoint(l);
        this.localAnchorB = this.bodyB.GetLocalPoint(m);
        a = l.x - e.x;
        e = l.y - e.y;
        this.lengthA = Math.sqrt(a * a + e * e);
        e = m.x - h.x;
        h = m.y - h.y;
        this.lengthB = Math.sqrt(e * e + h * h);
        this.ratio = q;
        q = this.lengthA + this.ratio * this.lengthB;
        this.maxLengthA = q - this.ratio * I.b2_minPulleyLength;
        this.maxLengthB = (q - I.b2_minPulleyLength) / this.ratio
    }
    ;
    Box2D.inherit(K, Box2D.Dynamics.Joints.b2Joint);
    K.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    K.b2RevoluteJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.K3 = new c;
        this.impulse3 = new e;
        this.impulse2 = new s;
        this.reduced = new s;
        this.m_localAnchor1 = new s;
        this.m_localAnchor2 = new s;
        this.m_impulse = new e;
        this.m_mass = new m
    }
    ;
    K.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    }
    ;
    K.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    }
    ;
    K.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_impulse.x,a * this.m_impulse.y)
    }
    ;
    K.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.z
    }
    ;
    K.prototype.GetJointAngle = function() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    }
    ;
    K.prototype.GetJointSpeed = function() {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
    }
    ;
    K.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    }
    ;
    K.prototype.EnableLimit = function(a) {
        this.m_enableLimit = a
    }
    ;
    K.prototype.GetLowerLimit = function() {
        return this.m_lowerAngle
    }
    ;
    K.prototype.GetUpperLimit = function() {
        return this.m_upperAngle
    }
    ;
    K.prototype.SetLimits = function(a, c) {
        void 0 === a && (a = 0);
        void 0 === c && (c = 0);
        this.m_lowerAngle = a;
        this.m_upperAngle = c
    }
    ;
    K.prototype.IsMotorEnabled = function() {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        return this.m_enableMotor
    }
    ;
    K.prototype.EnableMotor = function(a) {
        this.m_enableMotor = a
    }
    ;
    K.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    }
    ;
    K.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    }
    ;
    K.prototype.SetMaxMotorTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_maxMotorTorque = a
    }
    ;
    K.prototype.GetMotorTorque = function() {
        return this.m_maxMotorTorque
    }
    ;
    K.prototype.b2RevoluteJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_referenceAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = 0;
        this.m_lowerAngle = a.lowerAngle;
        this.m_upperAngle = a.upperAngle;
        this.m_maxMotorTorque = a.maxMotorTorque;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = y.e_inactiveLimit
    }
    ;
    K.prototype.InitVelocityConstraints = function(c) {
        var e = this.m_bodyA, n = this.m_bodyB, h, l = 0;
        h = e.m_xf.R;
        var m = this.m_localAnchor1.x - e.m_sweep.localCenter.x
          , s = this.m_localAnchor1.y - e.m_sweep.localCenter.y
          , l = h.col1.x * m + h.col2.x * s
          , s = h.col1.y * m + h.col2.y * s
          , m = l;
        h = n.m_xf.R;
        var d = this.m_localAnchor2.x - n.m_sweep.localCenter.x
          , r = this.m_localAnchor2.y - n.m_sweep.localCenter.y
          , l = h.col1.x * d + h.col2.x * r
          , r = h.col1.y * d + h.col2.y * r
          , d = l;
        h = e.m_invMass;
        var l = n.m_invMass
          , t = e.m_invI
          , u = n.m_invI;
        this.m_mass.col1.x = h + l + s * s * t + r * r * u;
        this.m_mass.col2.x = -s * m * t - r * d * u;
        this.m_mass.col3.x = -s * t - r * u;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = h + l + m * m * t + d * d * u;
        this.m_mass.col3.y = m * t + d * u;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = t + u;
        this.m_motorMass = 1 / (t + u);
        !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
        if (this.m_enableLimit) {
            var w = n.m_sweep.a - e.m_sweep.a - this.m_referenceAngle;
            q.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * a.b2_angularSlop ? this.m_limitState = y.e_equalLimits : w <= this.m_lowerAngle ? (this.m_limitState != y.e_atLowerLimit && (this.m_impulse.z = 0),
            this.m_limitState = y.e_atLowerLimit) : w >= this.m_upperAngle ? (this.m_limitState != y.e_atUpperLimit && (this.m_impulse.z = 0),
            this.m_limitState = y.e_atUpperLimit) : (this.m_limitState = y.e_inactiveLimit,
            this.m_impulse.z = 0)
        } else
            this.m_limitState = y.e_inactiveLimit;
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio,
        this.m_impulse.y *= c.dtRatio,
        this.m_motorImpulse *= c.dtRatio,
        c = this.m_impulse.x,
        w = this.m_impulse.y,
        e.m_linearVelocity.x -= h * c,
        e.m_linearVelocity.y -= h * w,
        e.m_angularVelocity -= t * (m * w - s * c + this.m_motorImpulse + this.m_impulse.z),
        n.m_linearVelocity.x += l * c,
        n.m_linearVelocity.y += l * w,
        n.m_angularVelocity += u * (d * w - r * c + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(),
        this.m_motorImpulse = 0)
    }
    ;
    K.prototype.SolveVelocityConstraints = function(a) {
        var c = this.m_bodyA
          , e = this.m_bodyB
          , h = 0
          , l = h = 0
          , m = 0
          , s = 0
          , d = 0
          , r = c.m_linearVelocity
          , t = c.m_angularVelocity
          , u = e.m_linearVelocity
          , w = e.m_angularVelocity
          , A = c.m_invMass
          , B = e.m_invMass
          , C = c.m_invI
          , F = e.m_invI;
        this.m_enableMotor && this.m_limitState != y.e_equalLimits && (l = this.m_motorMass * -(w - t - this.m_motorSpeed),
        m = this.m_motorImpulse,
        s = a.dt * this.m_maxMotorTorque,
        this.m_motorImpulse = q.Clamp(this.m_motorImpulse + l, -s, s),
        l = this.m_motorImpulse - m,
        t -= C * l,
        w += F * l);
        if (this.m_enableLimit && this.m_limitState != y.e_inactiveLimit) {
            a = c.m_xf.R;
            l = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
            m = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
            h = a.col1.x * l + a.col2.x * m;
            m = a.col1.y * l + a.col2.y * m;
            l = h;
            a = e.m_xf.R;
            s = this.m_localAnchor2.x - e.m_sweep.localCenter.x;
            d = this.m_localAnchor2.y - e.m_sweep.localCenter.y;
            h = a.col1.x * s + a.col2.x * d;
            d = a.col1.y * s + a.col2.y * d;
            s = h;
            a = u.x + -w * d - r.x - -t * m;
            var H = u.y + w * s - r.y - t * l;
            this.m_mass.Solve33(this.impulse3, -a, -H, -(w - t));
            this.m_limitState == y.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == y.e_atLowerLimit ? (h = this.m_impulse.z + this.impulse3.z,
            0 > h && (this.m_mass.Solve22(this.reduced, -a, -H),
            this.impulse3.x = this.reduced.x,
            this.impulse3.y = this.reduced.y,
            this.impulse3.z = -this.m_impulse.z,
            this.m_impulse.x += this.reduced.x,
            this.m_impulse.y += this.reduced.y,
            this.m_impulse.z = 0)) : this.m_limitState == y.e_atUpperLimit && (h = this.m_impulse.z + this.impulse3.z,
            0 < h && (this.m_mass.Solve22(this.reduced, -a, -H),
            this.impulse3.x = this.reduced.x,
            this.impulse3.y = this.reduced.y,
            this.impulse3.z = -this.m_impulse.z,
            this.m_impulse.x += this.reduced.x,
            this.m_impulse.y += this.reduced.y,
            this.m_impulse.z = 0));
            r.x -= A * this.impulse3.x;
            r.y -= A * this.impulse3.y;
            t -= C * (l * this.impulse3.y - m * this.impulse3.x + this.impulse3.z);
            u.x += B * this.impulse3.x;
            u.y += B * this.impulse3.y;
            w += F * (s * this.impulse3.y - d * this.impulse3.x + this.impulse3.z)
        } else
            a = c.m_xf.R,
            l = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
            m = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
            h = a.col1.x * l + a.col2.x * m,
            m = a.col1.y * l + a.col2.y * m,
            l = h,
            a = e.m_xf.R,
            s = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
            d = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
            h = a.col1.x * s + a.col2.x * d,
            d = a.col1.y * s + a.col2.y * d,
            s = h,
            this.m_mass.Solve22(this.impulse2, -(u.x + -w * d - r.x - -t * m), -(u.y + w * s - r.y - t * l)),
            this.m_impulse.x += this.impulse2.x,
            this.m_impulse.y += this.impulse2.y,
            r.x -= A * this.impulse2.x,
            r.y -= A * this.impulse2.y,
            t -= C * (l * this.impulse2.y - m * this.impulse2.x),
            u.x += B * this.impulse2.x,
            u.y += B * this.impulse2.y,
            w += F * (s * this.impulse2.y - d * this.impulse2.x);
        c.m_linearVelocity.SetV(r);
        c.m_angularVelocity = t;
        e.m_linearVelocity.SetV(u);
        e.m_angularVelocity = w
    }
    ;
    K.prototype.SolvePositionConstraints = function() {
        var c = 0, e, l = this.m_bodyA, h = this.m_bodyB, m = 0, s = e = 0, t = 0, d = 0;
        if (this.m_enableLimit && this.m_limitState != y.e_inactiveLimit) {
            var c = h.m_sweep.a - l.m_sweep.a - this.m_referenceAngle
              , r = 0;
            this.m_limitState == y.e_equalLimits ? (c = q.Clamp(c - this.m_lowerAngle, -a.b2_maxAngularCorrection, a.b2_maxAngularCorrection),
            r = -this.m_motorMass * c,
            m = q.Abs(c)) : this.m_limitState == y.e_atLowerLimit ? (c -= this.m_lowerAngle,
            m = -c,
            c = q.Clamp(c + a.b2_angularSlop, -a.b2_maxAngularCorrection, 0),
            r = -this.m_motorMass * c) : this.m_limitState == y.e_atUpperLimit && (m = c -= this.m_upperAngle,
            c = q.Clamp(c - a.b2_angularSlop, 0, a.b2_maxAngularCorrection),
            r = -this.m_motorMass * c);
            l.m_sweep.a -= l.m_invI * r;
            h.m_sweep.a += h.m_invI * r;
            l.SynchronizeTransform();
            h.SynchronizeTransform()
        }
        e = l.m_xf.R;
        r = this.m_localAnchor1.x - l.m_sweep.localCenter.x;
        c = this.m_localAnchor1.y - l.m_sweep.localCenter.y;
        s = e.col1.x * r + e.col2.x * c;
        c = e.col1.y * r + e.col2.y * c;
        r = s;
        e = h.m_xf.R;
        var u = this.m_localAnchor2.x - h.m_sweep.localCenter.x
          , w = this.m_localAnchor2.y - h.m_sweep.localCenter.y
          , s = e.col1.x * u + e.col2.x * w
          , w = e.col1.y * u + e.col2.y * w
          , u = s
          , t = h.m_sweep.c.x + u - l.m_sweep.c.x - r
          , d = h.m_sweep.c.y + w - l.m_sweep.c.y - c
          , A = t * t + d * d;
        e = Math.sqrt(A);
        var s = l.m_invMass
          , B = h.m_invMass
          , C = l.m_invI
          , F = h.m_invI
          , H = 10 * a.b2_linearSlop;
        A > H * H && (A = 1 / (s + B),
        t = A * -t,
        d = A * -d,
        l.m_sweep.c.x -= 0.5 * s * t,
        l.m_sweep.c.y -= 0.5 * s * d,
        h.m_sweep.c.x += 0.5 * B * t,
        h.m_sweep.c.y += 0.5 * B * d,
        t = h.m_sweep.c.x + u - l.m_sweep.c.x - r,
        d = h.m_sweep.c.y + w - l.m_sweep.c.y - c);
        this.K1.col1.x = s + B;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = s + B;
        this.K2.col1.x = C * c * c;
        this.K2.col2.x = -C * r * c;
        this.K2.col1.y = -C * r * c;
        this.K2.col2.y = C * r * r;
        this.K3.col1.x = F * w * w;
        this.K3.col2.x = -F * u * w;
        this.K3.col1.y = -F * u * w;
        this.K3.col2.y = F * u * u;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.AddM(this.K3);
        this.K.Solve(K.tImpulse, -t, -d);
        t = K.tImpulse.x;
        d = K.tImpulse.y;
        l.m_sweep.c.x -= l.m_invMass * t;
        l.m_sweep.c.y -= l.m_invMass * d;
        l.m_sweep.a -= l.m_invI * (r * d - c * t);
        h.m_sweep.c.x += h.m_invMass * t;
        h.m_sweep.c.y += h.m_invMass * d;
        h.m_sweep.a += h.m_invI * (u * d - w * t);
        l.SynchronizeTransform();
        h.SynchronizeTransform();
        return e <= a.b2_linearSlop && m <= a.b2_angularSlop
    }
    ;
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new s
    });
    Box2D.inherit(M, Box2D.Dynamics.Joints.b2JointDef);
    M.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    M.b2RevoluteJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new s;
        this.localAnchorB = new s
    }
    ;
    M.prototype.b2RevoluteJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_revoluteJoint;
        this.localAnchorA.Set(0, 0);
        this.localAnchorB.Set(0, 0);
        this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
        this.enableMotor = this.enableLimit = !1
    }
    ;
    M.prototype.Initialize = function(a, c, e) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(e);
        this.localAnchorB = this.bodyB.GetLocalPoint(e);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
    ;
    Box2D.inherit(S, Box2D.Dynamics.Joints.b2Joint);
    S.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    S.b2WeldJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new s;
        this.m_localAnchorB = new s;
        this.m_impulse = new e;
        this.m_mass = new m
    }
    ;
    S.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    }
    ;
    S.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    }
    ;
    S.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new s(a * this.m_impulse.x,a * this.m_impulse.y)
    }
    ;
    S.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.z
    }
    ;
    S.prototype.b2WeldJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchorA.SetV(a.localAnchorA);
        this.m_localAnchorB.SetV(a.localAnchorB);
        this.m_referenceAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_mass = new m
    }
    ;
    S.prototype.InitVelocityConstraints = function(a) {
        var c, e = 0, h = this.m_bodyA, l = this.m_bodyB;
        c = h.m_xf.R;
        var m = this.m_localAnchorA.x - h.m_sweep.localCenter.x
          , q = this.m_localAnchorA.y - h.m_sweep.localCenter.y
          , e = c.col1.x * m + c.col2.x * q
          , q = c.col1.y * m + c.col2.y * q
          , m = e;
        c = l.m_xf.R;
        var d = this.m_localAnchorB.x - l.m_sweep.localCenter.x
          , r = this.m_localAnchorB.y - l.m_sweep.localCenter.y
          , e = c.col1.x * d + c.col2.x * r
          , r = c.col1.y * d + c.col2.y * r
          , d = e;
        c = h.m_invMass;
        var e = l.m_invMass
          , s = h.m_invI
          , t = l.m_invI;
        this.m_mass.col1.x = c + e + q * q * s + r * r * t;
        this.m_mass.col2.x = -q * m * s - r * d * t;
        this.m_mass.col3.x = -q * s - r * t;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = c + e + m * m * s + d * d * t;
        this.m_mass.col3.y = m * s + d * t;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = s + t;
        a.warmStarting ? (this.m_impulse.x *= a.dtRatio,
        this.m_impulse.y *= a.dtRatio,
        this.m_impulse.z *= a.dtRatio,
        h.m_linearVelocity.x -= c * this.m_impulse.x,
        h.m_linearVelocity.y -= c * this.m_impulse.y,
        h.m_angularVelocity -= s * (m * this.m_impulse.y - q * this.m_impulse.x + this.m_impulse.z),
        l.m_linearVelocity.x += e * this.m_impulse.x,
        l.m_linearVelocity.y += e * this.m_impulse.y,
        l.m_angularVelocity += t * (d * this.m_impulse.y - r * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
    }
    ;
    S.prototype.SolveVelocityConstraints = function() {
        var a, c = 0, l = this.m_bodyA, h = this.m_bodyB, m = l.m_linearVelocity, q = l.m_angularVelocity, s = h.m_linearVelocity, d = h.m_angularVelocity, r = l.m_invMass, t = h.m_invMass, u = l.m_invI, w = h.m_invI;
        a = l.m_xf.R;
        var y = this.m_localAnchorA.x - l.m_sweep.localCenter.x
          , A = this.m_localAnchorA.y - l.m_sweep.localCenter.y
          , c = a.col1.x * y + a.col2.x * A
          , A = a.col1.y * y + a.col2.y * A
          , y = c;
        a = h.m_xf.R;
        var B = this.m_localAnchorB.x - h.m_sweep.localCenter.x
          , C = this.m_localAnchorB.y - h.m_sweep.localCenter.y
          , c = a.col1.x * B + a.col2.x * C
          , C = a.col1.y * B + a.col2.y * C
          , B = c;
        a = s.x - d * C - m.x + q * A;
        var c = s.y + d * B - m.y - q * y
          , F = d - q
          , H = new e;
        this.m_mass.Solve33(H, -a, -c, -F);
        this.m_impulse.Add(H);
        m.x -= r * H.x;
        m.y -= r * H.y;
        q -= u * (y * H.y - A * H.x + H.z);
        s.x += t * H.x;
        s.y += t * H.y;
        d += w * (B * H.y - C * H.x + H.z);
        l.m_angularVelocity = q;
        h.m_angularVelocity = d
    }
    ;
    S.prototype.SolvePositionConstraints = function() {
        var c, l = 0, m = this.m_bodyA, h = this.m_bodyB;
        c = m.m_xf.R;
        var s = this.m_localAnchorA.x - m.m_sweep.localCenter.x
          , t = this.m_localAnchorA.y - m.m_sweep.localCenter.y
          , l = c.col1.x * s + c.col2.x * t
          , t = c.col1.y * s + c.col2.y * t
          , s = l;
        c = h.m_xf.R;
        var u = this.m_localAnchorB.x - h.m_sweep.localCenter.x
          , d = this.m_localAnchorB.y - h.m_sweep.localCenter.y
          , l = c.col1.x * u + c.col2.x * d
          , d = c.col1.y * u + c.col2.y * d
          , u = l;
        c = m.m_invMass;
        var l = h.m_invMass
          , r = m.m_invI
          , w = h.m_invI
          , y = h.m_sweep.c.x + u - m.m_sweep.c.x - s
          , A = h.m_sweep.c.y + d - m.m_sweep.c.y - t
          , B = h.m_sweep.a - m.m_sweep.a - this.m_referenceAngle
          , C = 10 * a.b2_linearSlop
          , F = Math.sqrt(y * y + A * A)
          , H = q.Abs(B);
        F > C && (r *= 1,
        w *= 1);
        this.m_mass.col1.x = c + l + t * t * r + d * d * w;
        this.m_mass.col2.x = -t * s * r - d * u * w;
        this.m_mass.col3.x = -t * r - d * w;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = c + l + s * s * r + u * u * w;
        this.m_mass.col3.y = s * r + u * w;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = r + w;
        C = new e;
        this.m_mass.Solve33(C, -y, -A, -B);
        m.m_sweep.c.x -= c * C.x;
        m.m_sweep.c.y -= c * C.y;
        m.m_sweep.a -= r * (s * C.y - t * C.x + C.z);
        h.m_sweep.c.x += l * C.x;
        h.m_sweep.c.y += l * C.y;
        h.m_sweep.a += w * (u * C.y - d * C.x + C.z);
        m.SynchronizeTransform();
        h.SynchronizeTransform();
        return F <= a.b2_linearSlop && H <= a.b2_angularSlop
    }
    ;
    Box2D.inherit(Q, Box2D.Dynamics.Joints.b2JointDef);
    Q.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    Q.b2WeldJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new s;
        this.localAnchorB = new s
    }
    ;
    Q.prototype.b2WeldJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = y.e_weldJoint;
        this.referenceAngle = 0
    }
    ;
    Q.prototype.Initialize = function(a, c, e) {
        this.bodyA = a;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(e));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
}
)();
(function() {
    var a = Box2D.Dynamics.b2DebugDraw;
    a.b2DebugDraw = function() {
        this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
        this.m_sprite = {
            graphics: {
                clear: function() {}
            }
        }
    }
    ;
    a.prototype._color = function(a, m) {
        return "rgba(" + ((a & 16711680) >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + m + ")"
    }
    ;
    a.prototype.b2DebugDraw = function() {
        this.m_drawFlags = 0
    }
    ;
    a.prototype.SetFlags = function(a) {
        void 0 === a && (a = 0);
        this.m_drawFlags = a
    }
    ;
    a.prototype.GetFlags = function() {
        return this.m_drawFlags
    }
    ;
    a.prototype.AppendFlags = function(a) {
        void 0 === a && (a = 0);
        this.m_drawFlags |= a
    }
    ;
    a.prototype.ClearFlags = function(a) {
        void 0 === a && (a = 0);
        this.m_drawFlags &= ~a
    }
    ;
    a.prototype.SetSprite = function(a) {
        this.m_ctx = a
    }
    ;
    a.prototype.GetSprite = function() {
        return this.m_ctx
    }
    ;
    a.prototype.SetDrawScale = function(a) {
        void 0 === a && (a = 0);
        this.m_drawScale = a
    }
    ;
    a.prototype.GetDrawScale = function() {
        return this.m_drawScale
    }
    ;
    a.prototype.SetLineThickness = function(a) {
        void 0 === a && (a = 0);
        this.m_lineThickness = a;
        this.m_ctx.strokeWidth = a
    }
    ;
    a.prototype.GetLineThickness = function() {
        return this.m_lineThickness
    }
    ;
    a.prototype.SetAlpha = function(a) {
        void 0 === a && (a = 0);
        this.m_alpha = a
    }
    ;
    a.prototype.GetAlpha = function() {
        return this.m_alpha
    }
    ;
    a.prototype.SetFillAlpha = function(a) {
        void 0 === a && (a = 0);
        this.m_fillAlpha = a
    }
    ;
    a.prototype.GetFillAlpha = function() {
        return this.m_fillAlpha
    }
    ;
    a.prototype.SetXFormScale = function(a) {
        void 0 === a && (a = 0);
        this.m_xformScale = a
    }
    ;
    a.prototype.GetXFormScale = function() {
        return this.m_xformScale
    }
    ;
    a.prototype.DrawPolygon = function(a, m, q) {
        if (m) {
            var s = this.m_ctx
              , e = this.m_drawScale;
            s.beginPath();
            s.strokeStyle = this._color(q.color, this.m_alpha);
            s.moveTo(a[0].x * e, a[0].y * e);
            for (q = 1; q < m; q++)
                s.lineTo(a[q].x * e, a[q].y * e);
            s.lineTo(a[0].x * e, a[0].y * e);
            s.closePath();
            s.stroke()
        }
    }
    ;
    a.prototype.DrawSolidPolygon = function(a, m, q) {
        if (m) {
            var s = this.m_ctx
              , e = this.m_drawScale;
            s.beginPath();
            s.strokeStyle = this._color(q.color, this.m_alpha);
            s.fillStyle = this._color(q.color, this.m_fillAlpha);
            s.moveTo(a[0].x * e, a[0].y * e);
            for (q = 1; q < m; q++)
                s.lineTo(a[q].x * e, a[q].y * e);
            s.lineTo(a[0].x * e, a[0].y * e);
            s.closePath();
            s.fill();
            s.stroke()
        }
    }
    ;
    a.prototype.DrawCircle = function(a, m, q) {
        if (m) {
            var s = this.m_ctx
              , e = this.m_drawScale;
            s.beginPath();
            s.strokeStyle = this._color(q.color, this.m_alpha);
            s.arc(a.x * e, a.y * e, m * e, 0, 2 * Math.PI, !0);
            s.closePath();
            s.stroke()
        }
    }
    ;
    a.prototype.DrawSolidCircle = function(a, m, q, s) {
        if (m) {
            var e = this.m_ctx
              , w = this.m_drawScale
              , t = a.x * w
              , u = a.y * w;
            e.moveTo(0, 0);
            e.beginPath();
            e.strokeStyle = this._color(s.color, this.m_alpha);
            e.arc(t, u, m * w, 0, 2 * Math.PI, !0);
            e.moveTo(t, u);
            e.lineTo((a.x + q.x * m) * w, (a.y + q.y * m) * w);
            e.closePath();
            e.stroke()
        }
    }
    ;
    a.prototype.DrawSegment = function(a, m, q) {
        var s = this.m_ctx
          , e = this.m_drawScale;
        s.strokeStyle = this._color(q.color, this.m_alpha);
        s.beginPath();
        s.moveTo(a.x * e, a.y * e);
        s.lineTo(m.x * e, m.y * e);
        s.closePath();
        s.stroke()
    }
    ;
    a.prototype.DrawTransform = function(a) {
        var m = this.m_ctx
          , q = this.m_drawScale;
        m.beginPath();
        m.strokeStyle = this._color(16711680, this.m_alpha);
        m.moveTo(a.position.x * q, a.position.y * q);
        m.lineTo((a.position.x + this.m_xformScale * a.R.col1.x) * q, (a.position.y + this.m_xformScale * a.R.col1.y) * q);
        m.stroke();
        m.beginPath();
        m.strokeStyle = this._color(65280, this.m_alpha);
        m.moveTo(a.position.x * q, a.position.y * q);
        m.lineTo((a.position.x + this.m_xformScale * a.R.col2.x) * q, (a.position.y + this.m_xformScale * a.R.col2.y) * q);
        m.closePath();
        m.stroke()
    }
}
)();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i)
    Box2D.postDefs[i]();
delete Box2D.postDefs;
Object.prototype.hasOwnProperty = function(a) {
    return "undefined" !== typeof this[a]
}
;
function loadBodyFromRUBE(a, c) {
    if (!a.hasOwnProperty("type"))
        return console.log("Body does not have a 'type' property"),
        null;
    var m = new b2BodyDef;
    2 == a.type ? m.type = b2_dynamicBody : 1 == a.type && (m.type = b2_kinematicBody);
    a.hasOwnProperty("angle") && (m.angle = a.angle);
    a.hasOwnProperty("angularVelocity") && (m.angularVelocity = a.angularVelocity);
    a.hasOwnProperty("active") && (m.awake = a.active);
    a.hasOwnProperty("fixedRotation") && (m.fixedRotation = a.fixedRotation);
    a.hasOwnProperty("linearVelocity") && a.linearVelocity instanceof Object && m.linearVelocity.SetV(a.linearVelocity);
    a.hasOwnProperty("position") && a.position instanceof Object && m.position.SetV(a.position);
    m.awake = a.hasOwnProperty("awake") ? a.awake : !1;
    m = c.CreateBody(m);
    if (a.hasOwnProperty("fixture"))
        for (k = 0; k < a.fixture.length; k++)
            loadFixtureFromRUBE(m, a.fixture[k]);
    a.hasOwnProperty("name") && (m.name = a.name);
    a.hasOwnProperty("customProperties") && (m.customProperties = a.customProperties);
    return m
}
function loadFixtureFromRUBE(a, c) {
    var m = new b2FixtureDef;
    c.hasOwnProperty("friction") && (m.friction = c.friction);
    c.hasOwnProperty("density") && (m.density = c.density);
    c.hasOwnProperty("restitution") && (m.restitution = c.restitution);
    c.hasOwnProperty("sensor") && (m.isSensor = c.sensor);
    c.hasOwnProperty("filter-categoryBits") && (m.filter.categoryBits = c["filter-categoryBits"]);
    c.hasOwnProperty("filter-maskBits") && (m.filter.maskBits = c["filter-maskBits"]);
    c.hasOwnProperty("filter-groupIndex") && (m.filter.groupIndex = c["filter-groupIndex"]);
    if (c.hasOwnProperty("circle")) {
        m.shape = new b2CircleShape;
        m.shape.m_radius = c.circle.radius;
        c.circle.center && m.shape.m_p.SetV(c.circle.center);
        var q = a.CreateFixture(m);
        c.name && (q.name = c.name)
    } else if (c.hasOwnProperty("polygon")) {
        m.shape = new b2PolygonShape;
        var s = [];
        for (v = 0; v < c.polygon.vertices.x.length; v++)
            s.push(new b2Vec2(c.polygon.vertices.x[v],c.polygon.vertices.y[v]));
        m.shape.SetAsArray(s, s.length);
        if ((q = a.CreateFixture(m)) && c.name)
            q.name = c.name
    } else if (c.hasOwnProperty("chain")) {
        m.shape = new b2PolygonShape;
        q = new b2Vec2;
        for (v = 0; v < c.chain.vertices.x.length; v++)
            s = new b2Vec2(c.chain.vertices.x[v],c.chain.vertices.y[v]),
            0 < v && (m.shape.SetAsEdge(q, s),
            q = a.CreateFixture(m),
            c.name && (q.name = c.name)),
            q = s
    } else
        console.log("Could not find shape type for fixture")
}
function getVectorValue(a) {
    return a instanceof Object ? a : {
        x: 0,
        y: 0
    }
}
function loadJointCommonProperties(a, c, m) {
    a.bodyA = m[c.bodyA];
    a.bodyB = m[c.bodyB];
    a.localAnchorA.SetV(getVectorValue(c.anchorA));
    a.localAnchorB.SetV(getVectorValue(c.anchorB));
    c.collideConnected && (a.collideConnected = c.collideConnected)
}
function loadJointFromRUBE(a, c, m) {
    if (!a.hasOwnProperty("type"))
        return console.log("Joint does not have a 'type' property"),
        null;
    if (a.bodyA >= m.length)
        return console.log("Index for bodyA is invalid: " + a.bodyA),
        null;
    if (a.bodyB >= m.length)
        return console.log("Index for bodyB is invalid: " + a.bodyB),
        null;
    var q = null;
    "revolute" == a.type ? (q = new b2RevoluteJointDef,
    loadJointCommonProperties(q, a, m),
    a.hasOwnProperty("refAngle") && (q.referenceAngle = a.refAngle),
    a.hasOwnProperty("lowerLimit") && (q.lowerAngle = a.lowerLimit),
    a.hasOwnProperty("upperLimit") && (q.upperAngle = a.upperLimit),
    a.hasOwnProperty("maxMotorTorque") && (q.maxMotorTorque = a.maxMotorTorque),
    a.hasOwnProperty("motorSpeed") && (q.motorSpeed = a.motorSpeed),
    a.hasOwnProperty("enableLimit") && (q.enableLimit = a.enableLimit),
    a.hasOwnProperty("enableMotor") && (q.enableMotor = a.enableMotor),
    q = c.CreateJoint(q)) : "distance" == a.type || "rope" == a.type ? ("rope" == a.type && console.log("Replacing unsupported rope joint with distance joint!"),
    q = new b2DistanceJointDef,
    loadJointCommonProperties(q, a, m),
    a.hasOwnProperty("length") && (q.length = a.length),
    a.hasOwnProperty("dampingRatio") && (q.dampingRatio = a.dampingRatio),
    a.hasOwnProperty("frequency") && (q.frequencyHz = a.frequency),
    q = c.CreateJoint(q)) : "prismatic" == a.type ? (q = new b2PrismaticJointDef,
    loadJointCommonProperties(q, a, m),
    a.hasOwnProperty("localAxisA") && q.localAxisA.SetV(getVectorValue(a.localAxisA)),
    a.hasOwnProperty("refAngle") && (q.referenceAngle = a.refAngle),
    a.hasOwnProperty("enableLimit") && (q.enableLimit = a.enableLimit),
    a.hasOwnProperty("lowerLimit") && (q.lowerTranslation = a.lowerLimit),
    a.hasOwnProperty("upperLimit") && (q.upperTranslation = a.upperLimit),
    a.hasOwnProperty("enableMotor") && (q.enableMotor = a.enableMotor),
    a.hasOwnProperty("maxMotorForce") && (q.maxMotorForce = a.maxMotorForce),
    a.hasOwnProperty("motorSpeed") && (q.motorSpeed = a.motorSpeed),
    q = c.CreateJoint(q)) : "wheel" == a.type ? (q = new b2DistanceJointDef,
    loadJointCommonProperties(q, a, m),
    q.length = 0,
    a.hasOwnProperty("springDampingRatio") && (q.dampingRatio = a.springDampingRatio),
    a.hasOwnProperty("springFrequency") && (q.frequencyHz = a.springFrequency),
    c.CreateJoint(q),
    q = new b2LineJointDef,
    loadJointCommonProperties(q, a, m),
    a.hasOwnProperty("localAxisA") && q.localAxisA.SetV(getVectorValue(a.localAxisA)),
    q = c.CreateJoint(q)) : "friction" == a.type ? (q = new b2FrictionJointDef,
    loadJointCommonProperties(q, a, m),
    a.hasOwnProperty("maxForce") && (q.maxForce = a.maxForce),
    a.hasOwnProperty("maxTorque") && (q.maxTorque = a.maxTorque),
    q = c.CreateJoint(q)) : "weld" == a.type ? (q = new b2WeldJointDef,
    loadJointCommonProperties(q, a, m),
    a.hasOwnProperty("referenceAngle") && (q.referenceAngle = a.referenceAngle),
    q = c.CreateJoint(q)) : (console.log("Unsupported joint type: " + a.type),
    console.log(a));
    q && a.name && (q.name = a.name);
    return q
}
function makeClone(a) {
    var c = a instanceof Array ? [] : {}, m;
    for (m in a)
        c[m] = a[m] && "object" == typeof a[m] ? makeClone(a[m]) : a[m];
    return c
}
function loadImageFromRUBE(a, c, m) {
    c = makeClone(a);
    c.body = c.hasOwnProperty("body") && 0 <= c.body ? m[c.body] : null;
    c.center = new b2Vec2;
    c.center.SetV(getVectorValue(a.center));
    return c
}
function loadSceneFromRUBE(a) {
    return loadSceneIntoWorld(a, world)
}
function loadSceneIntoWorld(a, c) {
    var m = !0
      , q = [];
    if (a.hasOwnProperty("body"))
        for (var s = 0; s < a.body.length; s++) {
            var e = loadBodyFromRUBE(a.body[s], c);
            e ? q.push(e) : m = !1
        }
    e = [];
    if (a.hasOwnProperty("joint"))
        for (s = 0; s < a.joint.length; s++) {
            var w = loadJointFromRUBE(a.joint[s], c, q);
            w && e.push(w)
        }
    e = [];
    if (a.hasOwnProperty("image")) {
        for (s = 0; s < a.image.length; s++)
            (w = loadImageFromRUBE(a.image[s], c, q)) ? e.push(w) : m = !1;
        c.images = e
    }
    return m
}
function loadWorldFromRUBE(a) {
    var c = new b2Vec2(0,0);
    a.hasOwnProperty("gravity") && a.gravity instanceof Object && c.SetV(a.gravity);
    c = new b2World(c);
    return !loadSceneIntoWorld(a, c) ? !1 : c
}
function getNamedBodies(a, c) {
    var m = [];
    for (b = a.m_bodyList; b; b = b.m_next)
        b.name == c && m.push(b);
    return m
}
function getNamedFixtures(a, c) {
    var m = [];
    for (b = a.m_bodyList; b; b = b.m_next)
        for (f = b.m_fixtureList; f; f = f.m_next)
            f.name == c && m.push(f);
    return m
}
function getNamedJoints(a, c) {
    var m = [];
    for (j = a.m_jointList; j; j = j.m_next)
        j.name == c && m.push(j);
    return m
}
function getNamedImages(a, c) {
    var m = [];
    for (i = 0; i < a.images.length; i++)
        a.images[i].name == c && m.push(a.images[i].name);
    return m
}
function getBodiesByCustomProperty(a, c, m, q) {
    var s = [];
    for (b = a.m_bodyList; b; b = b.m_next)
        if (b.hasOwnProperty("customProperties"))
            for (a = 0; a < b.customProperties.length; a++)
                b.customProperties[a].hasOwnProperty("name") && b.customProperties[a].hasOwnProperty(c) && b.customProperties[a].name == m && b.customProperties[a][c] == q && s.push(b);
    return s
}
function hasCustomProperty(a, c) {
    if (!a.hasOwnProperty("customProperties"))
        return !1;
    for (var m = 0; m < a.customProperties.length; m++)
        if (a.customProperties[m].hasOwnProperty("name") && a.customProperties[m].hasOwnProperty(c))
            return !0;
    return !1
}
function getCustomProperty(a, c, m, q) {
    if (!a.hasOwnProperty("customProperties"))
        return q;
    for (var s = 0; s < a.customProperties.length; s++)
        if (a.customProperties[s].hasOwnProperty("name") && a.customProperties[s].hasOwnProperty(c) && a.customProperties[s].name == m)
            return a.customProperties[s][c];
    return q
}
var e_shapeBit = 1, e_jointBit = 2, e_aabbBit = 4, e_pairBit = 8, e_centerOfMassBit = 16, PTM = 32, world = null, mouseJointGroundBody, canvas, context, myDebugDraw, mouseDownQueryCallback, visibleFixturesQueryCallback, mouseJoint = null, run = !0, frameTime60 = 0, statusUpdateCounter = 0, showStats = !1, mouseDown = !1, shiftDown = !1, originTransform, mousePosPixel = {
    x: 0,
    y: 0
}, prevMousePosPixel = {
    x: 0,
    y: 0
}, mousePosWorld = {
    x: 0,
    y: 0
}, canvasOffset = {
    x: 0,
    y: 0
}, viewCenterPixel = {
    x: 320,
    y: 240
}, viewAABB;
function myRound(a, c) {
    for (var m = 1, q = 0; q < c; q++)
        m *= 10;
    return Math.round(a * m) / m
}
function getWorldPointFromPixelPoint(a) {
    return {
        x: (a.x - canvasOffset.x) / PTM,
        y: (a.y - (canvas.height - canvasOffset.y)) / PTM
    }
}
function updateMousePos(a, c) {
    var m = a.getBoundingClientRect();
    mousePosPixel = {
        x: c.clientX - m.left,
        y: a.height - (c.clientY - m.top)
    };
    mousePosWorld = getWorldPointFromPixelPoint(mousePosPixel)
}
function setViewCenterWorld(a, c) {
    var m = getWorldPointFromPixelPoint(viewCenterPixel)
      , q = a.y - m.y
      , s = c ? 1 : 0.25;
    canvasOffset.x -= myRound(s * (a.x - m.x) * PTM, 0);
    canvasOffset.y += myRound(s * q * PTM, 0)
}
function onMouseMove(a, c) {
    prevMousePosPixel = mousePosPixel;
    updateMousePos(a, c);
    updateStats();
    shiftDown ? (canvasOffset.x += mousePosPixel.x - prevMousePosPixel.x,
    canvasOffset.y -= mousePosPixel.y - prevMousePosPixel.y,
    draw()) : mouseDown && null != mouseJoint && mouseJoint.SetTarget(new b2Vec2(mousePosWorld.x,mousePosWorld.y))
}
var getBodyCB = function(a) {
    return a.GetBody().GetType() != Box2D.Dynamics.b2BodyDef.b2_staticBody && a.GetShape().TestPoint(a.GetBody().GetTransform(), mousePosWorld) ? (selectedBody = a.GetBody(),
    !1) : !0
};
function startMouseJoint() {
    if (null == mouseJoint) {
        var a = new b2AABB;
        a.lowerBound.Set(mousePosWorld.x - 0.001, mousePosWorld.y - 0.001);
        a.upperBound.Set(mousePosWorld.x + 0.001, mousePosWorld.y + 0.001);
        mouseDownQueryCallback.m_fixture = null;
        mouseDownQueryCallback.m_point.Set(mousePosWorld.x, mousePosWorld.y);
        world.QueryAABB(mouseDownQueryCallback, a);
        if (mouseDownQueryCallback.m_fixture) {
            var a = mouseDownQueryCallback.m_fixture.GetBody()
              , c = new b2MouseJointDef;
            c.bodyA = mouseJointGroundBody;
            c.bodyB = a;
            c.target.Set(mousePosWorld.x, mousePosWorld.y);
            c.maxForce = 1E3 * a.GetMass();
            c.collideConnected = !0;
            mouseJoint = world.CreateJoint(c);
            a.SetAwake(!0)
        }
    }
}
function onMouseDown(a, c) {
    updateMousePos(a, c);
    mouseDown || startMouseJoint();
    mouseDown = !0;
    updateStats()
}
function onMouseUp(a, c) {
    mouseDown = !1;
    updateMousePos(a, c);
    updateStats();
    null != mouseJoint && (world.DestroyJoint(mouseJoint),
    mouseJoint = null)
}
function onMouseOut(a, c) {
    onMouseUp(a, c)
}
function onKeyDown(a, c) {
    80 == c.keyCode ? pause() : 82 == c.keyCode ? resetScene() : 83 == c.keyCode ? step() : 88 == c.keyCode ? zoomIn() : 90 == c.keyCode ? zoomOut() : 37 == c.keyCode ? canvasOffset.x += 32 : 39 == c.keyCode ? canvasOffset.x -= 32 : 38 == c.keyCode ? canvasOffset.y += 32 : 40 == c.keyCode ? canvasOffset.y -= 32 : 16 == c.keyCode && (shiftDown = !0);
    if (window.currentTest && window.currentTest.onKeyDown)
        window.currentTest.onKeyDown(a, c);
    draw()
}
function onKeyUp(a, c) {
    16 == c.keyCode && (shiftDown = !1);
    if (window.currentTest && window.currentTest.onKeyUp)
        window.currentTest.onKeyUp(a, c)
}
function zoomIn() {
    var a = getWorldPointFromPixelPoint(viewCenterPixel);
    PTM *= 1.1;
    var c = getWorldPointFromPixelPoint(viewCenterPixel);
    canvasOffset.x += (c.x - a.x) * PTM;
    canvasOffset.y -= (c.y - a.y) * PTM;
    draw()
}
function zoomOut() {
    var a = getWorldPointFromPixelPoint(viewCenterPixel);
    PTM /= 1.1;
    var c = getWorldPointFromPixelPoint(viewCenterPixel);
    canvasOffset.x += (c.x - a.x) * PTM;
    canvasOffset.y -= (c.y - a.y) * PTM;
    draw()
}
function updateDebugDrawCheckboxesFromWorld() {
    var a = myDebugDraw.GetFlags();
    document.getElementById("drawShapesCheck").checked = 0 != (a & e_shapeBit);
    document.getElementById("drawJointsCheck").checked = 0 != (a & e_jointBit);
    document.getElementById("drawAABBsCheck").checked = 0 != (a & e_aabbBit);
    document.getElementById("drawTransformsCheck").checked = 0 != (a & e_centerOfMassBit)
}
function updateWorldFromDebugDrawCheckboxes() {
    var a = 0;
    document.getElementById("drawShapesCheck").checked && (a |= e_shapeBit);
    document.getElementById("drawJointsCheck").checked && (a |= e_jointBit);
    document.getElementById("drawAABBsCheck").checked && (a |= e_aabbBit);
    document.getElementById("drawTransformsCheck").checked && (a |= e_centerOfMassBit);
    myDebugDraw.SetFlags(a)
}
function updateContinuousRefreshStatus() {
    (showStats = document.getElementById("showStatsCheck").checked) ? updateStats() : document.getElementById("feedbackSpan").innerHTML = ""
}
function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvasOffset.x = canvas.width / 2;
    canvasOffset.y = canvas.height / 2;
    canvas.addEventListener("mousemove", function(a) {
        onMouseMove(canvas, a)
    }, !1);
    canvas.addEventListener("mousedown", function(a) {
        onMouseDown(canvas, a)
    }, !1);
    canvas.addEventListener("mouseup", function(a) {
        onMouseUp(canvas, a)
    }, !1);
    canvas.addEventListener("mouseout", function(a) {
        onMouseOut(canvas, a)
    }, !1);
    canvas.addEventListener("keydown", function(a) {
        onKeyDown(canvas, a)
    }, !1);
    canvas.addEventListener("keyup", function(a) {
        onKeyUp(canvas, a)
    }, !1);
    myDebugDraw = new b2DebugDraw;
    myDebugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
    myDebugDraw.SetDrawScale(1);
    myDebugDraw.SetFillAlpha(0.5);
    myDebugDraw.SetLineThickness(1);
    myDebugDraw.SetXFormScale(0.25);
    myDebugDraw.SetFlags(b2DebugDraw.e_shapeBit);
    originTransform = new b2Transform;
    var a = function() {
        this.m_fixture = null;
        this.m_point = new b2Vec2
    };
    a.prototype.ReportFixture = function(a) {
        return 2 == a.GetBody().GetType() && a.TestPoint(this.m_point) ? (this.m_fixture = a,
        !1) : !0
    }
    ;
    mouseDownQueryCallback = new a;
    a = function() {
        this.m_fixtures = []
    }
    ;
    a.prototype.ReportFixture = function(a) {
        this.m_fixtures.push(a);
        return !0
    }
    ;
    viewAABB = new b2AABB;
    visibleFixturesQueryCallback = new a
}
function changeTest() {
    resetScene();
    window.currentTest && window.currentTest.setNiceViewCenter && window.currentTest.setNiceViewCenter();
    updateDebugDrawCheckboxesFromWorld();
    draw()
}
function createWorld() {
    var a = document.getElementById("sceneinfo")
      , c = document.getElementById("testcomments");
    a.innerHTML = "Loading...";
    c.innerHTML = "";
    null != world && (world = null);
    world = new b2World(new b2Vec2(0,-10));
    world.SetDebugDraw(myDebugDraw);
    mouseJointGroundBody = world.CreateBody(new b2BodyDef);
    a = document.getElementById("testSelection");
    eval("window['currentTest']= new " + a.options[a.selectedIndex].value + "();");
    window.currentTest.setup()
}
function getWorldInfo() {
    var a = 0
      , c = 0
      , m = 0;
    for (b = world.m_bodyList; b; b = b.m_next) {
        a++;
        for (f = b.m_fixtureList; f; f = f.m_next)
            c++
    }
    for (j = world.m_jointList; j; j = j.m_next)
        m++;
    return "" + a + " bodies, " + c + " fixtures, " + m + " joints"
}
var resettingScene = !1;
function resetScene() {
    resettingScene = !0;
    createWorld();
    draw()
}
function doAfterLoading() {
    if (world.images)
        for (var a = 0; a < world.images.length; a++) {
            var c = new Image;
            c.src = world.images[a].file;
            world.images[a].imageObj = c
        }
    document.getElementById("sceneinfo").innerHTML = "Scene info: " + getWorldInfo();
    a = "";
    window.currentTest.getComments && (a = window.currentTest.getComments());
    document.getElementById("testcomments").innerHTML = "About: " + a;
    resettingScene = !1;
    draw()
}
function step() {
    if (!resettingScene)
        if (window.currentTest && window.currentTest.step && window.currentTest.step(),
        showStats) {
            var a = Date.now();
            world.Step(1 / 60, 10, 6);
            a = Date.now() - a;
            frameTime60 = frameTime60 * (59 / 60) + a * (1 / 60);
            draw();
            statusUpdateCounter++;
            20 < statusUpdateCounter && (updateStats(),
            statusUpdateCounter = 0)
        } else
            world.Step(1 / 60, 10, 6),
            draw()
}
function setColorFromBodyType(a, c) {
    !1 == c.IsActive() ? a.Set(0.5, 0.5, 0.3) : c.GetType() == b2_staticBody ? a.Set(0.5, 0.9, 0.5) : c.GetType() == b2_kinematicBody ? a.Set(0.5, 0.5, 0.9) : !1 == c.IsAwake() ? a.Set(0.6, 0.6, 0.6) : a.Set(0.9, 0.7, 0.7)
}
function drawLinePolygon(a, c) {
    for (var m = parseInt(a.GetVertexCount()), q = a.GetVertices(), s = new Vector(m), e = 0; e < m; ++e)
        s[e] = b2Math.MulX(c, q[e]);
    q = myDebugDraw.m_drawScale;
    context.moveTo(s[0].x * q, s[0].y * q);
    for (e = 1; e < m; e++)
        context.lineTo(s[e].x * q, s[e].y * q);
    context.lineTo(s[0].x * q, s[0].y * q)
}
function draw() {
    context.fillStyle = "rgb(0,0,0)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(canvasOffset.x, canvasOffset.y);
    context.scale(1, -1);
    context.scale(PTM, PTM);
    context.lineWidth /= PTM;
    context.save();
    context.scale(1, -1);
    if (world.images)
        for (var a = 0; a < world.images.length; a++) {
            var c = world.images[a].imageObj;
            context.save();
            if (world.images[a].body) {
                var m = world.images[a].body.GetPosition();
                context.translate(m.x, -m.y);
                context.rotate(-world.images[a].body.GetAngle());
                m = world.images[a].center;
                context.translate(m.x, -m.y);
                context.rotate(-world.images[a].angle)
            }
            m = 1 / c.height;
            m *= world.images[a].scale;
            context.scale(m, m);
            context.translate(-c.width / 2, -c.height / 2);
            context.drawImage(c, 0, 0);
            context.restore()
        }
    context.restore();
    myDebugDraw.DrawTransform(originTransform);
    a = myDebugDraw.GetFlags();
    myDebugDraw.SetFlags(a & ~e_shapeBit);
    world.DrawDebugData();
    myDebugDraw.SetFlags(a);
    if (0 != (a & e_shapeBit)) {
        a = getWorldPointFromPixelPoint(viewCenterPixel);
        c = 0.5 * canvas.width / PTM;
        m = 0.5 * canvas.height / PTM;
        viewAABB.lowerBound.Set(a.x - c, a.y - m);
        viewAABB.upperBound.Set(a.x + c, a.y + m);
        visibleFixturesQueryCallback.m_fixtures = [];
        world.QueryAABB(visibleFixturesQueryCallback, viewAABB);
        for (var q, s = new b2Color(0,0,0), e = [], w = [], t = [], u = [], C = [], a = 0; a < visibleFixturesQueryCallback.m_fixtures.length; a++)
            q = visibleFixturesQueryCallback.m_fixtures[a],
            m = q.GetShape(),
            m.GetType() == b2Shape.e_circleShape ? e.push(q) : m.GetType() == b2Shape.e_polygonShape && w.push(q);
        for (a = 0; a < e.length; a++)
            q = e[a],
            m = q.GetShape(),
            c = q.GetBody(),
            q = c.GetTransform(),
            setColorFromBodyType(s, c),
            world.DrawShape(m, q, s);
        for (a = 0; a < w.length; a++)
            q = w[a],
            c = q.GetBody(),
            c.GetType() == b2_staticBody ? t.push(q) : c.GetType() == b2_kinematicBody ? u.push(q) : C.push(q);
        context.strokeStyle = "rgb(128,230,128)";
        context.beginPath();
        for (a = 0; a < t.length; a++)
            q = t[a],
            m = q.GetShape(),
            c = q.GetBody(),
            q = c.GetTransform(),
            drawLinePolygon(m, q);
        context.closePath();
        context.stroke();
        context.strokeStyle = "rgb(128,128,230)";
        context.beginPath();
        for (a = 0; a < u.length; a++)
            q = u[a],
            m = q.GetShape(),
            c = q.GetBody(),
            q = c.GetTransform(),
            drawLinePolygon(m, q);
        context.closePath();
        context.stroke();
        context.strokeStyle = "rgb(230,178,178)";
        context.beginPath();
        for (a = 0; a < C.length; a++)
            q = C[a],
            m = q.GetShape(),
            c = q.GetBody(),
            q = c.GetTransform(),
            drawLinePolygon(m, q);
        context.closePath();
        context.stroke()
    }
    null != mouseJoint && (a = mouseJoint.GetAnchorB(),
    c = mouseJoint.GetTarget(),
    context.strokeStyle = "rgb(204,204,204)",
    context.beginPath(),
    context.moveTo(a.x, a.y),
    context.lineTo(c.x, c.y),
    context.stroke());
    context.restore()
}
function updateStats() {
    if (showStats) {
        var a = getWorldPointFromPixelPoint(viewCenterPixel);
        document.getElementById("feedbackSpan").innerHTML = "Status: " + (run ? "running" : "paused") + "<br>Physics step time (average of last 60 steps): " + myRound(frameTime60, 2) + "ms<br>PTM: " + myRound(PTM, 2) + "<br>View center: " + myRound(a.x, 3) + ", " + myRound(a.y, 3) + "<br>Mouse pos (pixel): " + mousePosPixel.x + ", " + mousePosPixel.y + "<br>Mouse pos (world): " + myRound(mousePosWorld.x, 3) + ", " + myRound(mousePosWorld.y, 3)
    }
}
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1E3 / 60)
    }
}();
function animate() {
    run && requestAnimFrame(animate);
    step()
}
function pause() {
    (run = !run) && animate();
    updateStats()
}
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
  , b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef
  , b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape
  , b2MassData = Box2D.Collision.Shapes.b2MassData
  , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
  , b2Shape = Box2D.Collision.Shapes.b2Shape
  , b2CircleContact = Box2D.Dynamics.Contacts.b2CircleContact
  , b2Contact = Box2D.Dynamics.Contacts.b2Contact
  , b2ContactConstraint = Box2D.Dynamics.Contacts.b2ContactConstraint
  , b2ContactConstraintPoint = Box2D.Dynamics.Contacts.b2ContactConstraintPoint
  , b2ContactEdge = Box2D.Dynamics.Contacts.b2ContactEdge
  , b2ContactFactory = Box2D.Dynamics.Contacts.b2ContactFactory
  , b2ContactRegister = Box2D.Dynamics.Contacts.b2ContactRegister
  , b2ContactResult = Box2D.Dynamics.Contacts.b2ContactResult
  , b2ContactSolver = Box2D.Dynamics.Contacts.b2ContactSolver
  , b2EdgeAndCircleContact = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact
  , b2NullContact = Box2D.Dynamics.Contacts.b2NullContact
  , b2PolyAndCircleContact = Box2D.Dynamics.Contacts.b2PolyAndCircleContact
  , b2PolyAndEdgeContact = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact
  , b2PolygonContact = Box2D.Dynamics.Contacts.b2PolygonContact
  , b2PositionSolverManifold = Box2D.Dynamics.Contacts.b2PositionSolverManifold
  , b2Body = Box2D.Dynamics.b2Body
  , b2_staticBody = Box2D.Dynamics.b2Body.b2_staticBody
  , b2_kinematicBody = Box2D.Dynamics.b2Body.b2_kinematicBody
  , b2_dynamicBody = Box2D.Dynamics.b2Body.b2_dynamicBody
  , b2BodyDef = Box2D.Dynamics.b2BodyDef
  , b2ContactFilter = Box2D.Dynamics.b2ContactFilter
  , b2ContactImpulse = Box2D.Dynamics.b2ContactImpulse
  , b2ContactListener = Box2D.Dynamics.b2ContactListener
  , b2ContactManager = Box2D.Dynamics.b2ContactManager
  , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
  , b2DestructionListener = Box2D.Dynamics.b2DestructionListener
  , b2FilterData = Box2D.Dynamics.b2FilterData
  , b2Fixture = Box2D.Dynamics.b2Fixture
  , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
  , b2Island = Box2D.Dynamics.b2Island
  , b2TimeStep = Box2D.Dynamics.b2TimeStep
  , b2World = Box2D.Dynamics.b2World
  , b2Color = Box2D.Common.b2Color
  , b2internal = Box2D.Common.b2internal
  , b2Settings = Box2D.Common.b2Settings
  , b2Mat22 = Box2D.Common.Math.b2Mat22
  , b2Mat33 = Box2D.Common.Math.b2Mat33
  , b2Math = Box2D.Common.Math.b2Math
  , b2Sweep = Box2D.Common.Math.b2Sweep
  , b2Transform = Box2D.Common.Math.b2Transform
  , b2Vec2 = Box2D.Common.Math.b2Vec2
  , b2Vec3 = Box2D.Common.Math.b2Vec3
  , b2AABB = Box2D.Collision.b2AABB
  , b2Bound = Box2D.Collision.b2Bound
  , b2BoundValues = Box2D.Collision.b2BoundValues
  , b2Collision = Box2D.Collision.b2Collision
  , b2ContactID = Box2D.Collision.b2ContactID
  , b2ContactPoint = Box2D.Collision.b2ContactPoint
  , b2Distance = Box2D.Collision.b2Distance
  , b2DistanceInput = Box2D.Collision.b2DistanceInput
  , b2DistanceOutput = Box2D.Collision.b2DistanceOutput
  , b2DistanceProxy = Box2D.Collision.b2DistanceProxy
  , b2DynamicTree = Box2D.Collision.b2DynamicTree
  , b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase
  , b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode
  , b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair
  , b2Manifold = Box2D.Collision.b2Manifold
  , b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint
  , b2Point = Box2D.Collision.b2Point
  , b2RayCastInput = Box2D.Collision.b2RayCastInput
  , b2RayCastOutput = Box2D.Collision.b2RayCastOutput
  , b2Segment = Box2D.Collision.b2Segment
  , b2SeparationFunction = Box2D.Collision.b2SeparationFunction
  , b2Simplex = Box2D.Collision.b2Simplex
  , b2SimplexCache = Box2D.Collision.b2SimplexCache
  , b2SimplexVertex = Box2D.Collision.b2SimplexVertex
  , b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact
  , b2TOIInput = Box2D.Collision.b2TOIInput
  , b2WorldManifold = Box2D.Collision.b2WorldManifold
  , ClipVertex = Box2D.Collision.ClipVertex
  , Features = Box2D.Collision.Features
  , IBroadPhase = Box2D.Collision.IBroadPhase
  , b2Joint = Box2D.Dynamics.Joints.b2Joint
  , b2JointDef = Box2D.Dynamics.Joints.b2JointDef
  , b2JointEdge = Box2D.Dynamics.Joints.b2JointEdge
  , b2LineJoint = Box2D.Dynamics.Joints.b2LineJoint
  , b2LineJointDef = Box2D.Dynamics.Joints.b2LineJointDef
  , b2MouseJoint = Box2D.Dynamics.Joints.b2MouseJoint
  , b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
  , b2PrismaticJoint = Box2D.Dynamics.Joints.b2PrismaticJoint
  , b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef
  , b2PulleyJoint = Box2D.Dynamics.Joints.b2PulleyJoint
  , b2PulleyJointDef = Box2D.Dynamics.Joints.b2PulleyJointDef
  , b2RevoluteJoint = Box2D.Dynamics.Joints.b2RevoluteJoint
  , b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
  , b2WeldJoint = Box2D.Dynamics.Joints.b2WeldJoint
  , b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef
  , b2DistanceJoint = Box2D.Dynamics.Joints.b2DistanceJoint
  , b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef
  , b2FrictionJoint = Box2D.Dynamics.Joints.b2FrictionJoint
  , b2FrictionJointDef = Box2D.Dynamics.Joints.b2FrictionJointDef;
window.onload = function() {
    init();
    changeTest();
    animate()
}
;
window.currentTest = null;
